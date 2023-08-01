import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Demolist from './Demolist';
export default function App() {
  return (
    <View style={styles.container}>
      
       <Demolist/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor:'pink',
    alignItems: 'center',
    justifyContent: 'center',
    top:50
  },
});
