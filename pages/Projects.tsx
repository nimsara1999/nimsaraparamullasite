import React from 'react'
import IntroBox from '../components/IntroBox'
import NavigationBar from '../components/NavigationBar'
import Proj1 from '../Components/Projects/Proj1'

export default function Projects() {
  return (
    <>
    <div className="projects">
      <div>
          <NavigationBar/>
      </div>

      <div>
        <Proj1></Proj1>
      </div>

    </div>
    </>
  )
}
