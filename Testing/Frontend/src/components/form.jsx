import { TextField, Button, Container, Typography, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Checkbox } from '@mui/material'
import { useState } from 'react'

export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const temp = {}

    if (!email) temp.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(email))
      temp.email = 'Invalid email format'

    if (!password) temp.password = 'Password is required'
    else if (password.length < 6)
      temp.password = 'Minimum 6 characters'

    setErrors(temp)
    return Object.keys(temp).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      alert('Form submitted successfully')
      console.log('Form submitted successfully')
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>Login Form</Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          value={email}
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />

        <FormControlLabel
          control={<Checkbox />}
          label="Remember me"
        />

        <FormControl margin="normal">
          <FormLabel>Login Type</FormLabel>
          <RadioGroup defaultValue="user">
            <FormControlLabel value="user" control={<Radio />} label="User" />
            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
          </RadioGroup>
        </FormControl>

        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </Container>
  )
}