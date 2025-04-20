import Freelancers from '../../components/Freelancers/Freelancers'
import { Box, Input, InputGroup, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import { useAuth } from '../../Context/AuthContext'

const HireJob = () => {
          const [isFreelancers, setIsFreelancers] = useState([]);
          const [isMenu, setIsMenu] = useState([]);
          const [selectedDomain,setSelectedDomain] = useState(""); 
          const [freelancers, setFreelancers] = useState([]);
          const { token } = useAuth();  // Access the token from context

          const [isToken, setIsToken] = useState(token);
          console.log(isToken)
    

          useEffect(() => {
            // console.log(isToken)
            if (!isToken) {
              console.error("No access token found");
              return;
            }
        
            // Fetch freelancers with the access token
            fetch("http://localhost:8080/api/users/getAllUsers", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,  // Use token from context in the Authorization header
              },
            })
              .then((res) => {
                if (!res.ok) {
                  throw new Error("Failed to fetch freelancers");
                }
                return  res.json();
                // console.log(data)


              })
              .then((data) => {
                setFreelancers(data);  // Update freelancers state with the fetched data
                // console.log(data)
              })
              .catch((err) => {
                console.error("Error:", err);
              });
          }, [token]);  // Dependency array includes token, so the effect runs when the token changes
          console.log(freelancers)

  return (
    <>
    <VStack backgroundColor={'whiteAlpha.500'} my={5} borderRadius={15} py={5} minH={'100vh'}>
        <Box w={'1/2'}>
          {/* Search field */}
          <InputGroup flex="1" startElement={<LuSearch /> } color={'black'} backgroundColor={'whiteAlpha.700'} w={'full'} borderRadius={'full'} >
            <Input placeholder="Search Domain..." 
            _placeholder={{color:"blackAlpha.700"}} 
            h={'7vh'} 
            value={selectedDomain} 
            onChange={(e)=>setSelectedDomain(e.target.value)} 
            borderStyle={'none'} 
            border={'1px solid '} 
            borderColor={'blue.200'} 
            borderRadius={'full'}
            outlineColor={'blue.400'}
            />               
          </InputGroup>
        </Box>
        
        <Freelancers selectedDomain={selectedDomain} isFreelancers={freelancers}/>
    </VStack>
    </>
  )
}

export default HireJob