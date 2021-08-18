import React, {useContext} from 'react'
import { View,StyleSheet,ScrollView,Text,Pressable,Image} from 'react-native';
import { wrap } from 'yargs';
import { AppContext } from '../App';

const Cart = () => {
    const store = useContext(AppContext);
    const myCart = store.state.cart;
    console.log(myCart)

    return (
        <View style={styles.cartComponent}>
            <ScrollView style ={{flex:1,padding:10}}>
            {
                    myCart.map((p) =>(
                <View style = {styles.productContainer}
                
                android_ripple={{color:'gray',borderless:true}}
                >
                    <View style ={styles.leftContaier}> 
                    <Image source ={{ uri: p.img}} style={{width: '40%', height: '100%', borderRadius: 10}} />
                    </View>
                    <View style = {styles.rightContainer} >
                        <Text  style ={styles.nameText}> {p.name}</Text>
                        <Text style ={styles.priceText}>
                            Rs.{p.price}
                        </Text>
                    </View>
                </View>
 
                    ))
                    }
            </ScrollView>

        </View>)
}
const styles = StyleSheet.create({
    cartComponent:{
        flex:1,
        padding:10,
        flexDirection:'row',
        flexWrap:wrap
    },
    productContainer:{
        borderColor: '#007bff',
    shadowColor: '#007bff',
    shadowOpacity: .5,
    shadowOffset: {width: 10, height: 5},
    shadowRadius: 10,
    borderWidth: 1,
    height: 100,
    width:'48%',
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 15,
    paddingLeft:10,
    justifyContent:'space-between',
    

    },
    leftContaier:{
        flex:3,
      
      alignItems:'center'
    },
    rightContainer:{
        flex:7,
        //backgroundColor:'blue',
        marginLeft:20,
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
export default Cart;
