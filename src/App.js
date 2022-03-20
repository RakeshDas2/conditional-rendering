
import './App.css';
import SignInComponent from './components/SignInComponent';
import SignUpComponent from './components/SignUpComponent';
import NavBarComponent from './components/NavBarComponent';
import { ConditionalContextProvider } from './context/conditionalContext';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomeComponent from './components/HomeComponent';


function App() {

  const [showNavBar,setShowNavBar]=useState(false)
  const [showSignIn,setSignIn]=useState(true)
 

  return (
    <Router>
    <ConditionalContextProvider value={{showNavBar,setShowNavBar}}>
    <div className="App">
    {/* {showNavBar && <NavBarComponent/>} */}
      {/* {showSignIn && <SignInComponent/> } */}
      {/* <SignUpComponent/> */}
      
    </div>
   <Route exact path='/home' component={HomeComponent}/>
   <Route exact path='/' component={SignInComponent}/>
   <Route exact path='/sign_up' component={SignUpComponent}/>
   <Route exact path='/nav_bar' component={NavBarComponent} />

    </ConditionalContextProvider>
    </Router>
  );
}

export default App;
