import React from "react";
import { Image, StyleSheet, Dimensions, View } from "react-native";

import backgroundImage from "../../../assets/background.jpg"
import Texto from "./Texto";
import Titulo from "./Titulo"

const width = Dimensions.get('screen').width;

export default function Cabecalho() {
    return <>
        <Image source={ backgroundImage } style={estilos.imgCabecalho} />
        <Titulo children={"Calculadora de IMC"} customDesign={estilos.titulo}/>
        <View>
            <Texto children={"Descubra como está a sua saúde através do calculo do IMC (Indice de Massa Corpórea)"} customDesign={estilos.texto} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    imgCabecalho: {
        width: width,
        height: 547 / 638 * width
    },
    titulo: {
        position: "absolute",
        textAlign: "center",
        marginTop: "15%",
        color: "black"
    },
    texto: {
        textAlign: "justify",
        padding: 20,
        color: "black"
    }
})