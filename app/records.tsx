import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { categories } from '../common/constants';
import { LabTab, PrescriptionsTab, RadiologyTab, VitalsTab } from '../components/records';
import { FontAwesome6 } from '@expo/vector-icons';

export default function RecordsScreen() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].key);

    const renderTab = () => {
        switch (selectedCategory) {
            case 'lab':
                return <LabTab />;
            case 'radiology':
                return <RadiologyTab />;
            case 'prescriptions':
                return <PrescriptionsTab />;
            case 'vitals':
                return <VitalsTab />;
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Medical Records</Text>
            </View>
            
            {/* Categories as Tab View */}
            <View style={styles.tabBar}>
                {categories.map(cat => (
                    <TouchableOpacity
                        key={cat.key}
                        style={[styles.tabItem, selectedCategory === cat.key && styles.tabItemActive]}
                        onPress={() => setSelectedCategory(cat.key)}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <FontAwesome6 name={cat.icon as any} size={24} color={selectedCategory === cat.key ? cat.color : '#7f8c8d'} style={{ marginBottom: 4 }} />
                            <Text style={[styles.tabLabel, selectedCategory === cat.key && { color: cat.color }]}>{cat.label}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
            {renderTab()}

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
    searchButton: {
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
        marginTop: 10,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        paddingVertical: 6,
        paddingHorizontal: 6,
    },
    tabItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        borderRadius: 8,
        marginHorizontal: 4,
        backgroundColor: 'transparent',
    },
    tabItemActive: {
        backgroundColor: '#e3f2fd',
    },
    tabLabel: {
        marginLeft: 6,
        fontSize: 14,
        color: '#7f8c8d',
        fontWeight: 'bold',
    },
    recordCard: {
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
    recordHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    recordIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#e3f2fd',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    recordInfo: {
        flex: 1,
    },
    recordTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 4,
    },
    recordDate: {
        fontSize: 14,
        color: '#7f8c8d',
        marginBottom: 2,
    },
    recordDoctor: {
        fontSize: 13,
        color: '#95a5a6',
    },
    statusBadge: {
        backgroundColor: '#27ae60',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        color: '#ffffff',
        fontSize: 10,
        fontWeight: '600',
    },
    viewedBadge: {
        backgroundColor: '#95a5a6',
    },
    viewedText: {
        color: '#ffffff',
        fontSize: 10,
        fontWeight: '600',
    },
    categoriesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    categoryCard: {
        width: '48%',
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        marginBottom: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    categoryIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    categoryTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 4,
        textAlign: 'center',
    },
    categoryCount: {
        fontSize: 12,
        color: '#7f8c8d',
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
