import React from 'react';
import './App.css';
import Profile from "./Components/Profile/Profile"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Resume from "./Pages/Resume/Resume"
import Portfolio from "./Pages/Portfolio/Portfolio"
import { Container , Grid } from "@material-ui/core"
import {BrowserRouter as Router , Switch, Route} from "react-router-dom"
function App(){
    return (
<div className='App'>
<Container className='top60'>
    <Grid container spacing={7}>
            <Grid item xs={12} sm={12} md={4} lg={3} >
               <Profile/>
            </Grid>
            <Grid item xs style={{background:'red'}}>
            <Header/>
             <Router>
                 <Switch>
                     <Route path="/portfolio"><Portfolio/> </Route>
                     <Route path="/"><Resume/></Route>
                 </Switch>
             </Router>
              <Footer/>
            </Grid>
        
    </Grid>
</Container>
        </div>
    )
}

export default App;
