import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: () => Alert.alert('Logged out', 'You have been logged out successfully') }
      ]
    );
  };

  const handleEditProfile = () => {
    Alert.alert('Edit Profile', 'Profile editing feature coming soon!');
  };

  const handleSettings = () => {
    Alert.alert('Settings', 'Settings screen coming soon!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Ionicons name="create" size={24} color="#2c5aa0" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileCard}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>JD</Text>
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>john.doe@email.com</Text>
                <Text style={styles.patientId}>Patient ID: #PAT2025001</Text>
              </View>
            </View>
            
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statLabel}>Appointments</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>8</Text>
                <Text style={styles.statLabel}>Prescriptions</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>24</Text>
                <Text style={styles.statLabel}>Records</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Personal Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <View style={styles.infoIcon}>
                <Ionicons name="calendar" size={20} color="#2c5aa0" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Date of Birth</Text>
                <Text style={styles.infoValue}>January 15, 1992</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.infoIcon}>
                <Ionicons name="person" size={20} color="#2c5aa0" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Gender</Text>
                <Text style={styles.infoValue}>Male</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.infoIcon}>
                <Ionicons name="water" size={20} color="#e74c3c" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Blood Type</Text>
                <Text style={styles.infoValue}>O+</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.infoIcon}>
                <Ionicons name="call" size={20} color="#27ae60" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Phone</Text>
                <Text style={styles.infoValue}>+1 (555) 123-4567</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.infoIcon}>
                <Ionicons name="shield" size={20} color="#9b59b6" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Insurance</Text>
                <Text style={styles.infoValue}>BlueCross BlueShield</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Menu Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings & Support</Text>
          
          <View style={styles.menuCard}>
            <TouchableOpacity style={styles.menuItem} onPress={handleSettings}>
              <View style={styles.menuIcon}>
                <Ionicons name="settings" size={24} color="#2c5aa0" />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>Settings</Text>
                <Text style={styles.menuSubtitle}>Notifications, privacy, security</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#bdc3c7" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Ionicons name="help-circle" size={24} color="#27ae60" />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>Help & Support</Text>
                <Text style={styles.menuSubtitle}>FAQs, contact support</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#bdc3c7" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Ionicons name="document-text" size={24} color="#e67e22" />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>Privacy Policy</Text>
                <Text style={styles.menuSubtitle}>Terms and conditions</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#bdc3c7" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Ionicons name="information-circle" size={24} color="#3498db" />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>About</Text>
                <Text style={styles.menuSubtitle}>App version, updates</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#bdc3c7" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Emergency Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Emergency Contact</Text>
          
          <View style={styles.emergencyCard}>
            <View style={styles.emergencyHeader}>
              <View style={styles.emergencyIcon}>
                <Ionicons name="call" size={24} color="#ff4757" />
              </View>
              <View style={styles.emergencyInfo}>
                <Text style={styles.emergencyName}>Jane Doe</Text>
                <Text style={styles.emergencyRelation}>Spouse</Text>
                <Text style={styles.emergencyPhone}>+1 (555) 123-4567</Text>
              </View>
              <TouchableOpacity style={styles.callButton}>
                <Ionicons name="call" size={20} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Logout Button */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out" size={20} color="#ff4757" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileSection: {
    marginTop: 20,
    marginBottom: 30,
  },
  profileCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2c5aa0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 4,
  },
  patientId: {
    fontSize: 14,
    color: '#95a5a6',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c5aa0',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    fontWeight: '600',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  menuCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  emergencyCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  emergencyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emergencyIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffe6e6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  emergencyInfo: {
    flex: 1,
  },
  emergencyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 2,
  },
  emergencyRelation: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  emergencyPhone: {
    fontSize: 14,
    color: '#2c5aa0',
    fontWeight: '600',
  },
  callButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ff4757',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#ff4757',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff4757',
    marginLeft: 8,
  },
});
