import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts,
Montserrat_400Regular,
Montserrat_400Regular_Italic,
Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

export default function App() {
const [fonteCarregada] = useFonts({
"MontserratRegular" : Montserrat_400Regular,
"MontserratBold" : Montserrat_700Bold,
"MontserratItalic" : Montserrat_400Regular_Italic
})

if (!fonteCarregada){
  return null;
}

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "MontserratItalic"
  },
});
