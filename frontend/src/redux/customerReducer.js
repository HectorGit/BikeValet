//This is a reducer for the Costumer type.
//It will allow to asynchronously fetch data from the backend 

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* GET */

export const fetchCustomers = createAsyncThunk(
  "customer/fetchCustomers",
    async() => {

        let payload = []

        await fetch("http://localhost:5001/customers", {mode:"cors"})
        .then((response) => response.json() )
        .then((data) => {
            payload = data
          })
        
        return payload
    }
);

/* POST */

export const fetchAddCustomer = createAsyncThunk(
  "customer/fetchAddCustomer",
    async(request_body) => {

        let payload = []

        await fetch(`http://localhost:5001/add_customer`, {
          mode:"cors", 
          method:"POST", 
          body: JSON.stringify(request_body),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }    
        })
        .then((response) => response.json() )
        .then((data) => {
          payload = data
        })
        
        return `completed fetchAddCustomer`
    }
);

const customerDataSlice = createSlice({
  name: 'customer',
  initialState: {customers:[]},
  reducers: {
    //this is not actually used in this module, but it helps to see the structure of the data :)
    customerDataFetched(state, action) {
      state.push({        
        customerName: action.payload.customerName,
        customerPhone: action.payload.customerPhone,
        tagNumber: action.payload.tagNumber
      })
    },
  },
    extraReducers(builder) {
      builder
        .addCase(fetchCustomers.pending, (state, action) => {
          //
        })
        .addCase(fetchCustomers.fulfilled, (state, action) => {
          console.log("fetchCustomers complete:", action.payload)
          state.customers = action.payload;
        })
        .addCase(fetchCustomers.rejected, (state, action) => {
          console.log("error in extra reducers (fetchCustomers)");
        })
        .addCase(fetchAddCustomer.pending, (state, action) => {
          //
        })
        .addCase(fetchAddCustomer.fulfilled, (state, action) => {
          console.log("fetchAddCustomer complete:", action.payload)
          state.customers = action.payload;
        })
        .addCase(fetchAddCustomer.rejected, (state, action) => {
          console.log("error in extra reducers (fetchAddCustomer)");
        });
    },
  
});

export const { customerDataFetched } = customerDataSlice.actions;
export default customerDataSlice.reducer;