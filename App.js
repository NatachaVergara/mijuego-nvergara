import { StyleSheet, View } from 'react-native';
import Header from './src/Components/Header';
import StartGameScreen from './src/pages/StartGameScreen';


export default function App() {
  return (
    <View style={styles.container}>
     <Header title={'Adivina el número'} />
      <StartGameScreen/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1   
  }
});
