import React, { useState } from 'react'
import { Box, Button, CloseButton, Dialog, Flex, Input, Portal, Text, VStack } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'

const EditProfile = ({ details }) => {
  const [inputs, setInputs] = useState({
    username: details?.username || "",
    email: details?.email || "",
    skills: details?.skills || [""],
    experience: details?.experience || "",
    domain: details?.domain || "",
    bio: details?.bio || "",
    githubLink: details?.githubLink || ""
  });

  const token = localStorage.getItem('token'); // Get the token from localStorage
//   console.log("Token:", token);
const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === "skills" ? value.split(',').map(skill => skill.trim()) : value
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/users/updateProfile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(inputs)
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const data = await response.json();
      console.log("Profile updated:", data);
      alert("Profile is Updated.")
      // navigate('/profile')
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Box py={2}>
      <Dialog.Root size={'lg'} placement={'center'}>
        <Dialog.Trigger asChild>
          <Flex gap={2} alignItems={'center'} cursor={'pointer'} color={'blue.700'}>
            <Button
              bg={'white'}
              color={'black'}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: 'xs', md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Body>
                <VStack w={'full'} border={'1px solid'} mt={10} py={5} px={5} borderRadius={10}
                  backgroundColor={'whiteAlpha.900'}
                  shadow={'sm'}>
                  
                  <Flex w={'full'} py={3} alignItems={'baseline'} gap={3}>
                    <Text color={'black'}>Username:</Text>
                    <Input
                      name="username"
                      value={inputs.username}
                      onChange={handleChange}
                      placeholder='Username...'
                      size={'sm'}
                      color={'black'}
                      variant={'flushed'}
                      fontSize={14}
                    />
                  </Flex>

                  <Flex w={'full'} py={3} alignItems={'baseline'} gap={3}>
                    <Text color={'black'}>Email:</Text>
                    <Input
                      name="email"
                      value={inputs.email}
                      onChange={handleChange}
                      placeholder='Email...'
                      size={'sm'}
                      color={'black'}
                      variant={'flushed'}
                      fontSize={14}
                    />
                  </Flex>

                  <Flex w={'full'} py={3} alignItems={'baseline'} gap={3}>
                    <Text color={'black'}>Skills:</Text>
                    <Input
                      name="skills"
                      value={inputs.skills.join(", ")}
                      onChange={handleChange}
                      placeholder='e.g. HTML, CSS, JavaScript'
                      size={'sm'}
                      color={'black'}
                      variant={'flushed'}
                      fontSize={14}
                    />
                  </Flex>

                  <Flex w={'full'} py={3} alignItems={'baseline'} gap={3}>
                    <Text color={'black'}>Bio:</Text>
                    <Input
                      name="bio"
                      value={inputs.bio}
                      onChange={handleChange}
                      placeholder='Bio...'
                      size={'sm'}
                      color={'black'}
                      variant={'flushed'}
                      fontSize={14}
                    />
                  </Flex>

                  <Flex w={'full'} py={3} alignItems={'baseline'} gap={3}>
                    <Text color={'black'}>Domain:</Text>
                    <Input
                      name="domain"
                      value={inputs.domain}
                      onChange={handleChange}
                      placeholder='Domain...'
                      size={'sm'}
                      color={'black'}
                      variant={'flushed'}
                      fontSize={14}
                    />
                  </Flex>

                  <Flex w={'full'} py={3} alignItems={'baseline'} gap={3}>
                    <Text color={'black'}>Experience:</Text>
                    <Input
                      name="experience"
                      value={inputs.experience}
                      onChange={handleChange}
                      placeholder='Experience...'
                      size={'sm'}
                      color={'black'}
                      variant={'flushed'}
                      fontSize={14}
                    />
                  </Flex>

                  <Flex w={'full'} py={3} alignItems={'baseline'} gap={3}>
                    <Text color={'black'}>GitHub:</Text>
                    <Input
                      name="githubLink"
                      value={inputs.githubLink}
                      onChange={handleChange}
                      placeholder='GitHub profile URL...'
                      size={'sm'}
                      color={'black'}
                      variant={'flushed'}
                      fontSize={14}
                    />
                  </Flex>

                  <Box w={'3/5'} py={5}>
                    <Button
                      bg={"blue.500"}
                      w={"full"}
                      fontSize={"sm"}
                      _hover={{ shadow: 'sm' }}
                      onClick={handleSave} // Call handleSave on click
                    >
                      Save
                    </Button>
                  </Box>
                </VStack>
              </Dialog.Body>

              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Box>
  );
};

export default EditProfile;
