// import JobMenu from "../../components/Jobs/JobMenu"
import Job from "../../components/Jobs/Job"
import { VStack, Box, Button, Container, Input, InputGroup, Text, Flex } from '@chakra-ui/react'
import React, {  useEffect, useState } from 'react'
// import { LuSearch } from "react-icons/lu"
import { useNavigate } from "react-router-dom"
// import { Menu } from "@chakra-ui/react"
import JobMenu from "../../components/Jobs/JobMenu"
import { LuSearch } from "react-icons/lu"



// https://dummyjson.com/c/1d5f-d947-4923-87ed
const GetJob = () => {
  const [isJobs, setIsJobs] = useState([]);
  const [isMenu, setIsMenu] = useState([]);
  const navigate = useNavigate();
  const [selectedDomain,setSelectedDomain] = useState("");
 

    const getJob = async ()=>{
      try {
        const response = (await fetch("https://dummyjson.com/c/1d5f-d947-4923-87ed"))
        const data = await response.json()

          setIsJobs(data.jobs);
          setIsMenu(data.domains)
      
      } catch (error) {
        console.log("ERROR! : ", error)
      }
    }
    getJob();


  return (
    <>
    <VStack backgroundColor={'whiteAlpha.500'} my={5} borderRadius={15} py={5} minH={'100vh'}>
        
        <Box w={'1/2'}>
          <InputGroup flex="1" startElement={<LuSearch  />} color={'black'} outlineColor={'pink'} backgroundColor={'whiteAlpha.700'} w={'full'}>
              <Input placeholder="Search contacts" _placeholder={{color:"blackAlpha.700"}} h={'7vh'} value={selectedDomain} onChange={(e)=>setSelectedDomain(e.target.value)}/>
          </InputGroup>
        </Box>
        <Container w={'4/5'}>

          {selectedDomain ? isJobs.map((e,key)=>{
                if(e.domain.toLowerCase() == selectedDomain.toLowerCase()) return(
                  <>
                  <Job title={e.title} description={e.description} budget={e.budget} key={key}/>
                  </>
                )
              })
              
              :
              isJobs.map((e,key)=>{
                return(
                  <>
                  <Job title={e.title} description={e.description} budget={e.budget} key={key}/>
                  </>
                )
              })
          }
        </Container>
    </VStack>
    
    </>
  )
}

export default GetJob