import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FilterChipsProps {
  selectedDepartment: string | null;
  setSelectedDepartment: (d: string | null) => void;
  selectedLocation: string | null;
  setSelectedLocation: (l: string | null) => void;
  selectedGender: string;
  setSelectedGender: (g: string) => void;
  selectedNationality: string;
  setSelectedNationality: (n: string) => void;
  selectedLanguage: string | null;
  setSelectedLanguage: (l: string | null) => void;
  styles: any;
}

const FilterChips: React.FC<FilterChipsProps> = ({
  selectedDepartment,
  setSelectedDepartment,
  selectedLocation,
  setSelectedLocation,
  selectedGender,
  setSelectedGender,
  selectedNationality,
  setSelectedNationality,
  selectedLanguage,
  setSelectedLanguage,
  styles,
}) => (
  <View style={styles.chipRow}>
    {selectedDepartment && (
      <View style={styles.chip}>
        <Text style={styles.chipText}>{selectedDepartment}</Text>
        <TouchableOpacity onPress={() => setSelectedDepartment(null)}>
          <Ionicons name="close" size={16} color="#7f8c8d" />
        </TouchableOpacity>
      </View>
    )}
    {selectedLocation && (
      <View style={styles.chip}>
        <Text style={styles.chipText}>{selectedLocation}</Text>
        <TouchableOpacity onPress={() => setSelectedLocation(null)}>
          <Ionicons name="close" size={16} color="#7f8c8d" />
        </TouchableOpacity>
      </View>
    )}
    {selectedGender && (
      <View style={styles.chip}>
        <Text style={styles.chipText}>{selectedGender}</Text>
        <TouchableOpacity onPress={() => setSelectedGender('')}>
          <Ionicons name="close" size={16} color="#7f8c8d" />
        </TouchableOpacity>
      </View>
    )}
    {selectedNationality.length > 0 && (
      <View style={styles.chip}>
        <Text style={styles.chipText}>{selectedNationality}</Text>
        <TouchableOpacity onPress={() => setSelectedNationality('')}>
          <Ionicons name="close" size={16} color="#7f8c8d" />
        </TouchableOpacity>
      </View>
    )}
    {selectedLanguage && (
      <View style={styles.chip}>
        <Text style={styles.chipText}>{selectedLanguage}</Text>
        <TouchableOpacity onPress={() => setSelectedLanguage(null)}>
          <Ionicons name="close" size={16} color="#7f8c8d" />
        </TouchableOpacity>
      </View>
    )}
  </View>
);

export default FilterChips;
