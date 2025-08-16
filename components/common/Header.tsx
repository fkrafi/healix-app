import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface HeaderProps {
  title: string;
  backRoute?: {
    pathname: string;
    params?: Record<string, any>;
  }
}

const Header: React.FC<HeaderProps> = ({ title, backRoute }) => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeHeader}>
      <View style={styles.stickyHeader}>
        <TouchableOpacity style={styles.headerBackButton} onPress={() => router.push(backRoute || 'home')}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeHeader: {
    backgroundColor: '#2c5aa0',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  stickyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c5aa0',
    height: 56,
    zIndex: 10,
  },
  headerBackButton: {
    position: 'absolute',
    left: 8,
    top: 0,
    bottom: 0,
    height: 56,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 11,
    padding: 4,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
  },
})

export default Header;