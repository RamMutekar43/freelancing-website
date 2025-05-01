// import JobMenu from "../../components/Jobs/JobMenu"
import Job from "../../components/Jobs/Job"
import { VStack, Box, Button, Container, Input, InputGroup, Text, Flex } from '@chakra-ui/react'
import React, {  useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { LuSearch } from "react-icons/lu"



// https://dummyjson.com/c/1d5f-d947-4923-87ed
const GetJob = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const [selectedDomain,setSelectedDomain] = useState("");
 

const token = localStorage.getItem('token')
const [isToken, setIsToken] = useState(token);
        
    
useEffect(() => {
  if (!isToken) {
    console.error("No access token found");
    return;
  }
  // Fetch freelancers with the access token
  fetch("http://localhost:8080/api/jobs/getAllJobs", {
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
      // console.log(d
    })
    .then((data) => {
      setJobs(data);  // Update freelancers state with the fetched data
      // console.log(data)
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}, [token]);  // Dependency array includes token, so the effect runs when the token changes
// console.log(jobs)



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

        {/* Jobs */}
        <Container w={'4/5'}>

          {   selectedDomain ? jobs.map((e,key)=>{
                if(JSON.stringify(e.jobDomain).toLowerCase() == JSON.stringify(selectedDomain).toLowerCase()) 
                  return(
                  <>
                  <Job 
                  title={e.title} 
                  description={e.description} 
                  price={e.price} 
                  owner={e.postedByUsername}
                  date={e.date}
                  domain={e.jobDomain}
                  key={e.jobId}
                  postedBy = {e.postedById}
                  />
                  </>
                )
              })
              
              :
              jobs.map((e,key)=>{
                // console.log(e.jobId)
                return(
                  <>
                  <Job 
                  title={e.title} 
                  description={e.description} 
                  price={e.price} 
                  owner={e.postedByUsername}
                  date={e.date}
                  domain={e.jobDomain}
                  jobId={e.jobId}
                  postedBy = {JSON.stringify(e.postedById)}
                  />
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