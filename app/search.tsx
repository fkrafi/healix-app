import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Department, Doctor } from '../common/types';
import { SearchInput } from '../components/common';
import DoctorFilterModal from '../components/search/DoctorFilterModal';
import DoctorCard from '../components/search/DoctorCard';
import FilterChips from '../components/search/FilterChips';
import { getAllDoctors } from '../services/doctorService';


export default function SearchScreen() {
  // Use sessionStorage for filter persistence
  const getSession = <T,>(key: string, fallback: T): T => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const val = window.sessionStorage.getItem(key);
      if (val !== null) {
        try {
          return JSON.parse(val);
        } catch {}
      }
    }
    return fallback;
  };

  const [searchQuery, setSearchQuery] = useState(() => getSession('searchQuery', ''));
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(() => getSession('selectedDepartment', null));
  const [selectedLocation, setSelectedLocation] = useState<string | null>(() => getSession('selectedLocation', null));
  const [selectedGender, setSelectedGender] = useState<'' | import('../components/search/GenderDropdown').Gender>(() => getSession('selectedGender', ''));
  const [selectedNationality, setSelectedNationality] = useState(() => getSession('selectedNationality', ''));
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(() => getSession('selectedLanguage', null));
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  // Save filters to sessionStorage on change
  useEffect(() => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.setItem('searchQuery', JSON.stringify(searchQuery));
      window.sessionStorage.setItem('selectedDepartment', JSON.stringify(selectedDepartment));
      window.sessionStorage.setItem('selectedLocation', JSON.stringify(selectedLocation));
      window.sessionStorage.setItem('selectedGender', JSON.stringify(selectedGender));
      window.sessionStorage.setItem('selectedNationality', JSON.stringify(selectedNationality));
      window.sessionStorage.setItem('selectedLanguage', JSON.stringify(selectedLanguage));
    }
  }, [searchQuery, selectedDepartment, selectedLocation, selectedGender, selectedNationality, selectedLanguage]);

  useEffect(() => { getAllDoctors().then(setDoctors) }, []);

  const handleBack = () => {
    router.back();
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#2c3e50" />
        </TouchableOpacity>
        <SearchInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={() => setSearchQuery('')}
          onSubmit={() => handleSearch(searchQuery)}
        />
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.filterActionRow}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => {
              setSelectedDepartment(null);
              setSelectedLocation(null);
              setSelectedGender('');
              setSelectedNationality('');
              setSelectedLanguage(null);
            }}
          >
            <Ionicons name="close-circle" size={20} color="#7f8c8d" style={{ marginRight: 6 }} />
            <Text style={styles.actionButtonText}>Clear Filter</Text>
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setFilterModalVisible(true)}
          >
            <Ionicons name="filter" size={20} color="#2c5aa0" style={{ marginRight: 6 }} />
            <Text style={styles.actionButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>

        {/* Selected Filter Chips */}
        <FilterChips
          selectedDepartment={selectedDepartment ? String(selectedDepartment) : null}
          setSelectedDepartment={d => setSelectedDepartment(d as Department | null)}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          selectedGender={selectedGender}
          setSelectedGender={g => setSelectedGender(g as '' | import('../components/search/GenderDropdown').Gender)}
          selectedNationality={selectedNationality}
          setSelectedNationality={setSelectedNationality}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          styles={styles}
        />

        {/* Filter Modal */}
        <DoctorFilterModal
          visible={filterModalVisible}
          onClose={() => setFilterModalVisible(false)}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          selectedNationality={selectedNationality}
          setSelectedNationality={setSelectedNationality}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          styles={styles}
        />
      </View>

      <ScrollView style={styles.content}>
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} styles={styles} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginVertical: 4,
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 6,
  },
  chipText: {
    fontSize: 14,
    color: '#2c5aa0',
    fontWeight: '500',
    marginRight: 6,
  },
  sectionContainer: {
    marginTop: 10,
    marginBottom: 8,
    paddingHorizontal: 18,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  filterDropdown: {
    flex: 1,
    // height: 44,
    justifyContent: 'center',
  },
  dropdownWrapper: {
    marginTop: 8,
    marginBottom: 8,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  dropdownButtonText: {
    fontSize: 15,
    color: '#2c5aa0',
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    minWidth: 220,
    maxHeight: 220,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e3f2fd',
  },
  dropdownItemText: {
    fontSize: 15,
    color: '#2c5aa0',
    fontWeight: '500',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  backButton: {
    marginRight: 15,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#2c3e50',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  doctorCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
  },
  doctorCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  doctorDepartment: {
    fontSize: 14,
    color: '#2c5aa0',
    marginTop: 2,
  },
  doctorLocation: {
    fontSize: 13,
    color: '#7f8c8d',
    marginTop: 2,
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  filterActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  actionButtonText: {
    fontSize: 15,
    color: '#2c5aa0',
    fontWeight: '500',
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  recentText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#2c3e50',
  },
  deleteButton: {
    padding: 5,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  suggestionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e3f2fd',
  },
  filterModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  filterModalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: 20,
    width: '100%',
    minHeight: 120,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  filterModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  filterModalHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginRight: 15,
  // },
  suggestionContent: {
    flex: 1,
  },
  suggestionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 2,
  },
  suggestionSubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  noResults: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  noResultsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7f8c8d',
    marginTop: 15,
    marginBottom: 5,
  },
  noResultsSubtext: {
    fontSize: 14,
    color: '#95a5a6',
    textAlign: 'center',
    lineHeight: 20,
  },
  filterClearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    // marginLeft: 10,
    // height: 44,
  },
  applyFilterText: {
    fontSize: 16,
    color: '#2c5aa0',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
});
