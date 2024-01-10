import React from "react";
import { Image, StyleSheet, Dimensions, View } from "react-native";

import dados from "../../model/mock/cabecalhoMock"
import Texto from "./Texto";
import Titulo from "./Titulo"

const width = Dimensions.get('screen').width;

export default function Cabecalho() {
    return <>
        <Image source={ dados.background } style={ estilos.imgCabecalho } />
        <Titulo children={ dados.titulo } customDesign={ estilos.titulo }/>
        <View>
            <Texto children={ dados.descricao } customDesign={ estilos.texto } />
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
        color: "white"
    },
    texto: {
        textAlign: "justify",
        padding: 20,
        color: "black"
    }
})