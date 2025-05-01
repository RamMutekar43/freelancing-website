import JobApplication from '../../components/JobApplicationForm/Application'
import { Box, Container, Flex, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const GetApplications = ({jobId}) => {
    // console.log(jobId)
    const [applications,setApplications] = useState([])
    const token = localStorage.getItem('token')
    const [isToken, setIsToken] = useState(token);
    console.log(jobId)

    useEffect(() => {
      if (!isToken) {
        console.error("No access token found");
        return;
      }
      // Fetch freelancers with the access token
      fetch(`http://localhost:8080/api/jobApplications/job/${JSON.parse(jobId)}/applications`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,  // Use token from context in the Authorization header
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch applications");
          }
          return  res.json();
          // console.log(d
        })
        .then((data) => {
          setApplications(data);  
          // console.log(data)
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    }, [token]);  // Dependency array includes token, so the effect runs when the token changes
    console.log(applications)


  return (
    <>
    <VStack color="black" backgroundColor="whiteAlpha.900" my={5} borderRadius={15} py={5} minH="80vh">
      <Container w="full">
        <VStack>
          <Box>Applications</Box>
          {applications.map((e,idx)=>{
            return (
                <>
                <JobApplication application={e} key={idx}/>
                </>
            )
          })}
        </VStack>
      </Container>
    </VStack>
    </>
  )
}

export default GetApplications