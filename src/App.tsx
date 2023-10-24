import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderBar } from './components/HeaderBar';
import { MainScreen } from './screens/MainScreen/MainScreen';

export default function App() {
  return (
    <View>
      <MainScreen/>
    </View>
  );
}

