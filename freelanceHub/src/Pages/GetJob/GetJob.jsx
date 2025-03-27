import JobMenu from "../../components/Jobs/JobMenu"
import Job from "../../components/Jobs/Job"
import { Flex, Text, VStack, Box, Button, Container } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'


// https://dummyjson.com/c/a9f5-a3fb-4cba-a23d
const GetJob = () => {
  const [isJobs, setIsJobs] = useState([]);
  const [isMenu, setIsMenu] = useState([]);

  useEffect(()=>{
    const getJob = async ()=>{
      try {
        const response = await fetch("https://dummyjson.com/c/a9f5-a3fb-4cba-a23d")
        const data = await response.json();
      
        setIsJobs(data.jobs);
        setIsMenu(data.jobs.domains)
      } catch (error) {
        console.log("ERROR! : ", error)
      }
    }
    getJob();
  },[])
  return (
    <>
    <Flex backgroundColor={'whiteAlpha.500'} my={5} borderRadius={15} py={5} >
        <Container w={'4/5'}>
            {isJobs.filter((e,key)=>{
              return(
                <>
                <Job title={e.title} description={e.description} budget={e.budget} key={key}/>
                </>
              )
            })}
        </Container>

        <Box mt={5} position={"fixed"} right={6} >
            <JobMenu domains={isMenu}/>
        </Box>
    </Flex>
    
    </>
  )
}

export default GetJob