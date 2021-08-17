import React from 'react'
import {Text,View , StyleSheet, ScrollView, Pressable,Image} from 'react-native';

import { products} from '../constant';

 const Home = () => {
    return (
        <View style = {styles.homeComponent}>
            <ScrollView style={styles.scroll}>
                {
                    products.map((p) =>(
                <Pressable style = {styles.productContainer}>
                    <View style ={styles.leftContaier}> 
                    <Image source ={{ uri: p.img}} style ={styles.img} />
                    </View>
                    <View style = {styles.rightContainer} >
                        <Text> {p.name}</Text>
                        <Text>
                            Rs.{p.price}
                        </Text>
                    </View>
                </Pressable>
 
                    ))
                    }
            </ScrollView>
            
        </View>
    )
}

 const styles =  StyleSheet.create({
    homeComponent:{
        flex:1,
      //  backgroundColor:'blue',
    },
    scroll:{
        flex:1,
        //backgroundColor:'green'
    },
    productContainer:{
        borderColor: '#007bff',
    shadowColor: '#007bff',
    shadowOpacity: .5,
    shadowOffset: {width: 10, height: 5},
    shadowRadius: 10,
    borderWidth: 1,
    height: 200,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 15,

    },
    leftContaier:{
        flex:4,
      //  backgroundColor:'red',
    },
    rightContainer:{
        flex:6,
        //backgroundColor:'blue',
    },
    img:{
        height:'100%',
        width:'100%',
        borderRadius:10
    },
   

})
export default Home
