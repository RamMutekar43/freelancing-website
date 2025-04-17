import React, {use, useState} from 'react'
import { Alert, Box, Button, Input, Toaster } from '@chakra-ui/react' 
import { InputGroup } from '../ui/input-group'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../Store/authStore'
import { toaster } from '../ui/toaster'
import useShowToast from '../../Hooks/useShowToast'
import axios from 'axios'



const Signup = () => {
    const [inputs, setInputs] = useState({
        // fullname:'',
        username:'',
        email:'',
        password:'',

    })

    const showToast = useShowToast()

    const loginUser = useAuthStore(state => state.login)
    const isAuth = useAuthStore(state => state.user)
    
    const [showPassword, setShowPassword] = useState(false)
    const [isUser, setIsUser] = useState(false);
    const navigate = useNavigate()

    const handleSignup = async ()=>{

     if(!inputs.username && !inputs.email && !inputs.email && !inputs.password ){
      showToast( 'Error',"Please fill all the fields.", 'error')
     }
     else{
      try {
        const res = await fetch('http://localhost:8080/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });

    
        if (res.ok) {
          alert('Signup successful!');
          console.log(res)
          // localStorage.setItem();
          loginUser(res)
          navigate('/');
        } else {
          const errorText = await res.text(); 
          alert(errorText || 'Signup failed!');
        }
      } catch (error) {
        alert('Error: ' + error.message);
      }
      
     }
    }
    

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

    {/* <Input type='text' fontSize={14} 
    placeholder='Full Name' 
    size={'sm'}
    value={inputs.fullname}
    onChange={(e)=>setInputs({...inputs,fullname:e.target.value})}
    /> */}

    <InputGroup
    w={'full'}
    endElement={
        <Box h={'full'} position={'absolute'} left={-3}>
        <Button variant={'ghost'} size={'sm'} onClick={()=>{setShowPassword(!showPassword)}} px={0} 
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
    <Button bg={"blue.500"} w={"full"} fontSize={"sm"} 
    onClick={handleSignup}
    >Sign up</Button>
    
    {/* <Toaster/> */}
    </>
  )
}

export default Signup