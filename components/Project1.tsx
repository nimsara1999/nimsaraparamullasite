import React from 'react'; // Import React if not already imported
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';

const products = [
  {
    name: 'Intellimate Robot',
    description: 'Intelligent pet robot',
    image:
      'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080',
    features: ['React', 'Javascript',"Nodejs", 'MySql'],
    details: [
      'Redux Implemented',
      'Mobile Responsivness',
      'Optimized'
       ],
  },
  {
    name: 'Intellimate Robot',
    description: 'Intelligent pet robot',
    image:
      'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080',
      features: ['React', 'Javascript', 'Redux'],
      details: [
        'Redux Implemented',
        'Mobile Responsivness',
        'Optimized'
         ],
  },
  {
    name: 'Intellimate Robot',
    description: 'Intelligent pet robot',
    image:
      'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080',
      features: ['React', 'Javascript', 'Redux'],
      details: [
   'Redux Implemented',
   'Mobile Responsivness',
   'Optimized'
    ],
  },
  // Add another product object here
];

export default function Project1() {
  return (
    <Container maxW={'5xl'} >
      <SimpleGrid columns={{ base: 1, lg: 3 }}  py={{ base: 18, md: 24 }}>
        {products.map((product, index) => (
          <Flex margin={'10px'} background={'#696969'} borderRadius={'10px'} padding={'25px'} border={'1px solid grey'} key={index} flexDirection={'column'}>
            <Image
              alt={'product image'}
              src={product.image}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              marginBottom={'25px'}
              h={{ base: '50%', sm: '200px', lg: '300px' }}
            />
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}
                  color={'white'} // Change text color to black for better visibility
                >
                  {product.name}
                </Heading>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />}
              >
                <Box>
                  <List spacing={2} display={'flex'}  justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
                    {product.features.map((feature, index) => (
                      <ListItem fontSize={15} borderRadius={'10px'} marginTop={'0px'} background={'#6b46c1'} width={'fit-content'} padding={'10px'} key={index} color={'white'}>{feature}</ListItem>
                    ))}
                  </List>
                </Box>
                <Box>
                  <List spacing={2}>
                    {product.details.map((detail, index) => (
                      <ListItem key={index}>
                        <Text as={'span'} fontWeight={'bold'} color={'white'}>
                          {detail}
                        </Text>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Stack>

              <Button
              alignItems={'center'}
                rounded={'md'}
                w={'50%'}
                mt={8}
                size={'lg'}
                py={'7'}
                bg={'#6b46c1'}
                color={useColorModeValue('white', 'gray.900')}
                textTransform={'uppercase'}
                _hover={{
                  transform: 'translateY(2px)',
                  boxShadow: 'lg',
                }}
              >
                Details
              </Button>

            </Stack>
          </Flex>
        ))}
      </SimpleGrid>
    </Container>
  );
}