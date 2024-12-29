import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ProductCard from './ProductCard'
import { productCategories } from '../Assets/Data'; 

const Products = () => {
  return (
 <section style={{
    marginBottom:'100px'
 }}>
        <Container sx={{
            mt:'50px',
        }}>
    
            <Typography variant='h4' align='center' my={12}>
                Our Product Categories
            </Typography>
    
            <Grid container spacing={7} justifyContent='center'>
                {
                    productCategories.map((item)=>(
                        <Grid item key={item.category} sx={{
                            display:{sm:12 , md:4}
                        }}> 
                            <ProductCard product={item}/>
                        </Grid>
                    ))
                }
            </Grid>
    
          
        </Container>
 </section>
  )
}

export default Products
