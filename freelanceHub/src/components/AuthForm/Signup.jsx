import React, {use, useState} from 'react'
import { Alert, Box, Button, Input } from '@chakra-ui/react' 
import { InputGroup } from '../ui/input-group'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'



const Signup = () => {
    const [inputs, setInputs] = useState({
        fullname:'',
        username:'',
        email:'',
        password:'',

    })
    
    const [showPassword, setShowPassword] = useState(false)
    

  return (
    <>
    <Input type='email' fontSize={14} 
    placeholder='Email' 
    size={'sm'}
    value={inputs.email}
    onChange={(e)=>setInputs({...inputs,email:e.target.value})}
    />

    <Input type='text' fontSize={14} 
    placeholder='Username' 
    size={'sm'}
    value={inputs.username}
    onChange={(e)=>setInputs({...inputs,username:e.target.value})}
    />

    <Input type='text' fontSize={14} 
    placeholder='Full Name' 
    size={'sm'}
    value={inputs.fullname}
    onChange={(e)=>setInputs({...inputs,fullname:e.target.value})}
    />

    <InputGroup
    // position={'relative'}
    w={'full'}
    endElement={
        <Box h={'full'} position={'absolute'} left={-3}>
        <Button variant={'ghost'} size={'sm'} onClick={()=>{setShowPassword(!showPassword)}} px={0} 
        // _hover={{bg:'none'}}
        >
            {showPassword ? <IoMdEye/> : <IoMdEyeOff/>}
        </Button>
        </Box>
    }
    >
    <Input type={showPassword ? 'text': 'password'}
    fontSize={14} 
    placeholder='Password'
    value={inputs.password}
    onChange={(e)=>setInputs({...inputs,password:e.target.value})}
    size={'sm'}
    />
    </InputGroup>
    {/* {error && (
        <Alert.Root status='error' fontSize={13} p={2} borderRadius={4}>
            <Alert.Indicator />
            <Alert.Title>There was an error processing your request</Alert.Title>
        </Alert.Root>
    )} */}
    <Button bg={"blue.500"} w={"full"} fontSize={"sm"} 
    // loading={loading}
    >Sign up</Button>
    </>
  )
}

export default Signup