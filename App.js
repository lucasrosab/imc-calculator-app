
import React from 'react';
import { View } from 'react-native';
import Cabecalho from './src/view/componentes/Cabecalho';
import {
  useFonts,
  Inter_400Regular,
  Inter_200ExtraLight
} from "@expo-google-fonts/inter"
import Conteudo from './src/view/componentes/Conteudo';

export default function App() {

  const [fontsInitializers] = useFonts({
    "InterTextos": Inter_200ExtraLight,
    "InterTitulos": Inter_400Regular
  })

  if(!fontsInitializers) {
    return <View />
  }

  return (
    <View>
      <Cabecalho />
      <Conteudo />
    </View>
  );
}