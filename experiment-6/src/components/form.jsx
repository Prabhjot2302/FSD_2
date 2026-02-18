import {
  TextField,
  Button,
  Container,
  Typography,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  FormHelperText,
  Box,
} from '@mui/material'
import { useState } from 'react'

export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [gender, setGender] = useState('')
  const [country, setCountry] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    let temp = {}

    if (password.length < 6) temp.password = 'Min 6 characters'

    if (!email) temp.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(email)) temp.email = 'Invalid email format'

    if (!agreeToTerms) temp.agreeToTerms = 'You must agree to the terms'
    if (!gender) temp.gender = 'Please select a gender'
    if (!country) temp.country = 'Please select a country'

    setErrors(temp)
    return Object.keys(temp).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (e.target.checkValidity()) {
      alert('Form valid!')
      console.log('Form valid!')
    }

    if (validate()) {
      alert('Form submitted successfully')
      console.log('Form submitted successfully')
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Login Form
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          fullWidth
          margin="normal"
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <TextField
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          fullWidth
          margin="normal"
          inputProps={{ minLength: 6 }}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />

        <FormControl error={Boolean(errors.gender)} fullWidth margin="normal">
          <FormLabel>Gender</FormLabel>
          <RadioGroup value={gender} onChange={(e) => setGender(e.target.value)} row>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
        </FormControl>

        <FormControl fullWidth margin="normal" error={Boolean(errors.country)}>
          <FormLabel>Country</FormLabel>
          <Select value={country} onChange={(e) => setCountry(e.target.value)} displayEmpty>
            <MenuItem value="">
              <em>Select a country</em>
            </MenuItem>
            <MenuItem value="usa">United States</MenuItem>
            <MenuItem value="uk">United Kingdom</MenuItem>
            <MenuItem value="india">India</MenuItem>
            <MenuItem value="canada">Canada</MenuItem>
          </Select>
          {errors.country && <FormHelperText>{errors.country}</FormHelperText>}
        </FormControl>

        <FormControl error={Boolean(errors.agreeToTerms)} fullWidth margin="normal">
          <FormControlLabel
            control={
              <Checkbox checked={agreeToTerms} onChange={(e) => setAgreeToTerms(e.target.checked)} />
            }
            label="I agree to the terms and conditions"
          />
          {errors.agreeToTerms && (
            <FormHelperText sx={{ ml: 0 }}>{errors.agreeToTerms}</FormHelperText>
          )}
        </FormControl>

        <Box sx={{ mt: 2 }}>
          <Button variant="contained" type="submit" fullWidth>
            Login
          </Button>
        </Box>
      </form>
    </Container>
  )
}
