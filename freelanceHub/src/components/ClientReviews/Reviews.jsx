import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box, Container, Flex, Image, Link, Text, VStack } from '@chakra-ui/react';

const Reviews = () => {
    return (
        <>
        <Flex w={'full'} py={5}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
                <Flex gap={10}>
                    <Image src={'./public/reviewImg.avif'} h={400} border={'1px solid gray'} borderRadius={20}/>
                    <VStack alignItems={'self-start'} gap={5} my={'auto'}>
                        <Text textStyle={'lg'}  fontWeight={'light'}>
                            I recently started using this freelancing platform, and my experience has been excellent so far. 
                            The website's clean and professional interface makes it easy to navigate through different sections 
                            like finding projects, managing proposals, and tracking payments. It offers seamless communication 
                            with clients through integrated messaging, and the secure payment system ensures timely transactions. 
                            While the service fees can be slightly high for small projects and some clients lack thorough 
                            verification, the platform provides a robust environment for freelancers to connect with clients, 
                            deliver quality work, and get paid securely. Overall, it is a reliable and user-friendly platform 
                            for freelancers.
                        </Text>
                        <Link color={'black'} textDecoration={'none'}>@this_is_jaden</Link>
                    </VStack>
                </Flex>
            </SwiperSlide>

            <SwiperSlide>
                <Flex gap={10}>
                    <Image src={'./public/reviewImg.avif'} h={400} border={'1px solid gray'} borderRadius={20}/>
                    <VStack alignItems={'self-start'} gap={5} my={'auto'}>
                        <Text textStyle={'lg'}  fontWeight={'light'}>
                            I recently started using this freelancing platform, and my experience has been excellent so far. 
                            The website's clean and professional interface makes it easy to navigate through different sections 
                            like finding projects, managing proposals, and tracking payments. It offers seamless communication 
                            with clients through integrated messaging, and the secure payment system ensures timely transactions. 
                            While the service fees can be slightly high for small projects and some clients lack thorough 
                            verification, the platform provides a robust environment for freelancers to connect with clients, 
                            deliver quality work, and get paid securely. Overall, it is a reliable and user-friendly platform 
                            for freelancers.
                        </Text>
                        <Link color={'black'} textDecoration={'none'}>@this_is_jaden</Link>
                    </VStack>
                </Flex>
            </SwiperSlide>

            <SwiperSlide>
                <Flex gap={10}>
                    <Image src={'./public/reviewImg.avif'} h={400} border={'1px solid gray'} borderRadius={20}/>
                    <VStack alignItems={'self-start'} gap={5} my={'auto'}>
                        <Text textStyle={'lg'}  fontWeight={'light'}>
                            I recently started using this freelancing platform, and my experience has been excellent so far. 
                            The website's clean and professional interface makes it easy to navigate through different sections 
                            like finding projects, managing proposals, and tracking payments. It offers seamless communication 
                            with clients through integrated messaging, and the secure payment system ensures timely transactions. 
                            While the service fees can be slightly high for small projects and some clients lack thorough 
                            verification, the platform provides a robust environment for freelancers to connect with clients, 
                            deliver quality work, and get paid securely. Overall, it is a reliable and user-friendly platform 
                            for freelancers.
                        </Text>
                        <Link color={'black'} textDecoration={'none'}>@this_is_jaden</Link>
                    </VStack>
                </Flex>
            </SwiperSlide>

          </Swiper>
          
        </Flex>
        </>
      );
}

export default Reviews