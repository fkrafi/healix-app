import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Tabs } from 'expo-router';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import 'react-native-get-random-values';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { Patient } from '../common/types';
import { getPatient } from '../services/patientService';

// Patient Context
export const PatientContext = createContext<Patient | null>(null);
export const usePatient = () => useContext(PatientContext);

// Emergency screen component that triggers the call
function EmergencyScreen() {
    useEffect(() => {
        Linking.openURL('tel:0547728502');
    }, []);
    return null;
}
// Removed duplicate import of Linking

// Tab icon components
function HomeIcon({ color, focused }: { readonly color: string; readonly focused: boolean }) {
    return <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />;
}

function AppointmentsIcon({ color, focused }: { readonly color: string; readonly focused: boolean }) {
    return <Ionicons name={focused ? 'calendar' : 'calendar-outline'} size={24} color={color} />;
}

function EmergencyIcon({ color, focused }: { readonly color: string; readonly focused: boolean }) {
    return <Ionicons name={focused ? 'call' : 'call-outline'} size={24} color={color} />;
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
            .then((storedPatient: string | null) => {
                if (storedPatient) {
                    try {
                        const patientObj: Patient = JSON.parse(storedPatient);
                        setPatient(patientObj);
                    } catch {
                        getPatient().then((p) => {
                            setPatient(p);
                            AsyncStorage.setItem('currentPatient', JSON.stringify(p));
                        });
                    }
                } else {
                    getPatient().then((p) => {
                        setPatient(p);
                        AsyncStorage.setItem('currentPatient', JSON.stringify(p));
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
                    name="Emergency"
                    options={{
                        title: 'Emergency',
                        tabBarIcon: EmergencyIcon,
                        tabBarButton: (props) => (
                            <TouchableOpacity
                                {...(props as React.ComponentProps<typeof TouchableOpacity>)}
                                onPress={() => Linking.openURL('tel:0547728502')}
                            >
                                {EmergencyIcon({ color: props.accessibilityState?.selected ? '#2c5aa0' : '#95a5a6', focused: !!props.accessibilityState?.selected })}
                            </TouchableOpacity>
                        ),
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
                    // options={{
                    //     title: 'Messages',
                    //     tabBarIcon: MessagesIcon,
                    // }}
                    options={{
                        href: null, // This hides the screen from the tab bar
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
