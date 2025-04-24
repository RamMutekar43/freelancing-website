import React, { useState } from 'react'
import { Flex, Text, VStack, Box, Button, Dialog, Portal, Input, CloseButton, Container, Fieldset, Field, Textarea } from '@chakra-ui/react'
import JobDescription from './JobDescription'
import { useNavigate } from 'react-router-dom'

const Job = ({title, description,price, key, owner, date,domain,postedBy}) => {
  // console.log(date)
  const [isApplied, setIsApplied] = useState(false)
  const  currentUser = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')
  const navigate = useNavigate();

  const handleApplication = ()=>{
    
    setIsApplied(true);
    navigate('/get-job/apply')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, submited:true });
    setIsApplied(true);
    // Navigate('/get-job')
    
  };

  const [formData, setFormData] = useState({
          name: "" || currentUser.username,
          email: "" || currentUser.email,
          workRef: '' || currentUser.githubLink,
          coverLetter: "",
          bidPrice : null,
          jobId : key
        });
      
        // Simple change handler
        const handleChange = (e) => {
          const { name, value, files } = e.target;
          if (name === "resume") {
            setFormData({ ...formData, resume: files[0] }); // handle file input
          } else {
            setFormData({ ...formData, [name]: value }); // handle text inputs
          }
        };

        const applyJob = async ()=>{
    
          // if(!jobInputs.title && !jobInputs.description && !jobInputs.price && !jobInputs.jobDomain){
          //  showToast( 'Error',"Please fill all the fields.", 'error')
          // }
          // else{
           try {
             const res = await fetch('http://localhost:8080/api/jobApplications/67f7eed845dabd3844a73c13/apply', {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
                 Authorization: `Bearer ${token}`,
               },
               body: {
                jobId : JSON.stringify(key),
                bidPrice : JSON.parse(formData.bidPrice),
                coverLetter: JSON.stringify(formData.coverLetter),
               }
             });
         
             if (res.ok) {
               alert('Applied successfull.');
              //  jobInputs.title=""
              //  jobInputs.description=""
              //  jobInputs.price=""
              //   jobInputs.jobDomain=""
               console.log(res)
              
               navigate('/post-job');
             } else {
               const errorText = await res.text(); 
              //  alert(errorText || 'Job Posting failed!');
             }
           } catch (error) {
             alert('Error: ' + error.message);
           }
           
          // }
         }

  return (
    <>
    <Box pe={10} py={5} w={'full'}>
    <Flex backgroundColor={'whiteAlpha.400'} w={'full'} shadow={'sm'} borderRadius={5}>
                <VStack w={'4/5'} py={5} px={10} >
                <Flex w={'full'} justifyContent={'space-between'}> 
                    <Flex color={'black'} gap={2} alignItems={'baseline'}>
                    <Text textStyle={'md'} fontWeight={'bold'}>Job Title : </Text>
                    <Text>{title}</Text>
                    </Flex>

                    <Flex color={'black'} gap={2} alignItems={'baseline'}>
                    <Text textStyle={'md'} fontWeight={'bold'}>Posted at : </Text>
                    <Text>{date}</Text>
                    </Flex>
                </Flex>

                    <Box color={'black'} w={'full'} h={'20vh'} >
                    <Text textStyle={'md'} fontWeight={'bold'}>Job Description : </Text>
                    <Box overflowY={'hidden'} w={'full'} h={'10vh'}>
                    <Text>
                        {description}
                    </Text>
                    </Box>
                    {/* <JobDescription/> */}
                    </Box>

                    <Flex color={'black'} w={'full'} gap={2} alignItems={'baseline'}>
                    <Text textStyle={'md'} fontWeight={'bold'}>Budget : </Text>
                    <Text>{price}</Text>
                    </Flex>

                    <Flex color={'black'} w={'full'} gap={2} alignItems={'baseline'}>
                    <Text textStyle={'md'} fontWeight={'bold'}>Owner : </Text>
                    <Text>{owner}</Text>
                    </Flex>
                    
                </VStack>
                <Flex w={'1/5'}  alignItems={'center'} justifyContent={'center'}>

                {!(JSON.stringify(currentUser.id) == postedBy) ? 

                (
                  <>
                  <Dialog.Root size={'lg'} placement={'center'}>
                          <Dialog.Trigger asChild>
                            <Flex gap={2} alignItems={'center'} cursor={'pointer'} color={'blue.700'}>
                            <Button 
                  backgroundColor={'blue.400'} 
                  _hover={{shadow: 'sm'}}
                  // onClick={handleApplication}
                  >
                    {isApplied ? "Applied" : "Apply"}
                  </Button>
                            </Flex>
                          </Dialog.Trigger>
                          <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                              <Dialog.Content>
                                <Dialog.Body>
                                <VStack color={'black'}  backgroundColor={'whiteAlpha.900'} my={5} borderRadius={15} py={5} minH={'100vh'}>
                                    {/* <Heading as={'h1'}>FreelanceHub</Heading> */}
                                    <Container w={'full'} >
                                        <VStack className=''>
                                                  <Fieldset.Root size="lg" maxW="lg" mx="auto" p="6" boxShadow="md" borderRadius="xl">
                                                    <VStack spacing="6">
                                                      <VStack spacing="2">
                                                        <Fieldset.Legend fontSize="2xl" fontWeight="bold" color={'black'}>
                                                          Job Application Form
                                                        </Fieldset.Legend>
                                                        <Fieldset.HelperText fontSize="sm">
                                                          Please fill out the form carefully to apply for the job.
                                                        </Fieldset.HelperText>
                                                      </VStack>

                                                      <Fieldset.Content>

                                                        {/* Full Name */}
                                                        <Field.Root>
                                                          <Field.Label>Name</Field.Label>
                                                          <Input
                                                          background={'transparent'}
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            placeholder="Enter your full name"
                                                            isRequired
                                                          />
                                                        </Field.Root>

                                                        {/* Email Address */}
                                                        <Field.Root>
                                                          <Field.Label>Email Address</Field.Label>
                                                          <Input
                                                          background={'transparent'}
                                                            name="email"
                                                            type="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="Enter your email"
                                                            isRequired
                                                          />
                                                        </Field.Root>

                                                        <Field.Root>
                                                          <Field.Label>Bid Price</Field.Label>
                                                          <Input
                                                          background={'transparent'}
                                                            name="bidPrice"
                                                            type="text"
                                                            value={formData.bidPrice}
                                                            onChange={handleChange}
                                                            placeholder="Enter your bid price"
                                                            isRequired
                                                          />
                                                        </Field.Root>


                                                        {/* Sample work reference link */}
                                                        <Field.Root>
                                                          <Field.Label>Sample Work</Field.Label>
                                                          <Input
                                                          background={'transparent'}
                                                            name="githubLink"
                                                            value={formData.githubLink}
                                                            onChange={handleChange}
                                                            placeholder="Sample work reference link..."
                                                            isRequired
                                                          />
                                                        </Field.Root>

                                                        {/* Cover Letter */}
                                                        <Field.Root>
                                                          <Field.Label>Cover Letter</Field.Label>
                                                          <Textarea
                                                          background={'transparent'}
                                                            name="coverLetter"
                                                            value={formData.coverLetter}
                                                            onChange={handleChange}
                                                            placeholder="Tell us why you're a great fit for this role..."
                                                            rows={5}
                                                            isRequired
                                                          />
                                                        </Field.Root>

                                                      </Fieldset.Content>

                                                      <Button type="submit" colorScheme="teal" alignSelf="flex-start" backgroundColor={'blue.400'} onClick={applyJob}>
                                                        Submit Application
                                                      </Button>
                                                    </VStack>
                                                  </Fieldset.Root>
                                                </VStack>
                                    </Container>
                                  </VStack>
                                </Dialog.Body>
                  
                                <Dialog.CloseTrigger asChild>
                                  <CloseButton size="sm" />
                                </Dialog.CloseTrigger>
                              </Dialog.Content>
                            </Dialog.Positioner>
                          </Portal>
                        </Dialog.Root>
                  </>
                  ) 
                  : null}

                </Flex>~
    </Flex>
    </Box>
    </>
  )
}

export default Job