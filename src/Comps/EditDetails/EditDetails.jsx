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
  Input,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import EditDetailsStyle from './EditDetailsStyle.jsx'
import Autocomplete from '@mui/material/Autocomplete'

function EditDetails() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordVerification, setPasswordVerification] = useState('')
  const [passwordMatchError, setPasswordMatchError] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [familyName, setfamilyName] = useState('')
  const [familyNameError, setfamilyNameError] = useState('')
  const [dob, setDob] = useState('')
  const [city, setCity] = useState('')
  const [cityError, setCityError] = useState('')
  const [cities] = useState(['New York', 'Los Angeles', 'Chicago'])
  const [street, setStreet] = useState('')
  const [streetError, setStreetError] = useState('')
  const [number, setNumber] = useState('')
  const [numberError, setNumberError] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type === 'image/jpeg') {
      setSelectedImage(file)
    } else {
      setSelectedImage(null)
    }
  }

  const handleNameChange = (e) => {
    const newName = e.target.value
    // Define the regex pattern for the name field (only allowing text)
    const nameRegex = /^[a-zA-Z\s]*$/
    if (!nameRegex.test(newName)) {
      setName(newName)
      // Set an error message if the name doesn't match the pattern
      setNameError('Name must contain only letters.')
    } else {
      setName(newName)
      setNameError('')
    }
  }

  const handlefamilyNameChange = (e) => {
    const newName = e.target.value
    // Define the regex pattern for the name field (only allowing text)
    const nameRegex = /^[a-zA-Z\s]*$/
    if (!nameRegex.test(newName)) {
      setfamilyName(newName)
      // Set an error message if the name doesn't match the pattern
      setfamilyNameError('Name must contain only letters.')
    } else {
      setfamilyName(newName)
      setfamilyNameError('')
    }
  }

  const handleDateChange = (e) => {
    setDob(e.target.value)
  }

  const handleCityChange = (e) => {
    const input = e.target.value
    setCity(input)
    setCityError('')
  }

  const handleStreetChange = (e) => {
    const input = e.target.value
    // Validate street name (only one Hebrew letter)
    const streetRegex = /^[א-ת]$/
    if (!streetRegex.test(input)) {
      setStreetError('Please enter a single Hebrew letter for the street.')
      setStreet('')
    } else {
      setStreet(input)
      setStreetError('')
    }
  }

  const handleNumberChange = (e) => {
    const input = e.target.value
    // Validate positive number
    if (isNaN(input) || input <= 0) {
      setNumber('')
      setNumberError('Please enter a positive number.')
    } else {
      setNumber(input)
      setNumberError('')
    }
  }

  const handleUpdate = (e) => {
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

    // Password verification
    if (password !== passwordVerification) {
      setPasswordMatchError('Passwords do not match.')
      return
    } else {
      setPasswordMatchError('')
    }

    console.log('Username:', username)
    console.log('Password:', password)
    console.log('Password Verification:', passwordVerification)
    console.log('Selected Image:', selectedImage)
    console.log('Name:', name)
    console.log('Family Name:', familyName)
    console.log('Date of Birth:', dob)
    console.log('City:', city)
    console.log('Street:', street)
    console.log('Number:', number)
    console.log('success')

    const user = JSON.parse(sessionStorage.getItem('user'))
    const loggedInUserEmail = JSON.parse(sessionStorage.getItem('user')).email

    const updatedUserData = {
      username: username,
      password: password,
      passwordVerification: passwordVerification,
      selectedImage: selectedImage,
      name: name,
      familyName: familyName,
      email: loggedInUserEmail,
      dob: dob,
      city: city,
      street: street,
      number: number,
    }

    // Update the user data in localStorage as well
    const users = JSON.parse(localStorage.getItem('users'))
    const updatedUsers = users.map((user) => {
      if (user.email === loggedInUserEmail) {
        return updatedUserData
      } else {
        return user
      }
    })
    localStorage.setItem('users', JSON.stringify(updatedUsers))

    // Save the updated user data back to sessionStorage
    sessionStorage.setItem('user', JSON.stringify(updatedUserData))
  }

  return (
    <Grid>
      <Paper elevation={10} style={EditDetailsStyle.paperStyle}>
        <Grid align="center">
          <Avatar style={EditDetailsStyle.avatarStyle}>
            <LockOutlinedIcon align="center" />
          </Avatar>
        </Grid>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            EditDetails
          </Typography>
          <form onSubmit={handleUpdate} style={EditDetailsStyle.formStyle}>
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
            <FormControl fullWidth margin="normal">
              <TextField
                label="Password Verification"
                type="password"
                variant="outlined"
                fullWidth
                value={passwordVerification}
                onChange={(e) => setPasswordVerification(e.target.value)}
                error={Boolean(passwordMatchError)}
                helperText={passwordMatchError}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Input
                type="file"
                accept="image/jpeg"
                onChange={handleImageChange}
              />
              {selectedImage && (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected Preview"
                />
              )}
            </FormControl>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={handleNameChange}
              error={Boolean(nameError)}
              helperText={nameError}
            />
            <TextField
              label="FamilyName"
              variant="outlined"
              fullWidth
              margin="normal"
              value={familyName}
              onChange={handlefamilyNameChange}
              error={Boolean(familyNameError)}
              helperText={familyNameError}
            />
            <TextField
              label="Date of Birth"
              type="date"
              fullWidth
              margin="normal"
              value={dob}
              onChange={handleDateChange}
            />
            <FormControl fullWidth margin="normal">
              <Autocomplete
                options={cities}
                value={city}
                onChange={(event, newValue) => {
                  setCity(newValue)
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="City"
                    variant="outlined"
                    fullWidth
                    onChange={handleCityChange}
                    error={Boolean(cityError)}
                    helperText={cityError}
                  />
                )}
              />
            </FormControl>
            <TextField
              label="Street"
              variant="outlined"
              fullWidth
              margin="normal"
              value={street}
              onChange={handleStreetChange}
              error={Boolean(streetError)}
              helperText={streetError}
            />
            <FormControl fullWidth margin="normal">
              <TextField
                label="Number"
                type="number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={number}
                onChange={handleNumberChange}
                error={Boolean(numberError)}
                helperText={numberError}
                inputProps={{ min: 1 }}
              />
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              update
            </Button>
          </form>
        </Container>
      </Paper>
    </Grid>
  )
}

export default EditDetails
