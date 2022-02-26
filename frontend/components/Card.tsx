import { Box, Button, Text} from '@chakra-ui/react'
import { useState } from 'react';
import { Input } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Center,
    Square,
    Circle
  } from '@chakra-ui/react'

function Card(){
    const [isClicked, setIsClicked] = useState(false);

    return <div>
        
        <Box
            maxW ='sm' borderWidth='1px' borderRadius='lg' p={8}>
                <Text fontSize='5xl'>Dear Blueno</Text>
                <Text fontSize='sm'>Welcome to Dear Blueno! The space where you can share anonymous thoughts.</Text>
           
                <Button colorScheme='blue' onClick={ () => alert("Sorry I didn't have time to properly create elegant web design but I will for future projects!")}>Click me for a Surprise!</Button>
        </Box>
       
        <Box
          maxW ='sm' borderWidth='1px' borderRadius='lg' p={8}>
              
<FormControl>
  <FormLabel htmlFor='email'>Name</FormLabel>
  <Input id='email' type='email' />
  <FormHelperText>Your preferred name.</FormHelperText>
</FormControl>

<FormControl>
  <FormLabel htmlFor='email'>Email address</FormLabel>
  <Input id='email' type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
          </Box>
    </div>
}

 
//arrow function makes sure 

export default Card;


  
