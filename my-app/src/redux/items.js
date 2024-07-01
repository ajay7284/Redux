import {createSlice} from "@reduxjs/toolkit"

const initialState= {
    item:[]
}

const itemSlice = createSlice(
    {
        name:"item",
        initialState,
        reducers:{
            additem(state,action){
                const newItemId = action.payload.id;
                const existingItem = state.item.find(product => product.id === newItemId)
 
          if(existingItem){
            existingItem.quantity++;
          } else{
            state.item.push(action.payload)

          }

            },
            removeitem(state,action){
              
            // const index =  state.item.findIndex(product => product.id === action.payload)
            //  if(index !==-1){
            //     state.item.splice(index,1)
            //  }

            state.item = state.item.filter(product => product.id !== action.payload )



            },
            removeAllitem(state,action){
                state.item = [];
            }
        }
    }
);

export const {additem,removeAllitem,removeitem}= itemSlice.actions;

export default itemSlice.reducer;