import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Appointment } from '../../common/types';
import { getAppointments } from '../../services/appointmentService';
import AppointmentCard from '../common/AppointmentCard';

const UpcomingAppointments: React.FC = () => {
    const [appointments, setAppointments] = React.useState<Appointment[]>([]);

    useEffect(() => {
        getAppointments()
            .then((appointments: Appointment[]) => {
                const upcoming = appointments.filter(
                    (a: Appointment) => a.status === 'Scheduled' && a.scheduledAt > new Date()
                );
                setAppointments(upcoming);
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upcoming Appointments</Text>
            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.cardWrapper}>
                        <AppointmentCard appointment={item} type="scheduled" />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: 8,
    },
    cardWrapper: {
        marginRight: 12,
        width: 280,
    },
});

export default UpcomingAppointments;
