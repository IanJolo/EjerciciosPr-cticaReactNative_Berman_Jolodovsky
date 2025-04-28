import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react'; 

export default function App() {
  const [contador, setContador] = useState(0); 
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Dale de comer 100 veces al mono para que se ponga feliz!</Text>
      <Text style={styles.num}>{contador}</Text>
      <Button title="Dale de comer" onPress={() => setContador(contador + 1)}></Button>
      <Image source={require("./assets/mono.jpg")}></Image>
      <StatusBar hidden style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  num:{
    fontSize:45,
    color:'red'
  },
  txt: {
    fontSize:35,
  }
});
