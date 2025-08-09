import React from 'react';
import { Text } from 'react-native';

export default function RadiologyTab() {
    return <Text style={{ padding: 16, fontSize: 16, color: '#2c3e50' }}>
        Radiology Records
    </Text>;
    // return (
    //     <View style={{ padding: 16 }}>
    //         {radiologyRecords.map((record, idx) => (
    //             <View key={record.title + idx} style={{ backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 12, elevation: 2 }}>
    //                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //                     <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: record.color + '22', alignItems: 'center', justifyContent: 'center', marginRight: 15 }}>
    //                         <Ionicons name={record.icon as any} size={24} color={record.color} />
    //                     </View>
    //                     <View style={{ flex: 1 }}>
    //                         <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#2c3e50', marginBottom: 4 }}>{record.title}</Text>
    //                         <Text style={{ fontSize: 14, color: '#7f8c8d', marginBottom: 2 }}>{record.date}</Text>
    //                         <Text style={{ fontSize: 13, color: '#95a5a6' }}>{record.doctor}</Text>
    //                     </View>
    //                 </View>
    //             </View>
    //         ))}
    //     </View>
    // );
}
