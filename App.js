import { StatusBar } from 'expo-status-bar';
import React ,{useReducer} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';


import Home from './components/Home'
import  Orders  from './components/Orders';
import  ProductInfo  from './components/ProductInfo';
import Cart from './components/Cart';


import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

export const AppContext = React.createContext();
import { initialState,reducer} from './store';


const Drawer = createDrawerNavigator();




export default function App() {
   const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{state,dispatch}}>
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
       <Drawer.Navigator initialRouteName = "Cart" screenOptions={{headerShown: true}}>
         <Drawer.Screen name ="Home" component={Home} />
         <Drawer.Screen name ="ProductInfo" component={ProductInfo} />
         <Drawer.Screen name ="Cart" component={Cart} />
         <Drawer.Screen name ="Orders" component={Orders} />
       </Drawer.Navigator>
      </NavigationContainer>

     
    </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
});
