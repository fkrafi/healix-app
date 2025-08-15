import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export interface DropdownItem {
  label: string;
  value: string;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap | keyof typeof Ionicons.glyphMap;
  iconType?: 'MaterialCommunityIcons' | 'Ionicons';
}

interface IconDropdownProps {
  items: DropdownItem[];
  selectedValue: string | null;
  onSelect: (value: string) => void;
  placeholder?: string;
  style?: any;
}

const IconDropdown: React.FC<IconDropdownProps> = ({
  items,
  selectedValue,
  onSelect,
  placeholder = 'Select',
  style,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const selectedItem = items.find(item => item.value === selectedValue);

  return (
    <View style={[styles.dropdownWrapper, style]}>
      <View style={styles.dropdownButtonRow}>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setDropdownVisible(true)}
          activeOpacity={0.7}
        >
          {selectedItem?.icon && (() => {
            if (selectedItem.iconType === 'Ionicons') {
              return <Ionicons name={selectedItem.icon as keyof typeof Ionicons.glyphMap} size={20} color="#2c5aa0" style={{ marginRight: 8 }} />;
            } else {
              return <MaterialCommunityIcons name={selectedItem.icon as keyof typeof MaterialCommunityIcons.glyphMap} size={20} color="#2c5aa0" style={{ marginRight: 8 }} />;
            }
          })()}
          <Text style={styles.dropdownButtonText}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
        </TouchableOpacity>
        {selectedValue && (
          <TouchableOpacity style={styles.clearButton} onPress={() => onSelect('')}>
            <Ionicons name="close-circle" size={20} color="#bdc3c7" />
          </TouchableOpacity>
        )}
      </View>
      <Modal
        visible={dropdownVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setDropdownVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setDropdownVisible(false)} activeOpacity={1}>
          <View style={styles.modalContent}>
            <FlatList
              data={items}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => {
                    onSelect(item.value);
                    setDropdownVisible(false);
                  }}
                >
                  {item.icon && (item.iconType === 'Ionicons' ? (
                    <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={20} color="#2c5aa0" style={{ marginRight: 8 }} />
                  ) : (
                    <MaterialCommunityIcons name={item.icon as keyof typeof MaterialCommunityIcons.glyphMap} size={20} color="#2c5aa0" style={{ marginRight: 8 }} />
                  ))}
                  <Text style={styles.dropdownItemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownWrapper: {
    marginTop: 8,
    marginBottom: 8,
  },
  dropdownButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 8,
    flex: 1,
  },
  clearButton: {
    marginLeft: 8,
    padding: 4,
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
});

export default IconDropdown;
