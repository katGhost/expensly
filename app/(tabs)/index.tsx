import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useGroups } from '../../src/controllers/useGroups';

function GroupList({ groups }: { groups: any[] }) {
  return (
    <>
      {groups.map(g => (
        <Text key={g.id}>{g.name}</Text>
      ))}
    </>
  );
}


export default function HomeScreen() {
  const { groups, addGroup } = useGroups();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Groups</Text>
        </View>
        {/* Dummy group add */}
        <View style={styles.groupView}>
          <Pressable style={styles.addBtn} onPress={() => {
            addGroup({
              id: Date.now().toString(),
              name: 'Test group',
              members: [],
              expenses: [],
            });
          }}>
            <Text>Add Group</Text>
          </Pressable>

          <GroupList groups={groups} />

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
    gap: 8,
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  groupView: {},
  addBtn: {
    width: '50%',
    backgroundColor: 'skyblue',
    padding: 10,
    cursor: 'pointer',
    alignItems: 'center',
  },

});
