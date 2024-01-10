import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, customDesign }) {

    return <Text style={[estilos.texto, customDesign]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "InterTextos",
        width: "100%",
        padding: 20,
        fontSize: 16
    }
})