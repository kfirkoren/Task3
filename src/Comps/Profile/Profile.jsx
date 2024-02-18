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
import EditDetails from '../EditDetails/EditDetails.jsx'

function Profile() {
  const user = JSON.parse(sessionStorage.getItem('user')) || []
  console.log('profile', user)
  const [isUpdateDetailsVisible, setIsUpdateDetailsVisible] = useState(false)

  const handleUpdateDetailsClick = () => {
    setIsUpdateDetailsVisible((prevState) => !prevState)
  }

  const handleGameClick = () => {
    window.open(
      'https://games.yo-yoo.co.il/games_play.php?game=729#google_vignette',
      '_blank'
    )
  }

  const handleLogoutClick = (email) => {
    const loggedInUserEmail = JSON.parse(sessionStorage.getItem('user')).email
    console.log('loginUser email', loggedInUserEmail)
    console.log('email', email)
    if (loggedInUserEmail === email) {
      sessionStorage.removeItem('user')
      console.log(`User with email ${email} has been logged out.`)
      const users = JSON.parse(localStorage.getItem('users')) || []
      const updatedUsers = users.filter((user) => user.email !== email)
      localStorage.setItem('users', JSON.stringify(updatedUsers))
      console.log(
        `User with email ${email} has been removed from local storage.`
      )
    } else {
      console.log('The provided email does not match the logged-in user.')
    }

    console.log('Logout button clicked')
  }

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
          <h1>
            {user.name} {user.familyName}
          </h1>
          <h1>{user.email}</h1>
          <h1>
            {user.street} {user.number}, {user.city}{' '}
          </h1>
          <h1>{user.dob}</h1>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={handleUpdateDetailsClick}
              >
                Update Details
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={handleGameClick}
              >
                Game
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={() => handleLogoutClick(user.email)}
              >
                Log out
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      {isUpdateDetailsVisible && <EditDetails />}
    </Grid>
  )
}

export default Profile
