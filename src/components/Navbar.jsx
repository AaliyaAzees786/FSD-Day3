import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FirstApp
          </Typography>
          <Link to={'/'}><Button style={{color:'white'}}>View</Button></Link>
          <Link to={'/add'}><Button style={{color:'white'}}>Add</Button></Link>
          <Link to={'/book'}><Button style={{color:'white'}}>Book</Button></Link>
          <Link to={'/tourism'}><Button style={{color:'white'}}>Tourism</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar