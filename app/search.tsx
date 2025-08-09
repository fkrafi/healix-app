import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const recentSearches = [
    'Dr. Sarah Johnson',
    'Cardiology',
    'Blood test',
    'Vaccination',
    'Emergency care'
  ];

  const suggestedSearches = [
    { icon: 'medical', title: 'Find a Doctor', subtitle: 'Browse by specialty' },
    { icon: 'calendar', title: 'Book Appointment', subtitle: 'Schedule your visit' },
    { icon: 'location', title: 'Find Clinic', subtitle: 'Locate nearby facilities' },
    { icon: 'flask', title: 'Lab Results', subtitle: 'View test results' },
  ];

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
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#6c757d" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search doctors, services, or symptoms..."
            placeholderTextColor="#6c757d"
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus={true}
            returnKeyType="search"
            onSubmitEditing={() => handleSearch(searchQuery)}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color="#6c757d" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Recent Searches */}
        {searchQuery.length === 0 && (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Recent Searches</Text>
              {recentSearches.map((search, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.recentItem}
                  onPress={() => handleSearch(search)}
                >
                  <Ionicons name="time" size={16} color="#7f8c8d" />
                  <Text style={styles.recentText}>{search}</Text>
                  <TouchableOpacity style={styles.deleteButton}>
                    <Ionicons name="close" size={14} color="#bdc3c7" />
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </View>

            {/* Suggested Searches */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Quick Actions</Text>
              {suggestedSearches.map((item, index) => (
                <TouchableOpacity key={index} style={styles.suggestionItem}>
                  <View style={styles.suggestionIcon}>
                    <Ionicons name={item.icon as any} size={20} color="#2c5aa0" />
                  </View>
                  <View style={styles.suggestionContent}>
                    <Text style={styles.suggestionTitle}>{item.title}</Text>
                    <Text style={styles.suggestionSubtitle}>{item.subtitle}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={16} color="#bdc3c7" />
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {/* Search Results */}
        {searchQuery.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Search Results for "{searchQuery}"</Text>
            <View style={styles.noResults}>
              <Ionicons name="search" size={48} color="#bdc3c7" />
              <Text style={styles.noResultsText}>No results found</Text>
              <Text style={styles.noResultsSubtext}>
                Try adjusting your search terms or browse our quick actions above
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
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
});
