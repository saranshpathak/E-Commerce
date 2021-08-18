import React, {useContext} from 'react'
import { View } from 'react-native'

import { AppContext } from '../App';

const Orders = ({route}) => {
    const order = useContext(AppContext);
    return (
        <View style ={{flex:1, backgroundColor:'red'}}>
            <Text>console.log(order.state.cart)</Text>
        </View>
        
        
    )
}
export default Orders;
