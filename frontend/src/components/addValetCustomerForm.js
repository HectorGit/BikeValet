import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/system';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DateField } from '@mui/x-date-pickers/DateField';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

//state management : 
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers, fetchAddCustomer } from '../redux/customerReducer'
import { useEffect } from 'react';

import{
  FormLabel,
  TextField,
  Grid
} from "@mui/material"

import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddValetCustomer() {

  const dispatch = useDispatch()
  dayjs.extend(customParseFormat)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [tagNumber, setTagNumber] = useState("")
  const formComplete = (customerName && customerPhone && tagNumber)

  function handleAddNewCustomer(){
    
    let request_body = {
      "customerName" : customerName,
      "customerPhone" : customerPhone,
      "tagNumber" : tagNumber
    }

    dispatch(fetchAddCustomer(request_body)) //to write the new customer
      // .then(()=>{
      //   console.log("dispatching after") 
      //   dispatch(fetchCustomers())
      // })
      .then(handleClose())

    console.log("details for new customer :", request_body)

    return

  }

  return (
    <div>
      <Button fullWidth sx={{color:'black', width:"90%", bgcolor:"lightblue"}} onClick={handleOpen}>
        Please Enter your Tag Number and Details <AddCircleIcon fontSize='large'/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Grid 
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >

            <Grid item xs={12}>
              <Typography variant="h3">
                My Contact Information
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <FormLabel>Name</FormLabel>
              <TextField 
                fullWidth
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                variant="outlined" 
                inputProps={{maxLength:50}}
              />
            </Grid>

            <Grid item xs={12}>
              <FormLabel>Phone</FormLabel>
              <TextField 
                fullWidth
                value={customerPhone}
                onChange={(event) => setCustomerPhone(event.target.value)}
                variant="outlined" 
                inputProps={{maxLength:50}}
              />
            </Grid>

            <Grid item xs={12}>
              <FormLabel>Tag Number</FormLabel>
              <TextField 
                fullWidth
                value={tagNumber}
                onChange={(event) => setTagNumber(event.target.value)}
                variant="outlined" 
                inputProps={{maxLength:50}}
              />
            </Grid>

            
            {/* DISABLE UNTIL FORM COMPLETE */}
            <Grid item xs={12} justifyContent="center" display="flex">

              {formComplete ? 
              <Button type="submit" variant="contained" sx={{marginTop:"50px"}} onClick={handleAddNewCustomer}>Add New Valet Customer</Button>
              :
              <Button disabled type="submit" variant="contained" sx={{marginTop:"50px"}} onClick={handleAddNewCustomer}>Add New Valet Customer</Button>
              }
            </Grid>   
          </Grid>

        </Box>
      </Modal>
    </div>
  );
}

