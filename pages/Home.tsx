import React from 'react'
import NavigationBar from '../components/NavigationBar'
import IntroBox from '../components/IntroBox'
import './Home.css'
import SkillBar from '../components/SkillBar'
import HireMe from '../components/HireMe'

export default function Home() {
  return (
    <>
    <div className='home-full'>
      <div className='home-nav'>
        <NavigationBar></NavigationBar>
      </div>

      <div className="hire-me">
        <HireMe></HireMe>
      </div>

      <div className="welcome-panel">
        <IntroBox title="Welcome" description="Welcome to my digital hub! I'm Nimsara, passionate about IoT, embedded systems, software engineering, and full-stack development. Dive into my projects that blend technology and creativity – from intricate embedded systems to seamless software. Need services? I offer embedded systems and software engineering expertise. Join me on this exciting journey of discovery and innovation, where your curiosity fuels the exploration."/>
      </div>

      <div>
        <SkillBar></SkillBar>
      </div>
    </div>
    </>
  );
}
