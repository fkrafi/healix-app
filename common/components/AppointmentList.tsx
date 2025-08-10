import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppointmentCard from '../../components/appointments/AppointmentCard';
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
  sectionTitle,
  onReschedule,
  onCancel,
  onConference,
  onRebook,
}) => {
  if (!appointments || appointments.length === 0) {
    return (
      <View style={styles.section}>
        {sectionTitle && (
          <Text style={styles.sectionTitle}>{sectionTitle}</Text>
        )}
        <Text style={{ color: '#7f8c8d', textAlign: 'center', marginTop: 20 }}>
          {type === 'scheduled' ? 'No scheduled appointments.' : 'No past appointments.'}
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.section}>
      {sectionTitle && (
        <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      )}
      {appointments.map((a) => (
        <AppointmentCard
          key={a.id}
          appointment={a}
          type={type}
          onReschedule={onReschedule ? () => onReschedule(a) : undefined}
          onCancel={onCancel ? () => onCancel(a) : undefined}
          onConference={onConference ? () => onConference(a) : undefined}
          onRebook={onRebook ? () => onRebook(a) : undefined}
          conferenceEnabled={type === 'scheduled' ? new Date().getTime() >= new Date(a.scheduledAt).getTime() : false}
        />
      ))}
    </View>
  );
};

export default AppointmentList;
