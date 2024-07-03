import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Tourism = () => {
  return (
    <div><Card style={{marginTop: '5%', marginLeft: '35%'}}sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://th.bing.com/th/id/OIP.TfdUIcGlP_zkrhWYU2WiwwHaEo?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt="Munnar"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Munnar
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Munnar is a town and hill station located in the Idukki district of the southwestern 
        Indian state of Kerala.Munnar is also called the "Kashmir of 
        South India" and is a popular honeymoon destination.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card></div>
  )
}

export default Tourism