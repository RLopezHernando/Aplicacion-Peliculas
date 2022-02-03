import React, { useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: Props) => {
    //Trabajamos con el contexto de la aplicacion que es donde tenemos definidos los cambios
    // de colores para realizar el gradiente

    //Acccedemos a estos colores a traves de un contexto global en vez de pasarlos a traves de las props
    // para ello ver 'GradientContext.tsx' y la aplicacion de este contexto en 'App.tsx' por medio del 
    // "AppState"

    const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);
    // const { opacity, fadeIn, fadeOut } = useFade();

    //Este UseEffect se tiene que disparar cada vez que los colores principales cambien
    // useEffect(() => {
    //     fadeIn( () => {
    //         setPrevMainColors( colors );
    //         fadeOut(0);
    //     })

    // }, [ colors ])




    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={[prevColors.primary, prevColors.secondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.5 }}
            />

            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    

                }}
            >
                <LinearGradient
                    colors={[colors.primary, colors.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.5 }}
                />

            </Animated.View>

            {children}
        </View>);


};
