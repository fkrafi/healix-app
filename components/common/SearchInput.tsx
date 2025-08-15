import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear?: () => void;
  onSubmit?: () => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  onClear,
  onSubmit,
  placeholder = 'Search doctors...'
}) => (
  <View style={styles.searchContainer}>
    <Ionicons name="search" size={20} color="#6c757d" />
    <TextInput
      style={styles.searchInput}
      placeholder={placeholder}
      placeholderTextColor="#6c757d"
      value={value}
      onChangeText={onChangeText}
      autoFocus={true}
      returnKeyType="search"
      onSubmitEditing={onSubmit}
    />
    {value.length > 0 && (
      <TouchableOpacity onPress={onClear}>
        <Ionicons name="close-circle" size={20} color="#6c757d" />
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
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
});

export default SearchInput;
