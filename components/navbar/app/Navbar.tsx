"use client"
import React, { use } from 'react'
import SobatSehatLogo from '@/public/img/logo/Sobat-Sehat-Horizontal.svg'
import SobatSehatDarkLogo from '@/public/img/logo/Sobat-Sehat-Dark-Horizontal.svg'
import { Button, ButtonGroup, Box, Text, Flex, Center, Square, Spacer, Link, Menu, MenuItem, MenuList, MenuButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, Image, ResponsiveValue, useDisclosure, Input, InputGroup, InputRightElement, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
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
import Router from 'next/router';

export default function Navbar(params: { position: ResponsiveValue<'fixed' | 'absolute' | 'relative' | 'static' | 'sticky'> }) {

    const [user, setUser]: any = useState(false);
    const [token, setToken]: any = useState(false);
    const [recentEvent, setRecentEvent]: any = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = React.useState(false)
    const [error, setError] = useState({
        status: 'idle',
        message: ''
    });
    const handleClick = () => setShow(!show)

    useEffect(() => {
        setToken(getCookie('token'));
    }, [])

    /* 
        User Verification
    */
    useEffect(() => {

        // if token exist, then verify the user and get user data
        if (token) {
            axios(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                setUser(response.data.user);
            }).catch((err) => {
                // removeCookie('token');
                setUser(false);
                // window.location.replace('/');
            })

        }
    }, [token]);
    /*
        Get Recent Event
    */
    useEffect(() => {
        // axios({
        //     method: 'get',
        //     url: `${process.env.NEXT_PUBLIC_API_URL}/events/on/featured`,
        // }).then((response) => {
        //     // setRecentEvent(response.data.data[0].name);
        // });
    }, [])

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

        setUser(false);
        removeCookie('token');
        window.location.replace('/');
    }


    /** 
     * Update Profile
    */
    const handleUpdateProfile = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const userInput = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }

        const requestHeader = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user.id}`, {
            name: userInput.name,
            email: userInput.email,
            password: userInput.password
        }, requestHeader).then((response) => {
            setUser(response.data.data);
            setError({
                'status': 'success',
                'message': 'Berhasil diubah'
            })
        }).catch((err) => {
            setError({
                'status': 'error',
                'message': 'kolom tidak boleh kosong'
            })
        })

        e.currentTarget.password.value = '';
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
                            {/* <Text fontSize={'xs'}>{recentEvent}</Text> */}
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
                            <Menu>
                                <MenuButton as={Button} rightIcon={<HiChevronDown />}>
                                    {user.name}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={onOpen}>
                                        <Text mr={2}>
                                            <CgProfile />
                                        </Text>
                                        Profile</MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        <Text mr={2}><TbLogout /></Text>
                                        Logout</MenuItem>
                                </MenuList>
                            </Menu>
                            :
                            <LoginModal />
                        }
                    </Box>
                </Center>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />
                <form action="#" onSubmit={handleUpdateProfile}>
                    <ModalContent>
                        <ModalHeader>My Profile</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>


                            {/* Error */}
                            {error.status == 'error' ? <Box mb={2}>
                                <Alert status='error'>
                                    <AlertIcon />
                                    <AlertDescription>{error.message}</AlertDescription>
                                </Alert>
                            </Box> : ''}

                            {/* Success */}
                            {error.status == 'success' ? <Box mb={2}>
                                <Alert status='success'>
                                    <AlertIcon />
                                    <AlertDescription>{error.message}</AlertDescription>
                                </Alert>
                            </Box> : ''}

                            <Box mb={2}>
                                <Text>Nama</Text>
                                <Input size='md' defaultValue={user.name} name='name' />
                            </Box>
                            <Box mb={2}>
                                <Text>Email</Text>
                                <Input size='md' defaultValue={user.email} name='email' />
                            </Box>
                            <Text>Ubah Password</Text>
                            <InputGroup size='md'>

                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                    name='password'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' type='submit'>
                                Simpan Perubahan
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    )
}
