import React, { useState } from 'react'
import {
  Box, Button, CloseButton, Dialog, Flex,
  Input, Portal, Text, VStack
} from "@chakra-ui/react"
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

  const [file, setFile] = useState(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === "skills" ? value.split(',').map(skill => skill.trim()) : value
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSave = async () => {
    try {
      // Update profile data (excluding image)
      const response = await fetch('http://localhost:8080/api/users/updateProfile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(inputs)
      });

      if (!response.ok) throw new Error('Failed to update profile');

      // Upload profile image if selected
      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        const imageResponse = await fetch("http://localhost:8080/api/users/uploadProfileImage", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        if (!imageResponse.ok) throw new Error("Image upload failed");

        const imageData = await imageResponse.json();
        console.log("Image uploaded successfully:", imageData);
      }

      alert("Profile updated successfully.");
      navigate('/profile');
      window.location.reload();

    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Box py={2}>
      <Dialog.Root size={'lg'} placement={'center'}>
        <Dialog.Trigger asChild>
          <Flex gap={2} alignItems={'center'} cursor={'pointer'} color={'blue.700'}>
            <Button bg={'white'} color={'black'} _hover={{ bg: "whiteAlpha.800" }} size={{ base: 'xs', md: "sm" }}>
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
                  backgroundColor={'whiteAlpha.900'} shadow={'sm'}>
                  
                  {["username", "email", "skills", "bio", "domain", "experience", "githubLink"].map(field => (
                    <Flex key={field} w={'full'} py={3} alignItems={'baseline'} gap={3}>
                      <Text color={'black'}>{field.charAt(0).toUpperCase() + field.slice(1)}:</Text>
                      <Input
                        name={field}
                        value={field === "skills" ? inputs.skills.join(", ") : inputs[field]}
                        onChange={handleChange}
                        placeholder={field + "..."}
                        size={'sm'} color={'black'} variant={'flushed'} fontSize={14}
                      />
                    </Flex>
                  ))}

                  <Flex w={'full'} py={3} alignItems={'baseline'} gap={3}>
                    <Text color={'black'}>Profile Image:</Text>
                    <Input
                      name="profileImage"
                      type='file'
                      onChange={handleFileChange}
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
                      onClick={handleSave}
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
