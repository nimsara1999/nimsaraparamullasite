
import { Card, CardBody, CardFooter,Stack,Button,Heading,Text,Image } from '@chakra-ui/react'
import React from 'react'

export default function About() {
  return (
    <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        bg="#452c63"
        boxShadow={{ base: 'lg', sm: 'xl' }}
    >

    <Stack>
        <CardBody>
        <Heading color={'white'} size='md'>Hello! I'm Nimsara Paramulla.</Heading>
        <Text py='2' color={'white'}>
        As a startup Embedded Systems and IOT based web designer, I offer professional and affordable products as an IOT solution to your problems. I have experience with ESP32, ESP8266, ARDUINO, Raspberrypi microcontrollers and many types of sensors, actuators such as TUYA smart devices, NODERED, MQTT brokers, Firebase. Also frontend and backend technologies such as JavaScript, Flask React, Angular.
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
