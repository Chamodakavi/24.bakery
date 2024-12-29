import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import Cake from '../Assets/cake.jpg'
import { Link } from 'react-router-dom';


const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0, 6),
}));

const StyledLink = styled(Link)`
  background-color: yellow;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
`;

function WelcomeSection() {
  const matches = useMediaQuery('(max-width:600px)');

  return (
   <section style={{
    backgroundColor:'grey',
    paddingTop:'50px'
   }}>
        <StyledContainer maxWidth="lg" sx={{
        
        }}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom>
                Delicious Foods For Everyone
              </Typography>
              <Typography variant="body1" paragraph mb={6}>
                Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning.
              </Typography>
              <StyledLink to='/products' variant="contained">Explore Menu</StyledLink>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={Cake}
                alt="Delicious Cake"
                style={{ width: matches ? '100%' : '80%' }} // Adjust image size for smaller screens
              />
            </Grid>
          </Grid>
        </StyledContainer>
   </section>
  );
}

export default WelcomeSection;