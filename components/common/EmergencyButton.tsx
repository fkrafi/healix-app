
import { MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Linking, StyleSheet, TouchableOpacity, View, Animated } from 'react-native';
import 'react-native-get-random-values';

export default function EmergencyButton() {
    const [expanded, setExpanded] = React.useState(false);
    const anim1 = React.useRef(new Animated.Value(0)).current;
    const anim2 = React.useRef(new Animated.Value(0)).current;
    const anim3 = React.useRef(new Animated.Value(0)).current;

    const toggle = () => {
        setExpanded((prev) => {
            if (!prev) {
                Animated.stagger(60, [
                    Animated.spring(anim1, { toValue: 1, useNativeDriver: true }),
                    Animated.spring(anim2, { toValue: 1, useNativeDriver: true }),
                    Animated.spring(anim3, { toValue: 1, useNativeDriver: true }),
                ]).start();
            } else {
                Animated.stagger(40, [
                    Animated.spring(anim3, { toValue: 0, useNativeDriver: true }),
                    Animated.spring(anim2, { toValue: 0, useNativeDriver: true }),
                    Animated.spring(anim1, { toValue: 0, useNativeDriver: true }),
                ]).start();
            }
            return !prev;
        });
    };

    // Arc/fan layout: angles in radians for 3 bubbles (e.g. 120deg, 90deg, 60deg)
    const radius = 90;
    const arcAngles = [Math.PI * 5/6, Math.PI/2, Math.PI/6]; // 150°, 90°, 30°
    const anims = [anim1, anim2, anim3];
    const bubbles = [
        {
            key: 'helpline',
            color: '#e74c3c',
            icon: <MaterialIcons name="call" size={22} color="#fff" />, 
            onPress: () => Linking.openURL('tel:+971500000000'), // Helpline call
        },
        {
            key: 'chat',
            color: '#27ae60',
            icon: <Ionicons name="chatbubble-ellipses" size={22} color="#fff" />, 
            onPress: () => Linking.openURL('https://healix.example.com/support-chat'), // Replace with actual chat URL or navigation
        },
        {
            key: 'whatsapp',
            color: '#25D366',
            icon: <FontAwesome name="whatsapp" size={22} color="#fff" />, 
            onPress: () => Linking.openURL('https://wa.me/971500000000'), // WhatsApp link
        },
    ];

    return (
        <View style={styles.buttonContainer}>
            {bubbles.map((bubble, i) => {
                const angle = arcAngles[i];
                const anim = anims[i];
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * -radius; // negative because y+ is down
                return (
                    <Animated.View
                        key={bubble.key}
                        style={[styles.bubble, {
                            transform: [
                                { translateX: anim.interpolate({ inputRange: [0, 1], outputRange: [0, x] }) },
                                { translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [0, y] }) },
                                { scale: anim },
                            ],
                            opacity: anim,
                        }]}
                        pointerEvents={expanded ? 'auto' : 'none'}
                    >
                        <TouchableOpacity style={[styles.bubbleButton, { backgroundColor: bubble.color }]} onPress={bubble.onPress}>
                            {bubble.icon}
                        </TouchableOpacity>
                    </Animated.View>
                );
            })}
            {/* Main Floating Button */}
            <TouchableOpacity
                onPress={toggle}
                style={styles.floatingButton}
                activeOpacity={0.85}
            >
                <MaterialIcons name="contact-emergency" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignItems: "center",
    },
    floatingButton: {
        backgroundColor: '#2c5aa0',
        width: 65,
        height: 65,
        borderRadius: 32.5,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        shadowColor: '#2c5aa0',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    bubble: {
        position: 'absolute',
        bottom: 32,
        left: '50%',
        marginLeft: -32.5,
        zIndex: 10,
    },
    bubbleButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
});
