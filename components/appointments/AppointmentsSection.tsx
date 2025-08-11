import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppointmentList from '../common/AppointmentList';
import { Appointment } from '../../common/types';

interface AppointmentsSectionProps {
  sectionTitle: string;
  appointments: Appointment[];
}

const AppointmentsSection: React.FC<AppointmentsSectionProps> = ({ sectionTitle, appointments }) => {
  return (
    <View style={styles.appointmentsSection}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        decelerationRate="fast"
        snapToInterval={280}
        snapToAlignment="start"
        contentContainerStyle={styles.carouselContainer}
        style={styles.appointmentsScrollView}
      >
        {appointments.length === 0 ?
          (<Text style={{ color: '#7f8c8d', textAlign: 'center', marginTop: 20 }}>No appointments.</Text>) :
          (<AppointmentList appointments={appointments} />)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  appointmentsSection: {
    marginBottom: 20,
    // height: 220,
  },
  appointmentsScrollView: {
    // height: 180,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  carouselContainer: {
    // paddingHorizontal: 20,
    width: '100%'
  },
});

export default AppointmentsSection;
