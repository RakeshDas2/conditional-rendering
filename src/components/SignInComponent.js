import { Avatar, Button, Container, CssBaseline, Paper, TextField, Typography } from '@mui/material'
import { lightGreen, deepPurple } from '@mui/material/colors'
import { Box } from '@mui/system'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';


function SignInComponent(props) {

  console.log(props);
  const [userDetails,setUserDetails]=useState({
    email:'',
    password:''
})

  const [isValidEmail, setIsValidEmail] = useState(true)
  const [emailError, setEmailError] = useState('')
  // for password 
  const [isValidPassword, setIsValidPassword] = useState(true)
  const [passwordError, setPasswordError] = useState('')

  const updateUserDetails = (event) => {
    const userDetailsCopy = { ...userDetails }
    userDetailsCopy[event.target.name] = event.target.value
    setUserDetails(userDetailsCopy)
    //console.log(userDetails);
}


  const validateEmail = (email) => {
    if (email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setIsValidEmail(true)
            setEmailError('')
            return true
        } else {
            setIsValidEmail(false)
            setEmailError('incorrect username')
            return false
        }
    } else {
        setIsValidEmail(false)
        setEmailError('please enter username')
        return false
    }
}


const validatePassword = (password) => {
    if (password) {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)) {
            setIsValidPassword(true)
            setPasswordError('')
            return true;
        } else {
            setIsValidPassword(false)
            setPasswordError('password should contain atleast 1 special,Capital,number ')
            return false;
        }
    } else {
        setIsValidPassword(false)
        setPasswordError('Enter password')
        return false;
    }
}

const validateSignIn = () => {
  

  const validEmail = validateEmail(userDetails.email)
  const validPassword = validatePassword(userDetails.password)

  if ( validPassword && validEmail) {
     props.history.push('/nav_bar')
      console.log('ok');
      
  } else {
      console.error('not valid');
      console.log(userDetails);
  }

}

const gotoSignUp=()=>{
  props.history.push('./sign_up')

}

  return (
    <>
      <Container >
        <CssBaseline />
        <Box mx='auto' pl={39} pt={10}>
          <Paper component={Box} sx={{ width: 500,bgcolor: lightGreen[50] }} >
            <Box pl={29}>
              <Avatar sx={{ width: 40, height: 40, bgcolor: deepPurple[500] }}><LockOutlinedIcon /></Avatar>
            </Box>
            <Typography>Sign In</Typography>
            <br />
            <Box component='form' >
              <TextField
                name='email'
                value={userDetails.email}
                fullWidth
                margin='normal'
                variant='outlined'
                label='Email'
                type='email'
                helperText={isValidEmail ? '' : emailError}
                onChange={(e)=>{updateUserDetails(e)}}
              />
               <TextField
                name='password'
                value={userDetails.password}
                fullWidth
                margin='normal'
                variant='outlined'
                label='password'
                type='password'
                helperText={isValidPassword ? '' : passwordError}
                onChange={(e)=>{updateUserDetails(e)}}
              />
            </Box>
            <Button variant='contained' onClick={()=>{validateSignIn()}}>
              SignIn
            </Button>
           
            <Typography>forgot password click here to <Button>reset password</Button></Typography>
            <br/>
            <Typography>Dont have Account <Button variant='contained' color='success' onClick={()=>{gotoSignUp()}}>SignUp</Button> </Typography>
          </Paper>

        </Box>

      </Container>
    </>
  )
}

export default withRouter(SignInComponent)