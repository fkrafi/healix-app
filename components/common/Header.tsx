import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const handleNotificationPress = () => {
    Alert.alert('Notifications', 'You have 3 new notifications');
  };

  const handleSearchPress = () => {
    router.push('/search');
  };

  return (
    <SafeAreaView style={styles.headerSafeArea}>
      <View style={styles.header}>
        {/* First Row - Greeting and Notification */}
        <View style={styles.headerFirstRow}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.userName}>John Doe</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton} onPress={handleNotificationPress}>
            <View style={styles.notificationIcon}>
              <Ionicons name="notifications" size={20} />
              {/* Notification badge */}
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        
        {/* Second Row - Search Bar */}
        <View style={styles.headerSecondRow}>
          <TouchableOpacity style={styles.searchContainer} onPress={handleSearchPress}>
            <View style={styles.searchIcon}>
              <Ionicons name="search" size={16} color="#6c757d" />
            </View>
            <Text style={styles.searchPlaceholder}>Search doctors or services...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerSafeArea: {
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingBottom: 25,
    paddingTop: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerFirstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  greetingContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  notificationButton: {
    padding: 8,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    // backgroundColor: '#2c5aa0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: '#e74c3c',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerSecondRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: 16,
    color: '#6c757d',
  },
});

export default Header;
