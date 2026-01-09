import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme as rnUseColorScheme } from 'react-native';


export default function TabLayout() {
  const colorScheme = rnUseColorScheme();
  const Colors = {
    light: { tint: '#1f6f8b' },
    dark: { tint: '#ffffff' },
  };


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          //tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
