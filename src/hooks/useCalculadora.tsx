import { useRef, useState } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {

    const [numero, setNumero] = useState('0')
    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const ultimaOperacion = useRef<Operadores>()


    const limpiar = () => {
        setNumero ('0')
        setNumeroAnterior ('0')
    }

    const armarNumero = ( numeroTexto: string) => {

        if( numero.includes('.') && numeroTexto === '.' ) return;

        if( numero.startsWith('0') || numero.startsWith('-0')) {
            if( numeroTexto === '.' ){
                setNumero( numero + numeroTexto);
            } else if( numeroTexto === '0' && numero.includes('.') ) setNumero( numero + numeroTexto );
              else if ( numeroTexto !== '0' && !numero.includes('.') ) setNumero ( numeroTexto )
              else if ( numeroTexto === '0' && !numero.includes('.') ) setNumero ( numero )

              else setNumero ( numero + numeroTexto )
        }
        else setNumero (numero + numeroTexto)
    }

    const btnDel = () => {
        let negativo = '';
        let numeroTem = numero;

        if( numero.includes ('-')) {
            negativo = '-';
        }

        if (numeroTem.length > 1) setNumero ( negativo + numeroTem.slice(0,-1) );
        else setNumero ('0')

    }

    const positivoNegativo = () => {
        
        if ( numero.includes ('-')) setNumero (numero.replace('-', ''));
        
        else setNumero ('-' + numero)

    }

    const cambiarNumPorAnterior = () => {
        
        if(numero.endsWith('.')) setNumeroAnterior ( numero.slice(0, -1))
        else setNumeroAnterior( numero )

        setNumero ('0')

    }    

    const Dividir = () => {
        cambiarNumPorAnterior ()
        ultimaOperacion.current = Operadores.dividir
    }

    const Multiplicar = () => {
        cambiarNumPorAnterior ()
        ultimaOperacion.current = Operadores.multiplicar
    }

    const Sumar = () => {
        cambiarNumPorAnterior ()
        ultimaOperacion.current = Operadores.sumar
    }

    const Restar = () => {
        cambiarNumPorAnterior ()
        ultimaOperacion.current = Operadores.restar
    }

    const calcular = () => {
        const numero1 = Number (numero)
        const numero2 = Number (numeroAnterior)

        if(numero !== '0') {

            switch ( ultimaOperacion.current ) {

                case Operadores.sumar:
                    setNumero ( `${numero1 + numero2}` )
                break    
    
                case Operadores.restar:
                    setNumero ( `${numero2 - numero1}` )
                break
    
                case Operadores.dividir:
                    setNumero ( `${numero2 / numero1}` )
                break
    
                case Operadores.multiplicar:
                    setNumero ( `${numero1 * numero2}` )
                break
    
            }

        }

        setNumeroAnterior ('0')
    }


     return {
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
     }
}