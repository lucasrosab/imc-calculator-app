import React from "react";
import { Button, StyleSheet, TouchableOpacity } from "react-native";
import dados from "../../model/mock/conteudoMock"
import Texto from "./Texto";

export default function Conteudo() {
    return <>
        <TouchableOpacity style={ estilos.btn }>
            <Texto customDesign={ estilos.btnTitle }>{ dados.btnCalcular }</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    btn: {
        backgroundColor: "#DA8090",
        margin: "10%",
        borderRadius: "40%"

    },
    btnTitle: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    }
})