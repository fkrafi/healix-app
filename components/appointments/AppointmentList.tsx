import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppointmentCard from './AppointmentCard';
import { Appointment } from '../../common/types';

interface AppointmentListProps {
  appointments: Appointment[];
  type: 'scheduled' | 'history';
  sectionTitle?: string;
  onReschedule?: (appointment: Appointment) => void;
  onCancel?: (appointment: Appointment) => void;
  onConference?: (appointment: Appointment) => void;
  onRebook?: (appointment: Appointment) => void;
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

const AppointmentList: React.FC<AppointmentListProps> = ({
  appointments,
  type,
  sectionTitle
}) => {
  return (
    <View style={styles.section}>
      {sectionTitle && (
        <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      )}
      {(!appointments || appointments.length === 0) ?
        (<Text style={{ color: '#7f8c8d', textAlign: 'center', marginTop: 20 }}>
          {type === 'scheduled' ? 'No scheduled appointments.' : 'No past appointments.'}
        </Text>) : (
          appointments.map((a: Appointment) => (
            <AppointmentCard key={a.id} appointment={a} />
          ))
        )}
    </View>
  );
};

export default AppointmentList;
