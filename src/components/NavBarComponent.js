import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { withRouter } from 'react-router-dom'
import {  Link } from 'react-router-dom'


function NavBarComponent(props) {

const gotoSignIn=()=>{
    props.history.push('/')
}
  return (
     
   <>
   <Container>
       <AppBar>
           <Toolbar>
               <Typography variant='h6' style={{flexGrow:1}}><Link to='/home' >Home</Link></Typography>
               <Button color='inherit'>Employee</Button>
               <Button color='inherit'>AddEmployee</Button>
               <Button color='inherit' onClick={()=>{gotoSignIn()}}>LogOut</Button>
           </Toolbar>
       </AppBar>
   </Container>
   </>
  
  )
}

export default withRouter(NavBarComponent)