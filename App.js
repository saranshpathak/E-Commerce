import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Home from './components/Home'
import  Orders  from './components/Orders';
import  ProductInfo  from './components/ProductInfo';
import Cart from './components/Cart';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="#007bff"/>
      <Text> Hello World</Text>
      <NavigationContainer>
       <Drawer.Navigator initialRouteName = "Home" screenOptions={{headerShown: true}}>
         <Drawer.Screen name ="Home" component={Home} />
         <Drawer.Screen name ="ProductInfo" component={ProductInfo} />
         <Drawer.Screen name ="Cart" component={Cart} />
         <Drawer.Screen name ="Orders" component={Orders} />
       </Drawer.Navigator>
      </NavigationContainer>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red',
  },
});
