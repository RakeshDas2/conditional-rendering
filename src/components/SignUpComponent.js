import { Card, CardActionArea, Box, Container, Avatar, Typography, TextField, Button, CardActions } from '@mui/material'
import React, { useState } from 'react'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import { deepPurple, lightGreen } from '@mui/material/colors';
import { withRouter } from 'react-router-dom';

function SignUpComponent(props) {
    const [userDetails,setUserDetails]=useState({
        firstName:'',
        lastName:'',
        phoneNo:'',
        email:'',
        password:''
    })
    const [isValidFirstName, setIsValidFirstName] = useState(true)
    const [firstNameError, setFirstNameError] = useState('')

    //for LastName
    const [isValidLastName, setIsValidLastName] = useState(true)
    const [lastNameError, setLastNameError] = useState('')

    const [isPhoneNoValid, setIsPhoneNoValid] = useState(true)
    const [phoneNoError, setPhoneNoError] = useState('')
    //for email 
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

    //validation of firstName
    const validateFirstName = (firstName) => {
        if (firstName) {
            if (/^[a-zA-Z]+$/.test(firstName)) {
                setIsValidFirstName(true)
                setFirstNameError('')
                return true
            } else {
                setIsValidFirstName(false)
                setFirstNameError('name should contain only alphabet')
                return false
            }
        } else {
            setIsValidFirstName(false)
            setFirstNameError('First name cannot be empty')
            return false
        }
    }

    //validation of LastName
    const validateLastName = (lastName) => {
        if (lastName) {
            if (/^[a-zA-Z]+$/.test(lastName)) {
                setIsValidLastName(true)
                setLastNameError('')
                return true
            } else {
                setIsValidLastName(false)
                setLastNameError('name should contain only alphabet')
                return false
            }
        } else {
            setIsValidLastName(false)
            setLastNameError('Last name cannot be empty')
            return false
        }
    }
     //validate Phone Number
     const validatePhoneNumber = (phoneNo) => {
        if (phoneNo) {
            if (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(phoneNo)) {
                setIsPhoneNoValid(true)
                setPhoneNoError('')
                return true
            } else {
                setIsPhoneNoValid(false)
                setPhoneNoError('please write a valid phone number')
                return false
            }
        } else {
            setIsPhoneNoValid(false)
            setPhoneNoError('Phone number cannot be empty')
            return false
        }
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


   // const [show, setShow] = useState(false)
    const validateSignUp = () => {
        // setShow(true)
        const validFirstName = validateFirstName(userDetails.firstName)
        const validLastName = validateLastName(userDetails.lastName)
        
        const validPhoneNo = validatePhoneNumber(userDetails.phoneNo)
        const validEmail = validateEmail(userDetails.email)
        const validPassword = validatePassword(userDetails.password)

        if (validFirstName && validLastName  && validPhoneNo && validPassword && validEmail) {
             props.history.push('/')
            console.log('ok');
            
        } else {
            console.error('not valid');
            console.log(userDetails);
        }
    
    }

    const gotoSignIn=()=>{
props.history.push('/')
    }

    return (
        <>
            <Container component={Box} mx='auto'>
                <Box pl={40}>
                    <Card component={Box} sx={{ width: 500, bgcolor: lightGreen[50] }}>
                        <CardActionArea>
                            <Box pl={29}>
                                <Avatar sx={{ width: 40, height: 40, bgcolor: deepPurple[500] }}><AssignmentIndOutlinedIcon /></Avatar>
                            </Box>
                            <Typography variant='h6'>
                                Sign Up
                            </Typography>
                            <Box component='form' p={2}>
                                <TextField
                                    size='small'
                                    name='firstName'
                                    value={userDetails.firstName}
                                    fullWidth
                                    margin='normal'
                                    variant='outlined'
                                    label='First Name'
                                    type='text'
                                     helperText={isValidFirstName ? '':firstNameError}
                                    onChange={(e)=>{updateUserDetails(e)}}
                                />
                                <TextField
                                    size='small'
                                    name='lastName'
                                    value={userDetails.lastName}
                                    fullWidth
                                    margin='normal'
                                    variant='outlined'
                                    label='Last Name'
                                    type='text'
                                    helperText={isValidLastName ?'': lastNameError }
                                    onChange={(e)=>{updateUserDetails(e)}}
                                />
                                <TextField
                                    size='small'
                                    name='phoneNo'
                                     value={userDetails.phoneNo}
                                    fullWidth
                                    margin='normal'
                                    variant='outlined'
                                    label='Phone Number'
                                    type='number'
                                    helperText={isPhoneNoValid ? '' : phoneNoError }
                                    onChange={(e)=>{updateUserDetails(e)}}
                                />
                                <TextField
                                    size='small'
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
                                    size='small'
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
                         
                          <Box>
                          <Button variant='contained' onClick={() => (validateSignUp())}>Sign Up</Button>
                          </Box>
                            <Typography>Already have Account Click here <Button onClick={()=>{gotoSignIn()}}>SignIn</Button></Typography>
                         
                        </CardActionArea>
                    </Card>
                </Box>
            </Container>
        </>
    )
}

export default withRouter(SignUpComponent)