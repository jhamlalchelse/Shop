import { createSlice } from '@reduxjs/toolkit'


export const productReducer = createSlice({
  name: 'shoppingCart',
  initialState:{},
  reducers: {
    shopproduct: (state,action) => {
      console.log('first abbbb',action.payload.data)
      return{
        ...state,
        shopProduct:action.payload.data
      }
    },
    increment: (state,action) => {
        return{
          ...state,
          shopProduct:state.shopProduct.map((curElem)=>{
              if(curElem.id === action.payload.product_id){
                  return {...curElem, minQuantity: curElem.minQuantity+1 }
              }            
              return curElem
          })
        }
      },
    decrement: (state,action) => {
      return{
        ...state,
        shopProduct:state.shopProduct.map((curElem)=>{
            if(curElem.id === action.payload.product_id){
                return {...curElem, minQuantity:curElem.minQuantity> 0 ? curElem.minQuantity-1 : 0}
            }            
            return curElem
        })
      }
    },
  },
})

export const { increment, decrement, shopproduct } = productReducer.actions

export default productReducer.reducer