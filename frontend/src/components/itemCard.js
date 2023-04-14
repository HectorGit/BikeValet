
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ItemCard(props) {

  const item = props.item 

  function handleClickItem(){
    alert("added to cart : "+item.name)
  }

  return (

    <Card variant="outlined" sx={{ maxWidth: 300, marginY:"15px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.image}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }}>
          {item.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }}>
          ${item.cost}
        </Typography>
      </CardContent>
      <CardActions>
        <Button type='submit' size="small" onClick={handleClickItem}>Add to Cart !</Button>
      </CardActions>
    </Card>


  );
  
}
