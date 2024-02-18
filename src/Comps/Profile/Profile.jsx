import React, { useState } from 'react'
import {
  TextField,
  Button,
  Container,
  Typography,
  FormControl,
  Grid,
  Paper,
  Avatar,
  Link,
} from '@mui/material'
import ManOutlinedIcon from '@mui/icons-material/ManOutlined'
import ProfileStyle from './ProfileStyle.jsx'

function Profile() {
    const user = JSON.parse(localStorage.getItem('users')) || []


    
  return (
    
    <Grid>
      <Paper elevation={10} style={ProfileStyle.paperStyle}>
        <Grid align="center">
          <Avatar style={ProfileStyle.avatarStyle}>
            <ManOutlinedIcon align="center" />
          </Avatar>
        </Grid>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Profle
          </Typography>
        </Container>
      </Paper>
    </Grid>
  )
}

export default Profile
