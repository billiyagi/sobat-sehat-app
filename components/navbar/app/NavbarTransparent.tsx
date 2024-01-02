"use client"
import React, { useEffect } from 'react'

// import type { Metadata } from 'next'
import SobatSehatLogo from '@/public/img/logo/Sobat-Sehat-Horizontal.svg'
import SobatSehatDarkLogo from '@/public/img/logo/Sobat-Sehat-Dark-Horizontal.svg'
import { Image, ResponsiveValue } from '@chakra-ui/react';
import { Button, ButtonGroup, Box, Text, Flex, Center, Square, Spacer, Link, Menu, MenuButton, MenuItem, MenuList, Input, InputGroup, Modal, ModalOverlay, ModalContent, ModalBody, ModalFooter, ModalHeader, ModalCloseButton, InputRightElement, Alert, AlertIcon, AlertDescription, useDisclosure } from '@chakra-ui/react'
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
    const [token, setToken]: any = React.useState(false);
    const [user, setUser]: any = React.useState(false);
    const [show, setShow] = React.useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [error, setError] = React.useState({
        status: 'idle',
        message: ''
    });

    const handleClick = () => setShow(!show)

    useEffect(() => {
        setToken(getCookie('token'));
    }, [])


    /** 
     * verification User
     * Navbar Transparent
    */
    useEffect(() => {
        // Set scroll to have bg if window scroll more than 100px
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        })

        // Get user data from API
        if (token) {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/auth/me',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                setUser(response.data.user);
            }).catch((err) => { });
        }


    }, [token])


    /** 
     * Handle Logout Action
    */
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
            console.log(err);
        })

        e.currentTarget.password.value = '';
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
                        </> : <LoginModal />}

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
