// src/components/layout/Navbar.jsx
import React from 'react';
import { Box, Button, Container, Flex } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Store/authSlice';
import { useAuth } from '../../context/AuthContext'; // Use context

const Navbar = () => {
  // const { user } = useSelector((state)=>state.auth); // Get user from Redux state
  const user = localStorage.getItem('user')
  const { logout: logoutContext } = useAuth(); // Use context logout
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(user)

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout in Redux
    logoutContext();    // Clear token from context
    navigate('/login');
  };

  return (
    <Container h="10vh" w="full" py={4} px={0}>
      <Flex w="full" justifyContent={{ base: 'center', sm: 'space-between' }} alignItems="center">
        <Box fontWeight="bold">FreelancHub</Box>
        <Flex gap={4} alignItems="center">
          <Link to="/"><Button variant="outline" size="sm">Home</Button></Link>
          <Link to="/get-job"><Button variant="outline" size="sm">Get Job</Button></Link>
          <Link to="/hire-job"><Button variant="outline" size="sm">Hire Job</Button></Link>
          
          {!user ? (
            <>
              <Link to="/login"><Button bg="blue.400" size="sm">Login</Button></Link>
              <Link to="/signup"><Button variant="outline" size="sm">Signup</Button></Link>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" onClick={handleLogout}>Logout</Button>
            </>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
