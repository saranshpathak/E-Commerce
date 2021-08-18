import React from 'react'
import {Text,View , StyleSheet, ScrollView, Pressable,Image} from 'react-native';

import { products} from '../constant';
import { AppContext } from '../App';

 const Home = ({navigation}) => {
    return (
        <View style = {styles.homeComponent}>
            <ScrollView style={styles.scroll}>
                {
                    products.map((p) =>(
                <Pressable style = {styles.productContainer}
                onPress ={()=>{navigation.navigate('ProductInfo', p)}}
                android_ripple={{color:'gray',borderless:true}}
                >
                    <View style ={styles.leftContaier}> 
                    <Image source ={{ uri: p.img}} style ={styles.img} />
                    </View>
                    <View style = {styles.rightContainer} >
                        <Text  style ={styles.nameText}> {p.name}</Text>
                        <Text style ={styles.priceText}>
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
    paddingLeft:10,
    

    },
    leftContaier:{
        flex:4,
      //  backgroundColor:'red',
    },
    rightContainer:{
        flex:6,
        //backgroundColor:'blue',
        marginLeft:20,
    },
    img:{
        height:'100%',
        width:'100%',
        borderRadius:20,
    },
    nameText:{
        fontSize:20,
        color:'black',
        marginBottom:5,
        padding:2,
        marginTop:10
    },
    priceText:{
        font:15,
        color:'blue',
        fontWeight:'bold',
        padding:2,
        marginTop:5,
    }
})
export default Home
