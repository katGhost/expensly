import React from 'react';
import { Tabs } from 'expo-router';
import { useColorScheme as rnUseColorScheme } from 'react-native';
import { FontAwesome5,MaterialIcons } from '@expo/vector-icons';
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
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <MaterialIcons name="space-dashboard" size={18} color={color} />,
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          title: 'Expenses',
          tabBarIcon: ({ color }) => <FontAwesome5 name="file-invoice-dollar" size={18} color={color} />,
        }}
      />
    </Tabs>
  );
}
