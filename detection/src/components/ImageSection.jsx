import React from 'react';
import Images from './Images';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ImageSection = ({image, image2}) => {
  return (
    <Box sx={{ 
      flexGrow: 1,
      backgroundColor: '#379683',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 4px 8px #379683'
    }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: 'arial',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#EDF5E1',
                textDecoration: 'none',
                textAlign: 'center'
              }}
          >
            ORIGINAL IMAGE
          </Typography>
          <Images imageSrc= {image}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: 'arial',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#EDF5E1',
                textDecoration: 'none',
                textAlign: 'center'
              }}
          >
            PROCESSED IMAGE
          </Typography>
          <Images imageSrc={image2}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ImageSection
