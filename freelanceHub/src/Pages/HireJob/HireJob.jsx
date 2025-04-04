import Freelancers from '../../components/Freelancers/Freelancers'
import { Box, Input, InputGroup, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { LuSearch } from 'react-icons/lu'

const HireJob = () => {
    const [isFreelancers, setIsFreelancers] = useState([]);
          const [isMenu, setIsMenu] = useState([]);
          const [selectedDomain,setSelectedDomain] = useState(""); 
    
        // https://dummyjson.com/c/4e70-b83d-4a04-b66f
    
        useEffect(()=>{
            const getFreelancers = async ()=>{
                try {
                  const response = await fetch("https://dummyjson.com/c/4e70-b83d-4a04-b66f")
                  const data = await response.json()
                //   console.log(data.freelancers)
          
                    setIsFreelancers(data.freelancers);
                    console.log(isFreelancers)
                    // setIsMenu(data.domains)
                
                } catch (error) {
                  console.log("ERROR! : ", error)
                }
              }
              getFreelancers();
        },[])
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
        
        <Freelancers selectedDomain={selectedDomain} isFreelancers={isFreelancers}/>
    </VStack>
    </>
  )
}

export default HireJob