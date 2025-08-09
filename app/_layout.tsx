import { Tabs } from 'expo-router';
import 'react-native-get-random-values';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState, createContext, useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPatient } from '../services/patientService';
import type { Patient } from '../common/types';

// Patient Context
export const PatientContext = createContext<Patient | null>(null);
export const usePatient = () => useContext(PatientContext);
// Tab icon components
function HomeIcon({ color, focused }: { readonly color: string; readonly focused: boolean }) {
    return <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />;
}

function AppointmentsIcon({ color, focused }: { readonly color: string; readonly focused: boolean }) {
    return <Ionicons name={focused ? 'calendar' : 'calendar-outline'} size={24} color={color} />;
}

function RecordsIcon({ color, focused }: { readonly color: string; readonly focused: boolean }) {
    return <Ionicons name={focused ? 'document-text' : 'document-text-outline'} size={24} color={color} />;
}

function MessagesIcon({ color, focused }: { readonly color: string; readonly focused: boolean }) {
    return <Ionicons name={focused ? 'chatbubbles' : 'chatbubbles-outline'} size={24} color={color} />;
}

function ProfileIcon({ color, focused }: { readonly color: string; readonly focused: boolean }) {
    return <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={color} />;
}


export default function TabLayout() {
    const insets = useSafeAreaInsets();
    const [patient, setPatient] = useState<Patient | null>(null);

    useEffect(() => {
        AsyncStorage.getItem('currentPatient')
            .then((patient: Patient | null) => {
                if (patient) {
                    setPatient(patient);
                } else {
                    getPatient().then((p) => {
                        setPatient(p);
                        AsyncStorage.setItem('currentPatient', p);
                    });
                }
            });
    }, []);

    return (
        <PatientContext.Provider value={patient}>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#2c5aa0',
                    tabBarInactiveTintColor: '#95a5a6',
                    tabBarStyle: {
                        backgroundColor: '#ffffff',
                        borderTopWidth: 1,
                        borderTopColor: '#e9ecef',
                        height: 60 + insets.bottom,
                        paddingBottom: insets.bottom + 5,
                        paddingTop: 5,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: '600',
                    },
                    headerShown: false,
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: HomeIcon,
                    }}
                />
                <Tabs.Screen
                    name="appointments"
                    options={{
                        title: 'Appointments',
                        tabBarIcon: AppointmentsIcon,
                    }}
                />
                <Tabs.Screen
                    name="records"
                    options={{
                        title: 'Records',
                        tabBarIcon: RecordsIcon,
                    }}
                />
                <Tabs.Screen
                    name="messages"
                    options={{
                        title: 'Messages',
                        tabBarIcon: MessagesIcon,
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        tabBarIcon: ProfileIcon,
                    }}
                />
                <Tabs.Screen
                    name="search"
                    options={{
                        href: null, // This hides the screen from the tab bar
                    }}
                />
            </Tabs>
        </PatientContext.Provider>
    );
}
