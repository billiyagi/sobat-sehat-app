"use client"
import React from 'react'
import SobatSehatLogo from '@/public/img/logo/Sobat-Sehat-Horizontal.svg'
import SobatSehatDarkLogo from '@/public/img/logo/Sobat-Sehat-Dark-Horizontal.svg'
import { Image, ResponsiveValue } from '@chakra-ui/react';
import { Button, ButtonGroup, Box, Text, Flex, Center, Square, Spacer, Link, Menu, MenuButton, MenuList, MenuItem, Avatar, AvatarBadge } from '@chakra-ui/react'
import NextLink from 'next/link';
import { LuDot } from "react-icons/lu";
import { usePathname } from 'next/navigation';
import { getCookie, removeCookie } from 'typescript-cookie';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Navbar(params:
    { position: ResponsiveValue<'fixed' | 'absolute' | 'relative' | 'static' | 'sticky'> }) {

    const [token, setToken]: any = useState(false);
    const [user, setUser]: any = useState({
        user: {
            id: '',
            name: '',
            role: '',
        }
    });

    // Get token
    useEffect(() => {
        const token: any = getCookie('token');
        setToken(token);
        setUser(jwtDecode(token));
    }, []);

    /*
        logout user
    */
    const handleLogout = async () => {
        axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        removeCookie('token');
        window.location.replace('/');
    }

    return (
        <>
            <Flex w='100%' bgColor={'white'} position={params.position} py={4} px={{ base: "10px", sm: "15px", md: 55 }} zIndex={20} boxShadow={'rgba(0, 0, 0, 0.10) 0px 3px 20px;'}>

                {/* Sobat Sehat Logo */}
                <Image objectFit='cover' src={SobatSehatDarkLogo.src} alt='Sobat Sehat Logo' height={'50px'} />

                <Spacer />

                {/* Menus */}
                <Center >


                    {/* Login */}
                    <Menu>
                        <MenuButton>
                            <Flex>
                                <Center>
                                    <Text mr={2}>
                                        {user.user.name}
                                    </Text>
                                </Center>
                            </Flex>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem bg={'red'} color={'white'} onClick={handleLogout}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </Center>
            </Flex>
        </>
    )
}
