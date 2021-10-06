console.disableYellowBox = false;
import React from 'react';
import { AppRegistry } from "react-native";
import App from './App';
import {name as appName} from './app.json';
import { DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import ProductProvider from './src/ui/providers/ProductProvider';
import CartProvider from './src/ui/providers/CartProvider';



export default function Main(){
    return(
        <PaperProvider>
            <ProductProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </ProductProvider>
        </PaperProvider>
        
    
    )
}

AppRegistry.registerComponent(appName,()=>Main);