import { StyleSheet, View, Text } from 'react-native';
import pkceChallenge from 'react-native-pkce-challenge';

const result = pkceChallenge();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: {JSON.stringify(result)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
