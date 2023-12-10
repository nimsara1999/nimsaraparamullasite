import React, { useRef } from 'react'
import NavigationBar from '../components/NavigationBar'
import './Home.css'
import Avatar from '../components/Avatar'
import { Button, ButtonGroup, Center, Img, Stack } from '@chakra-ui/react'
import { MdEmail, MdArrowForward } from "react-icons/md"
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import About from '../components/About'
import Project1 from '../components/Project1'

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null); 
  const contactRef = useRef<HTMLDivElement | null>(null); 
  const projectsRef = useRef<HTMLDivElement | null>(null); 

  const childProps = {
    aboutRef,
    contactRef,
    projectsRef
  };

   return (
    <>
    <div className='home-full'>
      <div className='home-nav'>
        <NavigationBar {...childProps}></NavigationBar>
      </div>

      <div className="avatar">
        <Avatar></Avatar>
        <div>
          <h1 className='heading'>I'm Nimsara Paramulla</h1>
        </div>
        <div className="avatarDescription">
        <h2 className='intro'>Welcome to my digital hub! I'm all about IoT and embedded systems with software engineering expertise. Let's embark on this innovation journey together, fueled by curiosity.</h2>
        </div>
        <Stack direction='row' flexWrap={'wrap'} spacing={4} paddingTop={10} >
          <Button leftIcon={<MdEmail />} colorScheme='purple' variant='solid'>
            Email
          </Button>
          <Button colorScheme='green' variant='solid'>
            Fiverr
          </Button>
          <Button colorScheme='gray' variant='solid'>
            GitHub
          </Button>
          <Button rightIcon={<MdArrowForward />} colorScheme='purple' variant='outline'>
            Call me
          </Button>
        </Stack>
      </div>

      <div>
        <h1 className='core-heading'>Core Skills</h1>
      </div>
      <div className='skills'>
      <Skills/>
      </div>

      <div className='about-me' ref={aboutRef}>
       <About></About>
      </div>

      <div  ref={projectsRef}>
      <Project1></Project1>      </div>
      <div ref={contactRef}>
        <Contact></Contact>
    </div>
    </div>
    </>
  );
}
