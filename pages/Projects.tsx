import React from 'react'
import IntroBox from '../components/IntroBox'
import NavigationBar from '../components/NavigationBar'
import './Projects.css'

export default function Projects() {
  return (
    <>
    <div className="projects">
      <div>
          <NavigationBar/>
      </div>
    
      <div className='menuBar'></div>

      <div className="projectPage">
        <h1>Projects</h1>
      </div>

    </div>
    </>
  )
}
