import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaView, SafeAreaProvider,
  SafeAreaInsetsContext, useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
            <Text>Expenses</Text>
            <Pressable onPress={()=>console.log('Hey!')}>
                <Text>Add</Text>
            </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingHorizontal: 25,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
