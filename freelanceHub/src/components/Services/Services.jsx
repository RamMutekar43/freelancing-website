import { Box, Grid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Service from './Service'
import { FaCode, FaQuidditch } from 'react-icons/fa';
import { IoColorPaletteSharp } from 'react-icons/io5';
import { MdDeveloperMode, MdOutlineVideoCameraBack } from 'react-icons/md';
import { TfiWrite } from 'react-icons/tfi';
import { GoGraph } from 'react-icons/go';
import { SlEarphonesAlt } from 'react-icons/sl';

const Services = () => {

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications tailored to your business needs using modern frameworks and best practices.",
      icon: <FaCode size={50}/>
    },
    {
      title: "Graphic Design",
      description: "Eye-catching logos, banners, and visual assets that bring your brand to life with a professional touch.",
      icon: <IoColorPaletteSharp size={50}/>
    },
    {
      title: "Mobile App Development",
      description: "User-friendly mobile apps for iOS and Android, built for performance and seamless user experience.",
      icon:<MdDeveloperMode size={50}/>
    },
    {
      title: "Content Writing",
      description: "Engaging, SEO-optimized content for blogs, websites, and marketing to boost your online presence.",
      icon: <TfiWrite size={50}/>
    },
    {
      title: "Digital Marketing",
      description: "Effective strategies for SEO, social media, and paid advertising to drive traffic and grow your business.",
      icon: <GoGraph size={50}/>
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and modern user interfaces crafted to enhance user experience and improve engagement.",
      icon: <FaQuidditch size={50}/>
    },
    {
      title: "Video Editing",
      description: "Professional video editing for promotional content, social media, and storytelling that captivates audiences.",
      icon: <MdOutlineVideoCameraBack size={50}/>
    },
    {
      title: "Virtual Assistance",
      description: "Reliable administrative support for data entry, scheduling, and managing day-to-day business tasks.",
      icon: <SlEarphonesAlt size={50}/>
    }
  ];
  
  return (
    <>
    <VStack pt={20}>
      <Box textAlign={'start'} w={'full'} px={5}>
        <Text
        color={'black'}
        fontWeight={'medium'}
        fontSize={'3xl'}
        pt={3}
        >Service
        </Text>
      </Box>
    <Grid
    templateColumns="repeat(4, 1fr)"
    gap={4}
    p={4}
    >
      {services.map((e,key)=>{
        return (<Service title={e.title} description={e.description} key={key} icon={e.icon}/>)
      })}
    </Grid>
    </VStack>
    </>
  )
}

export default Services