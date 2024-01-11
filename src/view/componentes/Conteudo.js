import React, { useEffect } from "react";
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import dados from "../../model/mock/conteudoMock"
import Texto from "./Texto";
import { useForm } from "react-hook-form"

export default function Conteudo() {

    const { register, setValue, handleSubmit } = useForm();

    const onSubmit = (data) => {
        var alturaMetros = data.altura / 100
        var imc = parseInt(data.peso / (alturaMetros * alturaMetros))
        var response = "";

        if (imc < 17) {
            response = "muito abaixo do peso";
        } else if (imc >= 17 && imc < 19) {
            response = "abaixo do peso";
        } else if (imc >= 19 && imc < 25) {
            response = "peso normal";
        } else if (imc >= 25 && imc < 30) {
            response = "acima do peso";
        } else if (imc >= 30 && imc < 35) {
            response = "obesidade grau I";
        } else if (imc >= 35 && imc < 40) {
            response = "obesidade grau II";
        } else if (imc >= 40) {
            response = "obesidade grau III";
        }


        Alert.alert("Resultado", `Seu IMC deu ${ imc }, este resultado é considerado ${ response }`)
    }    

    useEffect(() => {
        register('peso')
        register('altura')
      }, [register])
    
    return <>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                <Texto children={ dados.titlePeso } customDesign={ estilos.title}/> 

                <TextInput
                    style={ estilos.inputText }
                    placeholder={ dados.campoPeso }
                    maxLength={ 3 }
                    keyboardType="number-pad"
                    onChangeText={e => setValue("peso", e)}
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
                    onChangeText={e => setValue("altura", e)}
                />
            </View>
        </TouchableWithoutFeedback> 

        <TouchableOpacity style={ estilos.btn } onPress={handleSubmit(onSubmit)}>
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