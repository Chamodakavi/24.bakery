import { Container, Grid, Grid2, Typography } from '@mui/material'
import React, { useState } from 'react'
import ItemCard from './ItemCard'
import {productData} from '../Assets/Data'

const Expand = ({product}) => {

  const [itemCatched,setItemCatched] = useState(product);
  

  return (
    <section style={{
        marginTop:'50px',
        marginBottom:'100px'
    }}>
        <Container>
          <Typography variant='h4' align='center' my={10}>
            Our {product} Items 
          </Typography>

          <Grid container spacing={5} justifyContent='center'>
                {
                    productData.filter((item)=>item.category===itemCatched).map((item)=>(
                        <Grid key={item.name} item sx={{
                            display:{sm:12 , md:4}
                        }}> 
                            <ItemCard product={item}/>
                        </Grid>
                    ))
                }
            </Grid>
        
        </Container>
    </section>
  )
}

export default Expand
