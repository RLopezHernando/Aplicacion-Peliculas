import React, { createContext, useState } from "react"
//Para hacer un Context necesitamos
// 1. Contexto Inicial
// 2. Provider
// 3. Context

interface ImageColors {
    primary:string;
    secondary:string
}

interface ContextProps{
    colors:ImageColors,
    prevColors:ImageColors,
    setPrevMainColors: (colors: ImageColors) => void,
    setMainColors: (colors: ImageColors) => void
}



// El tipo que ponemos en el Context es lo que queremos exponer hacia fuera
export const GradientContext = createContext({} as ContextProps) // Definir tipo

export const GradientProvider = ({ children }: any) => {

    //Los colores de este useState son los principales de el poster actual
    const [colors, setColors] = useState<ImageColors>({
        primary:'transparent',
        secondary:'transparent'
    });

    //Colores una vez el cambio
    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary:'transparent',
        secondary:'transparent'
    });

    const setMainColors =( colors:ImageColors) =>{
        setColors(colors);
    }

    const setPrevMainColors = ( colors:ImageColors) =>{
        setColors(colors);
    }


    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors
        }}>
            {children}
        </GradientContext.Provider>
    )
}