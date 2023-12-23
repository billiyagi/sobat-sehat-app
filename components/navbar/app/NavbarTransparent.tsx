"use client"
import React, { useEffect } from 'react'

// import type { Metadata } from 'next'
import SobatSehatLogo from '@/public/img/logo/Sobat-Sehat-Horizontal.svg'
import SobatSehatDarkLogo from '@/public/img/logo/Sobat-Sehat-Dark-Horizontal.svg'
import { Image, ResponsiveValue } from '@chakra-ui/react';
import { fonts } from '@/app/fonts';
import { Button, ButtonGroup, Box, Text, Flex, Center, Square, Spacer, Link } from '@chakra-ui/react'
import NextLink from 'next/link';

export default function NavbarTransparent(params:
    { position: ResponsiveValue<'fixed' | 'absolute' | 'relative' | 'static' | 'sticky'> }) {

    const [scroll, setScroll] = React.useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        })
    }, [])


    return (
        <>
            <Flex w='100%' bgGradient={scroll ? 'linear(to-b, white, white)' : 'linear(to-b, black, transparent)'} position={params.position} py={4} px={{ base: "10px", sm: "15px", md: 200 }} zIndex={20} boxShadow={scroll ? 'rgba(0, 0, 0, 0.10) 0px 3px 20px;' : ''}>
                <Image objectFit='cover' src={scroll ? SobatSehatDarkLogo.src : SobatSehatLogo.src} alt='Sobat Sehat Logo' height={'50px'} />
                <Spacer />
                <Center >
                    <Flex color={scroll ? 'black' : 'white'}>
                        <Center marginRight={'20px'}>
                            <Link as={NextLink} href='/news' fontWeight={'semibold'} _hover={{ textDecoration: 'none', color: '#fba600' }}>Berita</Link>
                        </Center>
                        <Center marginRight={'20px'}>
                            <Link as={NextLink} href='/events' fontWeight={'semibold'} _hover={{ textDecoration: 'none', color: '#fba600' }}>Kegiatan</Link>
                        </Center>
                        <Center marginRight={'20px'}>
                            <Link as={NextLink} href='/about' fontWeight={'semibold'} _hover={{ textDecoration: 'none', color: '#fba600' }}>About</Link>
                        </Center>
                    </Flex>

                    <Button bgColor={scroll ? 'black' : 'white'} color={scroll ? 'white' : 'black'} px={'30px'}>Login</Button>
                </Center>
            </Flex>
        </>
    )
}
