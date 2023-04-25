
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';
import SmsIcon from '@mui/icons-material/Sms';

export default function ActiveCustomerTagComponent(props) {

  const customer = props.customer 

  function handleCheckout(){
    console.log('deleted/checked out')
  }

  function handleSendAboutToCloseMessage(){
    console.log('send message for tag number : ' + customer.tagNumber)
  }

  return (

    <Stack direction="row" spacing={3}>

      <Typography>
        {customer.tagNumber}
      </Typography>
      <Chip icon={<SmsIcon />} variant="outlined" label={'Message'} onClick={handleSendAboutToCloseMessage} />
      <Chip icon={<DoneIcon />} variant="outlined" label={'Check Out'} onClick={handleCheckout} />

    </Stack>

  );
  
}


