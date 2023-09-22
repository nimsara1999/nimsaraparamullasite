import React from 'react'
import NavigationBar from '../components/NavigationBar'
import IntroBox from '../components/IntroBox'
import './Home.css'
import SkillBar from '../components/SkillBar'
import Avatar from '../components/Avatar'
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import { MdEmail, MdArrowForward } from "react-icons/md"
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
    <div className='home-full'>
      <div className='home-nav'>
        <NavigationBar></NavigationBar>
      </div>

      <div className="avatar">
        <Avatar></Avatar>
        <div>
          <h1 className='heading'>I'm Nimsara Paramulla</h1>
        </div>
        <div>
        <h2 className='intro'>Welcome to my digital hub! I'm all about IoT and embedded systems with software engineering expertise. Let's embark on this innovation journey together, fueled by curiosity.</h2>
        </div>
        <Stack direction='row' spacing={4} paddingTop={10}>
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
        <Contact></Contact>
    </div>
    </div>
    </>
  );
}
