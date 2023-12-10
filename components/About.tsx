
import { Card, CardBody, CardFooter, Stack, Button, Heading, Text, Image, CardHeader } from '@chakra-ui/react'
import React from 'react'

export default function About() {
  return (
    <Card
    alignItems="center" // Center the entire card content vertically
    flexDirection='column' // Flex direction depends on screen size
    overflow="hidden"
    backgroundColor="purple.80"
    color="white"
    border={'none'}
  >
    <CardHeader>
      <Heading size="lg">About Me</Heading>
    </CardHeader>
  
    <CardBody display="flex" flexDirection='column' alignItems="center">

      <Text py="2">
        I’m Nimsara Thisal. I'm currently an undergraduate student at the University of Moratuwa, department of Computer Science and Engineering. Also, I'm specialized in the Integrated Computer Engineering stream. So, I'm deeply passionate about IoT-based web development, which essentially involves making things smart and connected through the internet. To gain practical experience and learn from real-world projects, I've taken up freelancing on Fiverr. Now I'm a 5-star rated seller on Fiverr. It's been an exciting journey, working on various tasks and expanding my skills with various types of clients.
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant="solid" colorScheme="purple">
        My CV
      </Button>
    </CardFooter>
  </Card>
  )
}
