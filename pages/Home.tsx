import React from 'react'
import NavigationBar from '../components/NavigationBar'
import IntroBox from '../components/IntroBox'
import './Home.css'

export default function Home() {
  return (
    <>
    <div className='home-full'>
    <div className='home'>
      <NavigationBar></NavigationBar>
    </div>
    <div>
      <IntroBox title="Welcome" description="Welcome to my digital hub! I'm Nimsara, passionate about IoT, embedded systems, software engineering, and full-stack development. Dive into my projects that blend technology and creativity – from intricate embedded systems to seamless software. Need services? I offer embedded systems and software engineering expertise. Join me on this exciting journey of discovery and innovation, where your curiosity fuels the exploration."/>
    </div>
    </div>
    </>
  );
}
