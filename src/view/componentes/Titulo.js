import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Titulo({ children, customDesign }) {

    return <Text style={ [estilos.texto, customDesign] }>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "InterTitulos",
        width: "100%",
        fontSize: 20,
        lineHeight: 26
    }
})