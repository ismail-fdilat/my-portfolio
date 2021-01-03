import React from 'react'
import "./Portfolio.css"
import Navbar from "./layout/Navbar"
import Projects from "./layout/Projects.js"
import Skills from './layout/Skills'
function Portfolio() {
    return (
           <>
           <Navbar/>
           <Skills/>
           <Projects/>
           </>
    )
}

export default Portfolio