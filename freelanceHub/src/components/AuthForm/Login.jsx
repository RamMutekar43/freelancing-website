import React ,{useState} from 'react'
import { Input, Button } from '@chakra-ui/react'
import useAuthStore from '../../Store/authStore'
import { Alert } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
    const [inputs, setInputs] = useState({
        email:'',
        password:'',
    })

    const loginUser = useAuthStore(state => state.login)
    const navigate = useNavigate()

    const handleLogin = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });
  
        if (res.ok) {
          const data = await res.json();
          localStorage.setItem('token',data.token)
          // saveToken(data.token);
          // setIsAuthenticated(true);
          loginUser(res)
          navigate('/');
        } else {
          const err = await res.text();
          alert(err || 'Login failed');
        }
      } catch (error) {
        alert('Network error: ' + error.message);
      }


    };

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
    
    <Button bg={"blue.500"} w={"full"} fontSize={"sm"} onClick={handleLogin}>
        Log in
    </Button>
    </>
  )
}

export default Login