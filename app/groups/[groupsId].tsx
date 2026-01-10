import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function GroupDetailScreen() {
    const {groupId} = useLocalSearchParams<{ groupId: string }>();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Groups Details</Text>
                </View>
                <View style={styles.card}>
                    <Text>Group ID: {groupId}</Text>
                </View>
                
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {},
    titleContainer: {},
    title: {},
    card: {},
});