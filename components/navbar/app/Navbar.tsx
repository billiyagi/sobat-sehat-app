import React from 'react'
import SobatSehatLogo from '@/public/img/logo/Sobat-Sehat-Horizontal.svg'
import SobatSehatDarkLogo from '@/public/img/logo/Sobat-Sehat-Dark-Horizontal.svg'
import { Image, ResponsiveValue } from '@chakra-ui/react';
import { fonts } from '@/app/fonts';
import { Button, ButtonGroup, Box, Text, Flex, Center, Square, Spacer, Link } from '@chakra-ui/react'
import NextLink from 'next/link';
import { LuDot } from "react-icons/lu";
import SearchModal from '@/components/navbar/app/SearchModal';


export default function Navbar(params:
    { position: ResponsiveValue<'fixed' | 'absolute' | 'relative' | 'static' | 'sticky'> }) {
    return (
        <>
            <Flex w='100%' bgColor={'white'} position={params.position} py={4} px={{ base: "10px", sm: "15px", md: 55 }} zIndex={20} boxShadow={'rgba(0, 0, 0, 0.10) 0px 3px 20px;'}>

                {/* Sobat Sehat Logo */}
                <Image objectFit='cover' src={SobatSehatDarkLogo.src} alt='Sobat Sehat Logo' height={'50px'} />

                {/* Recent Event */}
                <Center ms={5}>
                    <Box bgColor={'#FFE3AB'} p={'5px 10px'} rounded={20}>
                        <Flex>
                            <Text fontSize={'xs'}>Recent Event</Text>
                            <LuDot />
                            <Text fontSize={'xs'}>Senam lantai Jakarta Fest 2023</Text>
                        </Flex>
                    </Box>
                </Center>
                <Spacer />

                {/* Menus */}
                <Center >
                    <Flex color={'black'}>
                        <Center marginRight={'20px'}>
                            <Link as={NextLink} href='/' fontWeight={'semibold'} _hover={{ textDecoration: 'none', color: '#fba600' }}>Home</Link>
                        </Center>
                        <Center marginRight={'20px'}>
                            <Link as={NextLink} href='/news' fontWeight={'semibold'} _hover={{ textDecoration: 'none', color: '#fba600' }}>Berita</Link>
                        </Center>
                        <Center marginRight={'20px'}>
                            <Link as={NextLink} href='/events' fontWeight={'semibold'} _hover={{ textDecoration: 'none', color: '#fba600' }}>Kegiatan</Link>
                        </Center>
                        <Center>
                            <Link as={NextLink} href='/about' fontWeight={'semibold'} _hover={{ textDecoration: 'none', color: '#fba600' }}>About</Link>
                        </Center>
                    </Flex>

                    {/* Search Modal */}
                    <Box mx={'20px'}>
                        <SearchModal />
                    </Box>


                    {/* Login */}
                    <Button bgColor={'black'} color={'white'} px={'30px'}>Login</Button>
                </Center>
            </Flex>
        </>
    )
}
