import useShowToast from '../../Hooks/useShowToast'
import { Box, Button, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PostJobForm = () => {
    const [jobInputs, setJobInputs] = useState({
            // fullname:'',
            title:'',
            description:'',
            price:'',
        })


        const navigate = useNavigate()
        const showToast = useShowToast()
        const token = localStorage.getItem('token')
        // console.log(token)
        
        const [isToken, setIsToken] = useState(token);

        const postJob = async ()=>{
    
         if(!jobInputs.title && !jobInputs.description && !jobInputs.price){
          showToast( 'Error',"Please fill all the fields.", 'error')
         }
         else{
          try {
            const res = await fetch('http://localhost:8080/api/jobs/postJob', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(jobInputs),
            });
        
            if (res.ok) {
              alert('Job Posted.');
              console.log(res)
             
              navigate('/post-job');
            } else {
              const errorText = await res.text(); 
              alert(errorText || 'Job Posting failed!');
            }
          } catch (error) {
            alert('Error: ' + error.message);
          }
          
         }
        }
  return (
    <>
    <VStack w={'2/5'} border={'1px solid'}  mt={5} py={5} px={5} borderRadius={10} 
    backgroundColor={'whiteAlpha.400'}
    shadow={'sm'}>
    <Box w={'full'} py={5}>
            <Text color={'black'}>Job Title:</Text>
            <Input type='text' fontSize={14}
            color={'black'} 
            placeholder='Job Title...' 
            size={'sm'}
            value={jobInputs.title}
            onChange={(e)=>setJobInputs({...jobInputs,title:e.target.value})}
            variant={'flushed'}
            />

    </Box>
    <Box w={'full'} py={5}>
            <Text color={'black'}>Job Description:</Text>
            <Input type='text' fontSize={14} 
            variant={'flushed'}
            color={'black'}
            placeholder='Job Description...' 
            size={'sm'}
            value={jobInputs.description}
            onChange={(e)=>setJobInputs({...jobInputs,description:e.target.value})}
            />

            {/* <Textarea placeholder='Job Description...' variant={'flushed'} color={'black'} 
            autoresize maxH="5lh"
            /> */}
    </Box>
    <Box w={'full'} py={5}>
            <Text color={'black'}>Job Price:</Text>
            <Input type='text' fontSize={14} 
            color={'black'} 
            placeholder='Price...' 
            size={'sm'}
            value={jobInputs.price}
            onChange={(e)=>setJobInputs({...jobInputs,price:e.target.value})}
            variant={'flushed'}
            />
    </Box>
    <Box w={'3/5'} py={5}>
    <Button bg={"blue.500"} w={"full"} fontSize={"sm"} 
    _hover={{shadow:'sm',}}
            onClick={postJob}
            >Post Job</Button>
    </Box>
    </VStack>
    </>
  )
}

export default PostJobForm