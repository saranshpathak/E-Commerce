export const initialState ={
    cart:[],
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