import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const ItemCard = ({product}) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://blog.openreplay.com/images/why-should-you-use-material-ui/images/hero.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          {product.price}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ItemCard
