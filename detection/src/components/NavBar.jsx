import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const NavBar = () => {
  return (
    <AppBar position="static" sx={{
      backgroundColor : "#5CDB95",
      boxShadow: 'none',
    }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
           
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
            OBJECT DETECTION
          </Typography>
        </Toolbar>
      </Container>
      
    </AppBar>
  )
}

export default NavBar
