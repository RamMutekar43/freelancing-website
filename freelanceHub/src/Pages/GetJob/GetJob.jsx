import Job from "../../components/Jobs/Job";
import { VStack, Box, Container, Input, InputGroup } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { LuSearch } from "react-icons/lu";

const GetJob = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState("");
  const token = localStorage.getItem('token');
  const [isToken, setIsToken] = useState(token);

  useEffect(() => {
    if (!isToken) {
      console.error("No access token found");
      return;
    }
    
    fetch("http://localhost:8080/api/jobs/getAllJobs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch jobs");
        return res.json();
      })
      .then((data) => {
        setJobs(data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, [token]);

  return (
    <VStack backgroundColor={'transparent'} my={5} borderRadius={15} py={5} minH={'100vh'}>
        
        <Box w={'1/2'}>
          {/* Search field */}
          <InputGroup flex="1" startElement={<LuSearch />} color={'white'} backgroundColor={'transparent'} w={'full'} borderRadius={'full'} >
            <Input 
              placeholder="Search Domain..." 
              _placeholder={{ color: "whiteAlpha.700" }} 
              h={'7vh'} 
              value={selectedDomain} 
              onChange={(e) => setSelectedDomain(e.target.value)} 
              borderStyle={'none'} 
              border={'1px solid'} 
              borderColor={'blue.200'} 
              borderRadius={'full'}
              outlineColor={'blue.400'}
              _focus={{
                borderColor: "blue.500", // Blue border on focus
                boxShadow: "0 0 8px 2px rgba(99, 179, 237, 0.6)", // Ringlight effect
              }}
            />
          </InputGroup>
        </Box>

        {/* Jobs */}
        <Container w={'4/5'}>
          {selectedDomain 
            ? jobs.map((e, key) => {
                if (JSON.stringify(e.jobDomain).toLowerCase() === JSON.stringify(selectedDomain).toLowerCase()) {
                  return (
                    <Job
                      key={e.jobId}
                      title={e.title}
                      description={e.description}
                      price={e.price}
                      owner={e.postedByUsername}
                      date={e.date}
                      domain={e.jobDomain}
                      postedBy={JSON.stringify(e.postedById)}
                    />
                  );
                }
              })
            : jobs.map((e, key) => {
                return (
                  <Job
                    key={e.jobId}
                    title={e.title}
                    description={e.description}
                    price={e.price}
                    owner={e.postedByUsername}
                    date={e.date}
                    domain={e.jobDomain}
                    jobId={e.jobId}
                    postedBy={JSON.stringify(e.postedById)}
                  />
                );
              })
          }
        </Container>
    </VStack>
  );
};

export default GetJob;
