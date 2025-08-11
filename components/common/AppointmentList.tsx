import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appointment } from '../../common/types';
import AppointmentCard from './AppointmentCard';

interface AppointmentListProps {
  appointments: Appointment[];
}


const AppointmentList: React.FC<AppointmentListProps> = ({
  appointments
}) => {
  return (
    <View style={styles.section}>
      {appointments.map((a) => (
        <AppointmentCard key={a.id} appointment={a} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    // paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default AppointmentList;
