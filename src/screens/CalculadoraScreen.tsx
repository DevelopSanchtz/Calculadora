import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculadoraScreen = () => {
   
    const {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDel,
        Dividir,
        Multiplicar,
        Sumar,
        Restar,
        armarNumero,
        calcular
    } = useCalculadora();

    return (
         <>

        <View style = {styles.calculadoraContainer}>

            <Text style={styles.resultadoTexto}>{ (numeroAnterior === '0') ? null : numeroAnterior }</Text>
            <Text style={styles.resultado} numberOfLines = {1} adjustsFontSizeToFit>{numero}</Text>

            <View style = {styles.fila}>

            <BotonCalc texto = "C" color = "#9b9b9b" accion = { limpiar }/>
            <BotonCalc texto = "+/-" color = "#9b9b9b" accion = { positivoNegativo }/>
            <BotonCalc texto = "del" color = "#9b9b9b" accion = { btnDel }/>
            <BotonCalc texto = "/" color = "#FF9427" accion = { Dividir }/>
    
            </View>

            <View style = {styles.fila}>

                <BotonCalc texto = "7" accion = { armarNumero } />
                <BotonCalc texto = "8" accion = { armarNumero }/>
                <BotonCalc texto = "9" accion = { armarNumero }/>
                <BotonCalc texto = "*" color = "#FF9427" accion = { Multiplicar }/>
            
            </View>
            
            <View style = {styles.fila}>

                <BotonCalc texto = "4" accion = { armarNumero }/>
                <BotonCalc texto = "5" accion = { armarNumero }/>
                <BotonCalc texto = "6" accion = { armarNumero }/>
                <BotonCalc texto = "-" color = "#FF9427" accion = { Restar }/>
            
            </View>

            <View style = {styles.fila}>

                <BotonCalc texto = "1" accion = { armarNumero }/>
                <BotonCalc texto = "2" accion = { armarNumero }/>
                <BotonCalc texto = "3" accion = { armarNumero }/>
                <BotonCalc texto = "+" color = "#FF9427" accion = { Sumar }/>
            
            </View>

            <View style = {styles.fila}>

                <BotonCalc texto = "0" ancho accion = { armarNumero }/>
                <BotonCalc texto = "." accion = { armarNumero }/>
                <BotonCalc texto = "=" color = "#FF9427" accion = { calcular }/>
            
            </View>


        </View>

        </>
    )
}
