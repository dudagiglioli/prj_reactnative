import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import topo from "../../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhes do Carrinho</Text>
      <View style={estilos.carrinho}>
        <Text style={estilos.nome}>Carrinho de Compras</Text>
        <Text>Fazenda ETEC Cidade do Livro</Text>
        <Text>Carrinho de Compras</Text>
        <Text>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para a sua cozinha
        </Text>
        <Text>R$ 40,00</Text>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    color: "white",
    textAlign: "center",
    fontSize: 24,
    lineHeight: 26,
    padding: 16,
    fontFamily: "MontserratBold"
  },
  carrinho:{
paddingVertical: 8,
paddingHorizontal: 16
  },
  nome:{
      fontSize: 26,
      lineHeight: 42,
      color: "#464646",
      fontFamily:"MontserratBold"
  }
});