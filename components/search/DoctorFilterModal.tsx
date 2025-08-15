import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DepartmentDropdown, GenderDropdown, NationalityDropdown, LanguageDropdown } from '.';
import LocationDropdown from './LocationDropdown';

interface DoctorFilterModalProps {
  visible: boolean;
  onClose: () => void;
  selectedDepartment: any;
  setSelectedDepartment: (d: any) => void;
  selectedLocation: any;
  setSelectedLocation: (l: any) => void;
  selectedGender: any;
  setSelectedGender: (g: any) => void;
  selectedNationality: any;
  setSelectedNationality: (n: any) => void;
  selectedLanguage: any;
  setSelectedLanguage: (l: any) => void;
  onApply?: () => void;
  styles: any;
}

const DoctorFilterModal: React.FC<DoctorFilterModalProps> = ({
  visible,
  onClose,
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
  onApply,
  styles,
}) => (
  <Modal
    visible={visible}
    animationType="slide"
    transparent
    onRequestClose={onClose}
  >
    <View style={styles.filterModalOverlay}>
      <View style={styles.filterModalContent}>
        <View style={styles.filterModalHeader}>
          <Text style={styles.filterModalHeaderText}>Filter Options</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={24} color="#2c3e50" />
          </TouchableOpacity>
        </View>
        <DepartmentDropdown
          selectedDepartment={selectedDepartment}
          onSelect={setSelectedDepartment}
        />
        <LocationDropdown
          selectedLocation={selectedLocation}
          onSelect={setSelectedLocation}
        />
        <GenderDropdown
          selectedGender={selectedGender}
          onSelect={setSelectedGender}
        />
        <NationalityDropdown
          selectedNationality={selectedNationality}
          onSelect={setSelectedNationality}
        />
        <LanguageDropdown
          selectedLanguage={selectedLanguage}
          onSelect={setSelectedLanguage}
        />
        <TouchableOpacity onPress={onApply || onClose}>
          <Text style={styles.applyFilterText}>Apply Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export default DoctorFilterModal;
