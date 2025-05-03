import React, { useState } from 'react';
import {
  Flex,
  Text,
  VStack,
  Box,
  Button,
  Dialog,
  Portal,
  Input,
  CloseButton,
  Container,
  Fieldset,
  Field,
  Textarea
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import GetApplications from '../JobApplicationForm/GetApplications';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Job = ({ title, description, price, jobId, owner, date, domain, postedBy }) => {
  const [isApplied, setIsApplied] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const showApplication = pathname === "/my-posts";

  const [formData, setFormData] = useState({
    name: currentUser?.username || '',
    email: currentUser?.email || '',
    githubLink: currentUser?.githubLink || '',
    coverLetter: '',
    bidPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const applyJob = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/jobApplications/${jobId}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          coverLetter: formData.coverLetter,
          bidPrice: formData.bidPrice,
        }),
      });

      if (res.ok) {
        alert('Applied successfully.');
        navigate('/get-job');
      } else {
        const errorText = await res.text();
        alert(errorText || 'Job application failed!');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <Box pe={10} py={5} w="full" position="relative">
      <MotionBox
        background="linear-gradient(135deg, #1F2C3C, #324A5E)" // ✅ brighter background shade
        w="full"
        shadow="lg"
        borderRadius={10}
        p={5}
        _hover={{ transform: 'scale(1.02)', transition: 'transform 0.3s ease-in-out' }}
        position="relative"
        zIndex={2}
      >
        <VStack w="4/5" py={5} px={10}>
          <Flex w="full" justifyContent="space-between">
            <Flex color="whiteAlpha.900" gap={2} alignItems="baseline">
              <Text fontWeight="bold">Job Title:</Text>
              <Text>{title}</Text>
            </Flex>
            <Flex color="whiteAlpha.900" gap={2} alignItems="baseline">
              <Text fontWeight="bold">Posted at:</Text>
              <Text>{date}</Text>
            </Flex>
          </Flex>

          <Box color="whiteAlpha.900" w="full" h="20vh">
            <Text fontWeight="bold">Job Description:</Text>
            <Box overflowY="hidden" w="full" h="10vh">
              <Text>{description}</Text>
            </Box>
          </Box>

          <Flex color="whiteAlpha.900" w="full" gap={2} alignItems="baseline">
            <Text fontWeight="bold">Budget:</Text>
            <Text>{price}</Text>
          </Flex>

          <Flex color="whiteAlpha.900" w="full" gap={2} alignItems="baseline">
            <Text fontWeight="bold">Owner:</Text>
            <Text>{owner}</Text>
          </Flex>
        </VStack>

        <Flex w="full" justifyContent="flex-end">
          {showApplication ? (
            <Dialog.Root size="cover" placement="center">
              <Dialog.Trigger asChild>
                <MotionButton
                  variant="outline"
                  size="sm"
                  whileHover={{ scale: 1.05, boxShadow: 'lg' }}
                  whileTap={{ scale: 0.98 }}
                  colorScheme="blue"
                  borderColor="blue.400"
                  _hover={{
                    bg: 'blue.400',
                    color: '#0A0E1A',
                    boxShadow: '0 0 8px rgba(0, 0, 255, 0.5)',
                  }}
                >
                  Applications
                </MotionButton>
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content>
                    <Dialog.Body>
                      <GetApplications jobId={JSON.stringify(jobId)} />
                    </Dialog.Body>
                    <Dialog.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Dialog.CloseTrigger>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          ) : (
            currentUser.id !== JSON.parse(postedBy) && (
              <Dialog.Root size="lg" placement="center">
                <Dialog.Trigger asChild>
                  <MotionButton
                    variant="outline"
                    size="sm"
                    whileHover={{ scale: 1.05, boxShadow: 'lg' }}
                    whileTap={{ scale: 0.98 }}
                    colorScheme="teal"
                    borderColor="teal.500"
                    _hover={{
                      bg: 'teal.500',
                      color: '#0A0E1A',
                      boxShadow: '0 0 8px rgba(0, 255, 255, 0.5)',
                    }}
                  >
                    {isApplied ? "Applied" : "Apply"}
                  </MotionButton>
                </Dialog.Trigger>
                <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.Body>
                        <VStack color="black" backgroundColor="whiteAlpha.900" my={5} borderRadius={15} py={5} minH="80vh">
                          <Container w="full">
                            <VStack>
                              <Fieldset.Root size="lg" maxW="lg" mx="auto" p="6" boxShadow="md" borderRadius="xl">
                                <VStack spacing="6">
                                  <VStack spacing="2">
                                    <Fieldset.Legend fontSize="2xl" fontWeight="bold" color="black">
                                      Job Application Form
                                    </Fieldset.Legend>
                                    <Fieldset.HelperText fontSize="sm">
                                      Please fill out the form carefully to apply for the job.
                                    </Fieldset.HelperText>
                                  </VStack>
                                  <Fieldset.Content>
                                    <Field.Root>
                                      <Field.Label>Name</Field.Label>
                                      <Input background="transparent" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" isRequired />
                                    </Field.Root>
                                    <Field.Root>
                                      <Field.Label>Email Address</Field.Label>
                                      <Input background="transparent" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" isRequired />
                                    </Field.Root>
                                    <Field.Root>
                                      <Field.Label>Bid Price</Field.Label>
                                      <Input background="transparent" name="bidPrice" type="text" value={formData.bidPrice} onChange={handleChange} placeholder="Enter your bid price" isRequired />
                                    </Field.Root>
                                    <Field.Root>
                                      <Field.Label>Sample Work</Field.Label>
                                      <Input background="transparent" name="githubLink" value={formData.githubLink} onChange={handleChange} placeholder="Sample work reference link..." isRequired />
                                    </Field.Root>
                                    <Field.Root>
                                      <Field.Label>Cover Letter</Field.Label>
                                      <Textarea background="transparent" name="coverLetter" value={formData.coverLetter} onChange={handleChange} placeholder="Tell us why you're a great fit for this role..." rows={5} isRequired />
                                    </Field.Root>
                                  </Fieldset.Content>
                                  <Button type="submit" colorScheme="teal" backgroundColor="blue.400" onClick={applyJob} _hover={{ bg: 'blue.500', boxShadow: '0 0 8px rgba(0, 0, 255, 0.5)' }}>
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
            )
          )}
        </Flex>
      </MotionBox>
    </Box>
  );
};

export default Job;
