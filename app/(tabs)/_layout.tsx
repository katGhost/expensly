import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme as rnUseColorScheme } from 'react-native';
import HapticTab from '../../src/components/HapticTab';


export default function TabLayout() {
  const colorScheme = rnUseColorScheme();
  const Colors = {
    light: {tint: 'dodgerblue'},
    dark: {tint: 'skyblue'}
  }
  

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <FontAwesome5 name="file-invoice-dollar" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
