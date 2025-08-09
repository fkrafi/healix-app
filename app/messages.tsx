import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MessagesScreen() {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity style={styles.composeButton}>
          <Ionicons name="create" size={24} color="#2c5aa0" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={16} color="#7f8c8d" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search conversations..."
            placeholderTextColor="#7f8c8d"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Conversations</Text>
          
          <TouchableOpacity style={styles.messageCard}>
            <View style={styles.messageHeader}>
              <View style={styles.doctorAvatar}>
                <Text style={styles.doctorInitials}>MC</Text>
              </View>
              <View style={styles.messageInfo}>
                <View style={styles.messageTop}>
                  <Text style={styles.doctorName}>Dr. Michael Chen</Text>
                  <Text style={styles.messageTime}>2 hours ago</Text>
                </View>
                <Text style={styles.lastMessage}>Your blood test results are ready for review. Please...</Text>
              </View>
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>2</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.messageCard}>
            <View style={styles.messageHeader}>
              <View style={styles.doctorAvatar}>
                <Text style={styles.doctorInitials}>SA</Text>
              </View>
              <View style={styles.messageInfo}>
                <View style={styles.messageTop}>
                  <Text style={styles.doctorName}>Dr. Sarah Adams</Text>
                  <Text style={styles.messageTime}>1 day ago</Text>
                </View>
                <Text style={styles.lastMessage}>Thank you for coming in today. Here are your...</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.messageCard}>
            <View style={styles.messageHeader}>
              <View style={[styles.doctorAvatar, styles.nurseAvatar]}>
                <Text style={styles.doctorInitials}>NH</Text>
              </View>
              <View style={styles.messageInfo}>
                <View style={styles.messageTop}>
                  <Text style={styles.doctorName}>Nurse Helen</Text>
                  <Text style={styles.messageTime}>2 days ago</Text>
                </View>
                <Text style={styles.lastMessage}>Appointment reminder: Tomorrow at 10:00 AM</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.messageCard}>
            <View style={styles.messageHeader}>
              <View style={styles.doctorAvatar}>
                <Text style={styles.doctorInitials}>RJ</Text>
              </View>
              <View style={styles.messageInfo}>
                <View style={styles.messageTop}>
                  <Text style={styles.doctorName}>Dr. Robert Johnson</Text>
                  <Text style={styles.messageTime}>5 days ago</Text>
                </View>
                <Text style={styles.lastMessage}>The X-ray shows improvement. Continue with...</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          
          <TouchableOpacity style={styles.quickActionCard}>
            <View style={styles.quickActionContent}>
              <View style={styles.quickActionIcon}>
                <Ionicons name="chatbubbles" size={24} color="#2c5aa0" />
              </View>
              <View style={styles.quickActionInfo}>
                <Text style={styles.quickActionTitle}>Start New Conversation</Text>
                <Text style={styles.quickActionSubtitle}>Message your healthcare team</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#bdc3c7" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickActionCard}>
            <View style={styles.quickActionContent}>
              <View style={styles.quickActionIcon}>
                <Ionicons name="help-circle" size={24} color="#27ae60" />
              </View>
              <View style={styles.quickActionInfo}>
                <Text style={styles.quickActionTitle}>Ask a Question</Text>
                <Text style={styles.quickActionSubtitle}>Get medical advice</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#bdc3c7" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickActionCard}>
            <View style={styles.quickActionContent}>
              <View style={styles.quickActionIcon}>
                <Ionicons name="document-text" size={24} color="#e74c3c" />
              </View>
              <View style={styles.quickActionInfo}>
                <Text style={styles.quickActionTitle}>Request Prescription</Text>
                <Text style={styles.quickActionSubtitle}>Renew or request new medication</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#bdc3c7" />
            </View>
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
  composeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#2c3e50',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginTop: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  messageCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  nurseAvatar: {
    backgroundColor: '#e8f5e8',
  },
  doctorInitials: {
    color: '#2c5aa0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageInfo: {
    flex: 1,
  },
  messageTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  messageTime: {
    fontSize: 12,
    color: '#95a5a6',
  },
  lastMessage: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
  },
  unreadBadge: {
    backgroundColor: '#ff4757',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  unreadText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  quickActionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  quickActionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  quickActionInfo: {
    flex: 1,
  },
  quickActionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  quickActionSubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});
