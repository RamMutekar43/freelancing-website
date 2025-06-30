import WebInfo from '../../components/WebInfo/WebInfo';
import Navbar from '../../components/Navbar/Navbar';
import React from 'react';
import Services from '../../components/Services/Services';
import { Box } from '@chakra-ui/react';
import ClientReviews from '../../components/ClientReviews/ClientReviews';
import Footer from '../../components/Footer/Footer';
import RunningAd from '../../components/Running ad/RunningAd';
import '../../App.css'


const HomePage = () => {
  return (
    <>
      <Box
        backgroundColor="#0A0E1A"
        my={5}
        borderRadius="md"
      >
        <WebInfo />
        <RunningAd/>
        <Services />
        <ClientReviews />
        <Footer />
      </Box>
    </>
  );
};

export default HomePage;
