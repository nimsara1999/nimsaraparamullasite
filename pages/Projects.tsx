import React from 'react'
import Project1 from '../components/Project1'
import NavigationBar from '../components/NavigationBar'
import './Projects.css'

export default function Projects() {
  return (
    <>
    <div className="projects">
      <div>
          <NavigationBar/>
      </div>

      <div className='project-list'>
        <Project1></Project1>
      </div>

    </div>
    </>
  )
}
