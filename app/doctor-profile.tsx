import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Doctor } from '../common/types';
import { Header } from '../components/common';
import { getDoctorById } from '../services/doctorService';

export default function DoctorProfileScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [doctor, setDoctor] = useState<Doctor | null>(null);

    useEffect(() => {
        getDoctorById(id).then(setDoctor);
    }, [id]);

    if (!doctor) {
        return (
            <View style={styles.centered}>
                <Text>Loading doctor profile...</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
            <Header title='Doctor Profile' backRoute={{ pathname: '/search' }} />

            <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: 0 }}>
                <View style={styles.headerContent}>
                    <Ionicons name="person-circle" size={64} color="#2c5aa0" style={{ marginBottom: 12 }} />
                    <Text style={styles.name}>{doctor.name}</Text>
                    <Text style={styles.department}>{doctor.department}</Text>
                    {!!doctor.nationality && (
                        <Text style={styles.info}>Nationality: {doctor.nationality}</Text>
                    )}
                    {doctor.languages && doctor.languages.length > 0 && (
                        <Text style={styles.info}>Languages: {doctor.languages.join(', ')}</Text>
                    )}
                    {doctor.locations && doctor.locations.length > 0 && (
                        <Text style={styles.info}>Locations: {doctor.locations.join(', ')}</Text>
                    )}
                    <View style={styles.buttonRow}>
                        <Text style={styles.bookButton} onPress={() => {
                            router.push({
                                pathname: '/book-appointment',
                                params: { id: doctor.id },
                            })
                        }}>
                            Book Appointment
                        </Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Expertise</Text>
                    <Text style={styles.sectionText}>{doctor.expertise?.join(', ') || 'N/A'}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Qualifications</Text>
                    <Text style={styles.sectionText}>{doctor.qualifications?.join(', ') || 'N/A'}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Experience</Text>
                    <Text style={styles.sectionText}>{doctor.experiences?.join(', ') || 'N/A'}</Text>
                </View>
            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    safeHeader: {
        backgroundColor: '#2c5aa0',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    stickyHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c5aa0',
        height: 56,
        zIndex: 10,
    },
    headerBackButton: {
        position: 'absolute',
        left: 8,
        top: 0,
        bottom: 0,
        height: 56,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 11,
        padding: 4,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center',
    },
    headerContent: {
        alignItems: 'center',
        paddingVertical: 24,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
    },
    buttonRow: {
        marginTop: 18,
        alignItems: 'center',
    },
    bookButton: {
        backgroundColor: '#2c5aa0',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        paddingHorizontal: 28,
        paddingVertical: 12,
        borderRadius: 24,
        overflow: 'hidden',
        textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        paddingVertical: 24,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 4,
    },
    department: {
        fontSize: 16,
        color: '#2c5aa0',
        marginBottom: 8,
    },
    info: {
        fontSize: 14,
        color: '#7f8c8d',
        marginBottom: 2,
    },
    section: {
        padding: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
        backgroundColor: '#fff',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 6,
    },
    sectionText: {
        fontSize: 15,
        color: '#2c3e50',
    },
});
