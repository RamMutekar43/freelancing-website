import React ,{useState} from 'react'
import { Input, Button } from '@chakra-ui/react'
import { Alert } from '@chakra-ui/react'

const Login = () => {
    const [inputs, setInputs] = useState({
        email:'',
        password:'',
    })

  return (
    <>
    <Input type='email' fontSize={14} placeholder='Email' 
    size={'sm'}
    value={inputs.email}
    onChange={(e)=>setInputs({...inputs,email:e.target.value})}
    />
    <Input type='password' fontSize={14} placeholder='Password'
    size={'sm'}
    value={inputs.password}
    onChange={(e)=>setInputs({...inputs,password:e.target.value})}
    />
    
    <Button bg={"blue.500"} w={"full"} fontSize={"sm"} >
        Log in
    </Button>
    </>
  )
}

export default Login