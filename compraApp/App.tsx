import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts,
Montserrat_400Regular,
Montserrat_400Regular_Italic,
Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import Carrinho from './carrinhoApp/pages/Exemplo';

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
<SafeAreaView>
  <StatusBar/>
    <Carrinho/>
</SafeAreaView>
  );
}