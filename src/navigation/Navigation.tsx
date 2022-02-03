import React from "react";

import { HomeScreen } from "../screens/HomeScreen";
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from "../interfaces/movieInterface";
import { createStackNavigator } from "@react-navigation/stack";

//Definimos los parametros que van a ir a traves de las rutas
export type RootStackParams = {
    HomeScreen: undefined;
    DetailScreen: Movie;
}


const Stack = createStackNavigator<RootStackParams>();
export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    //backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>

    );
}