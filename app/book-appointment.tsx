import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Doctor } from '../common/types';
import Header from '../components/common/Header';
import IconDropdown from '../components/common/IconDropdown';
import LocationDropdown from '../components/search/LocationDropdown';
import { getDoctorById } from '../services/doctorService';

const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '02:00 PM',
    '03:00 PM',
];

export default function BookAppointmentScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [doctor, setDoctor] = useState<Doctor | null>(null);
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    useEffect(() => {
        getDoctorById(id).then(setDoctor);
    }, [id]);

    const onChangeDate = (event: any, date?: Date) => {
        setShowDatePicker(Platform.OS === 'ios');
        if (date) setSelectedDate(date);
    };

    if (!doctor) {
        return <Text>Loading doctor information...</Text>;
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#f8fafd' }}>
            <Header title="Book Appointment" backRoute={{ pathname: '/doctor-profile', params: { id: doctor.id } }} />
            <ScrollView contentContainerStyle={styles.content}>
                {/* Doctor Card */}
                <View style={styles.doctorCard}>
                    <View style={styles.avatarIcon}>
                        <MaterialCommunityIcons name="doctor" size={48} color="#2c5aa0" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.doctorName}>{doctor?.name}</Text>
                        <Text style={styles.doctorDept}>{doctor?.department}</Text>
                    </View>
                </View>

                {/* Location Dropdown */}
                <Text style={styles.label}>Location</Text>
                <LocationDropdown
                    selectedLocation={selectedLocation}
                    onSelect={setSelectedLocation}
                    locations={doctor.locations || []}
                />

                {/* Date Picker */}
                <Text style={styles.label}>Date</Text>
                <TouchableOpacity style={styles.datePicker} onPress={() => setShowDatePicker(true)}>
                    <Text style={styles.dateText}>{selectedDate.toDateString()}</Text>
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker
                        value={selectedDate}
                        mode="date"
                        display="default"
                        onChange={onChangeDate}
                        minimumDate={new Date()}
                    />
                )}

                {/* Time Dropdown */}
                <Text style={styles.label}>Time</Text>
                <IconDropdown
                    items={availableTimes.map(t => ({ label: t, value: t, icon: 'time', iconType: 'Ionicons' }))}
                    selectedValue={selectedTime}
                    onSelect={setSelectedTime}
                    placeholder="Select Time"
                />

                {/* Book Button */}
                <TouchableOpacity style={styles.bookButton}>
                    <Text style={styles.bookButtonText}>Book Appointment</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 20,
        paddingBottom: 40,
    },
    doctorCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 8,
        elevation: 2,
    },
    avatarIcon: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginRight: 16,
        backgroundColor: '#e3f2fd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    doctorName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    doctorDept: {
        fontSize: 15,
        color: '#2c5aa0',
        marginTop: 2,
    },
    label: {
        fontSize: 15,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 6,
        marginTop: 18,
    },
    datePicker: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 14,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#e9ecef',
    },
    dateText: {
        fontSize: 16,
        color: '#2c3e50',
    },
    bookButton: {
        backgroundColor: '#2c5aa0',
        borderRadius: 10,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 24,
    },
    bookButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});
