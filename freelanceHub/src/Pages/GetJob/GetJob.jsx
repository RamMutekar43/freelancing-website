import JobMenu from "../../components/Jobs/JobMenu"
import Job from "../../components/Jobs/Job"
import { Flex, Text, VStack, Box, Button, Container } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'


// https://dummyjson.com/c/3616-bd03-43c7-8e7d
const GetJob = () => {
  const [isJobs, setIsJobs] = useState([]);

  useEffect(()=>{
    const getJob = async ()=>{
      const response = await fetch("https://dummyjson.com/c/3616-bd03-43c7-8e7d")
      const data = await response.json();
      console.log(data);
      setIsJobs(data.jobs);
    }
    getJob();
  },[])
  return (
    <>
    <Flex backgroundColor={'whiteAlpha.500'} my={5} borderRadius={15} py={5} >
        <Container w={'4/5'}>
            {isJobs.map((e,key)=>{
              return(
                <>
                <Job title={e.title} description={e.description} budget={e.budget} key={key}/>
                </>
              )
            })}
        </Container>

        <Box mt={5} position={"fixed"} right={6} >
            <JobMenu/>
        </Box>
    </Flex>
    
    </>
  )
}

export default GetJob