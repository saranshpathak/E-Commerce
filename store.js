export const initialState ={
    cart:[
        {
            id: 'p1',
    name: 'Samsung Galaxy M42 5G ',
    img: 'https://m.media-amazon.com/images/I/71LweCKOpFL._AC_UY327_FMwebp_QL65_.jpg',
    price: 21999,
        }
    ],
    orders:[]
}

export const reducer =(state=initialState,action) =>{
    switch(action.type){
        case "Add_to_cart":{
            console.log("Inside Cart", action.payload)
            const {cart}=state;
            const updatedCart =[...cart, action.payload];
            return{ ...state,
                    cart:updatedCart
                }
            
            }
        
        case "Place Order" :{
            return
                {

                }
            
        }
        default :{
            console.log('In Reducer Default vlock');
            return state;
        }
    }
}