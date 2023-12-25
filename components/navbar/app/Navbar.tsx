"use client"
import React, { use } from 'react'
import SobatSehatLogo from '@/public/img/logo/Sobat-Sehat-Horizontal.svg'
import SobatSehatDarkLogo from '@/public/img/logo/Sobat-Sehat-Dark-Horizontal.svg'
import { Image, ResponsiveValue } from '@chakra-ui/react';
import { Button, ButtonGroup, Box, Text, Flex, Center, Square, Spacer, Link, Menu, MenuItem, MenuList, MenuButton } from '@chakra-ui/react'
import NextLink from 'next/link';
import { LuDot } from "react-icons/lu";
import SearchModal from '@/components/navbar/app/SearchModal';
import LoginModal from './LoginModal';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { getCookie, removeCookie } from 'typescript-cookie';
import { HiChevronDown } from "react-icons/hi";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

export default function Navbar(params: { position: ResponsiveValue<'fixed' | 'absolute' | 'relative' | 'static' | 'sticky'> }) {

    const [user, setUser]: any = useState(false);
    const [token, setToken]: any = useState(false);
    const [recentEvent, setRecentEvent]: any = useState(false);

    // console.log(token)

    useEffect(() => {
        const getToken: any = getCookie('token');
        setToken(getToken);

        if (getToken) {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/auth/me',
                headers: {
                    Authorization: `Bearer ${getToken}`
                }
            }).then((response) => {
                setUser(response.data.user);
            }).catch((err) => {
                removeCookie('token');
                setUser(false);
            });

        }
    }, []);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/events/show/featured',
        }).then((response) => {
            setRecentEvent(response.data.data);
        });
    }, [])

    const handleLogout = async () => {
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
            <Flex w='100%' bgColor={'white'} position={params.position} py={4} px={{ base: "10px", sm: "15px", md: 55 }} zIndex={20} boxShadow={'rgba(0, 0, 0, 0.10) 0px 3px 20px;'}>

                {/* Sobat Sehat Logo */}
                <Image objectFit='cover' src={SobatSehatDarkLogo.src} alt='Sobat Sehat Logo' height={'50px'} />

                {/* Recent Event */}
                <Center ms={5}>
                    <Box bgColor={'#FFE3AB'} p={'5px 10px'} rounded={20}>
                        <Flex>
                            <Text fontSize={'xs'}>Kegiatan Terbaru</Text>
                            <LuDot />
                            <Text fontSize={'xs'}>{recentEvent[0].name}</Text>
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
                        <SearchModal token={token} />
                    </Box>


                    {/* Login */}
                    <Box>
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
                    </Box>
                </Center>
            </Flex>
        </>
    )
}
