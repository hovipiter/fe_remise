import React from 'react'
import { Card } from '@mui/material'
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

function ProductItem({ productItem }) {
  return (
    <Card style={{width:"25%"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={productItem.thumbnailUrl}
            alt={productItem.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {productItem.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productItem.price} VND
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  )
}

export default ProductItem