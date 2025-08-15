import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Doctor } from '../../common/types';

interface DoctorCardProps {
  doctor: Doctor;
  styles: any;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, styles }) => {
  const router = useRouter();
  const handlePress = () => {
    router.push({
      pathname: '/doctor-profile',
      params: { id: doctor.id },
    });
  };
  return (
    <TouchableOpacity style={styles.doctorCard} onPress={handlePress} activeOpacity={0.85}>
      <View style={styles.doctorCardHeader}>
        <Ionicons name="person-circle" size={32} color="#2c5aa0" style={{ marginRight: 12 }} />
        <View>
          <Text style={styles.doctorName}>{doctor.name}</Text>
          <Text style={styles.doctorDepartment}>{doctor.department}</Text>
          {doctor.nationality && (
            <Text style={styles.doctorLocation}>Nationality: {doctor.nationality}</Text>
          )}
          {doctor.languages && doctor.languages.length > 0 && (
            <Text style={styles.doctorLocation}>Languages: {doctor.languages.join(', ')}</Text>
          )}
          {doctor.locations && doctor.locations.length > 0 && (
            <Text style={styles.doctorLocation}>{doctor.locations.join(', ')}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;
