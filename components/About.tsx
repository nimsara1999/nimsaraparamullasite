
import { Card, CardBody, CardFooter,Stack,Button,Heading,Text,Image } from '@chakra-ui/react'
import React from 'react'

export default function About() {
  return (
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  backgroundColor={'purple.80'}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='../images/myshape.jpg'
    alt='my'
  />

  <Stack alignItems={'center'}>
    <CardBody>
      <Heading size="lg" color={'white'}>About Me</Heading>

      <Text py='2' color={'white'}>
      I’m Nimsara Thisal. I'm currently an undergraduate student at the University of Moratuwa, department of Computer Science and Engineering. 
      Also I'm specialized in Integrated Computer Engineering stream. 
        So I'm deeply passionate about IoT-based web development, which essentially involves making things smart and connected through the internet. 
        To gain practical experience and learn from real-world projects, I've taken up freelancing on Fiverr. Now I'm 5 star rated seller on Fiverr.
        It's been an exciting journey, working on various tasks and expanding my skills with various types of clients.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='purple'>
        My CV
      </Button>
    </CardFooter>
  </Stack>
</Card>
  )
}
