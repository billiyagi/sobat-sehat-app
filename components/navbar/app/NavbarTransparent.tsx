"use client"
import React, { useEffect } from 'react'

// import type { Metadata } from 'next'
import SobatSehatLogo from '@/public/img/logo/Sobat-Sehat-Horizontal.svg'
import SobatSehatDarkLogo from '@/public/img/logo/Sobat-Sehat-Dark-Horizontal.svg'
import { Image, ResponsiveValue } from '@chakra-ui/react';
import { Button, ButtonGroup, Box, Text, Flex, Center, Square, Spacer, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import NextLink from 'next/link';
import { HiChevronDown } from "react-icons/hi";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { getCookie, removeCookie } from 'typescript-cookie';
import axios from 'axios';
import LoginModal from './LoginModal';

export default function NavbarTransparent(params:
    { position: ResponsiveValue<'fixed' | 'absolute' | 'relative' | 'static' | 'sticky'> }) {

    const [scroll, setScroll] = React.useState(false);

    const [user, setUser]: any = React.useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        })

        const token: any = getCookie('token');
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/auth/me',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setUser(response.data.user);
        }).catch((err) => { });
    }, [])



    const handleLogout = async () => {
        const token: any = getCookie('token');
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/auth/logout',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            removeCookie('token');
            setUser(false);
        }).catch((err) => { });
    }

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

                    {user ?
                        <>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<HiChevronDown />}>
                                    {user.name}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>
                                        <Text mr={2}>
                                            <CgProfile />
                                        </Text>
                                        Profile</MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        <Text mr={2}><TbLogout /></Text>
                                        Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </> : <LoginModal />}

                </Center>
            </Flex>
        </>
    )
}
