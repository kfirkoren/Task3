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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import LoginStyle from './LoginStyle.jsx'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const handleLogin = (e) => {
    /*מונע את ריענון הדף */
    e.preventDefault()

    // Username validation
    const usernameRegex = /^[a-zA-Z0-9!@#$%^&*()-_+=|<>?{}[\]:";'.,~\\/]{1,60}$/
    if (!usernameRegex.test(username)) {
      setUsernameError(
        'Username must contain only Latin letters (a-z, A-Z), numbers, and special characters. Maximum length is 60 characters.'
      )
      return
    } else {
      setUsernameError('')
    }

    // Password validation
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{7,12}$/
    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must be 7 to 12 characters long and contain at least one special character, one uppercase letter, and one number.'
      )
      return
    } else {
      setPasswordError('')
    }

    // Handle login logic here
    console.log('Username:', username)
    console.log('Password:', password)
    console.log('success')
  }

  return (
    <Grid>
      <Paper elevation={10} style={LoginStyle.paperStyle}>
        <Grid align="center">
          <Avatar style={LoginStyle.avatarStyle}>
            <LockOutlinedIcon align="center" />
          </Avatar>
        </Grid>
        <Container maxWidth="xs">
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Sign in
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={Boolean(usernameError)}
              helperText={usernameError}
            />
            <FormControl fullWidth margin="normal">
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={Boolean(passwordError)}
                helperText={passwordError}
              />
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              Sign in
            </Button>
            <Typography style={{ paddingTop: '10px' }}>
              Don't have an account?
              <Link href="#"> sign up</Link>
            </Typography>
          </form>
        </Container>
      </Paper>
    </Grid>
  )
}

export default Login
