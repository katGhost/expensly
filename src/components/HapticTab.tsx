import { TouchableOpacity , View, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';


export default function HapticTab({ children, onPress }: any) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress?.();
      }}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
