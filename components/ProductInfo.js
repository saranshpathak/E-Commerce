import React,{useContext}from 'react'
import {Text, View ,StyleSheet,Pressable,Image,ScrollView} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from '../App';


 
 const ProductInfo = ({navigation,route}) => {
   const store = useContext(AppContext);

   const isAddedToCart = store?.state?.cart.filter((item)=>item.id===route?.params?.id)?.length>0 
  
    return (
        <View style ={styles.productInfoComponent}>
            <ScrollView style ={{flex:1,padding:15}}>
            <View style = {styles.product}
                android_ripple={{color:'gray',borderless:true}}
                >
                     <Text  style ={styles.nameText}> {route?.params?.name} </Text>
                    <View style = {styles.leftContaier}> 
                    <Image source ={{ uri :route?.params?.img}} style ={styles.img} />
                    </View>
                    
                        <Text style ={styles.priceText}>
                            Rs.{route?.params?.price}
                        </Text>
                   
                </View>

                <Pressable onPress={()=>{
                    store.dispatch({
                      type:"Add_to_cart",
                      payload:route.params
                    })
                }}
                > 
                <Text style ={isAddedToCart?[styles.addCartText,{backgroundColor:'green'}]:styles.addCartText}> 
                   { isAddedToCart?"Added":"Add to Cart"}
                    <Icon name={isAddedToCart? 'check':'shopping-cart' } color='white' size={30}/>
                </Text> 
                 </Pressable>
                 <View style={styles.aboutContainer}>
            <Text style={styles.infoheader}>About the product</Text>
          <Text style={styles.infoText}>
            64MP+8MP+2MP triple rear camera with 1080p video at 30/60 fps, 4k 30
            fps | 16MP front camera with 1080p video at 30/60 fps.
          </Text>
          <Text style={styles.infoText}>
            6.43-inch, 90Hz fluid AMOLED display with 2400 x 1080 pixels
            resolution | 410ppi Memory, Storage & SIM: 12GB RAM | 256GB internal
            memory on UFS 2.1 storage system.
          </Text>
          <Text style={styles.infoText}>
            Dual SIM (nano + nano) | OnePlus Nord CE currently supports dual 4G
            SIM Cards or a single 5G SIM + 4G SIM. Chipset: Qualcomm Snapdragon
            750G 5G mobile platform with an octa-core processor, Kryo 570 CPU
            (20% from predecessor), and an Adreno 619 GPU (10% improved graphics
            performance from predecessor).
          </Text>
          <Text style={styles.infoText}>
            Alexa Hands-Free capable: Download the Alexa app to use Alexa
            hands-free. Play music, make calls, hear news, openapps, navigate,
            and more, all using just your voice, while on-the-go.
          </Text>
          </View>
        </ScrollView>
 
            
        </View>
    )
}
const styles = StyleSheet.create({
    productInfoComponent:{
        flex:1,
      //  backgroundColor:'red'
    },
    product:{
        borderColor: '#007bff',
    shadowColor: '#007bff',
    shadowOpacity: .5,
    shadowOffset: {width: 10, height: 5},
    shadowRadius: 10,
    borderWidth: 1,
    height: 300,
    borderRadius: 10,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginTop:10
    

    },
    leftContaier:{
       flex:9,
    },
    img:{
        height:'100%',
        width:120,
        borderRadius:20,
    },
    nameText:{
        fontSize:20,
        color:'black',
        marginBottom:5,
        padding:2,
        marginTop:5
    },
    priceText:{
        font:15,
        color:'blue',
        fontWeight:'bold',
        padding:2,
        marginTop:5,
        // backgroundColor:'red'
    },
    infoheader: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      infoText: {
        marginTop: 10,
      },
      aboutContainer: {
        borderColor: 'lightgray',
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
      },
      addCartText:{
          justifyContent:'center',
          textAlign:'center',
          textAlignVertical:'center',
          color:'white',
          backgroundColor:'blue',
          fontSize:25,
          fontWeight:'bold',
          padding:10,
          marginTop:10,
          borderRadius:10
      }
})
export default ProductInfo;