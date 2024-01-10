import React from "react";
import { Keyboard, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import dados from "../../model/mock/conteudoMock"
import Texto from "./Texto";

export default function Conteudo() {

    const [number, onChangeNumber] = React.useState('');

    return <>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                <Texto children={ dados.titlePeso } customDesign={ estilos.title}/> 

                <TextInput
                    style={ estilos.inputText }
                    placeholder={ dados.campoPeso }
                    maxLength={ 3 }
                    keyboardType="number-pad"
                />
            </View>
        </TouchableWithoutFeedback> 
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                <Texto children={ dados.titleAltura } customDesign={ estilos.title}/>

                <TextInput
                    style={ estilos.inputText }
                    placeholder={ dados.campoAltura }
                    maxLength={ 3 }
                    keyboardType="number-pad"
                />
            </View>
        </TouchableWithoutFeedback> 

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
        fontWeight: "bold",
        padding: 20
    },
    inputText: {
        height: 40,
        margin: "5%",
        borderWidth: 1,
        borderRadius: 20,
        padding: 10
    },
})