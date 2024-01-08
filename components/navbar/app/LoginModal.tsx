"use client"
import React from 'react'
import { Button, Modal, ModalOverlay, ModalBody, ModalFooter, ModalContent, ModalHeader, ModalCloseButton, useDisclosure, Input, Image, Alert, AlertIcon, AlertTitle, AlertDescription, Box, Text, Flex, Center, Link } from '@chakra-ui/react'
import SobatSehatDarkLogo from '@/public/img/logo/Sobat-Sehat-Dark-Horizontal.svg'
import axios from 'axios'
import { useState } from 'react'
import { redirect, usePathname } from 'next/navigation'
import { getCookie, setCookie } from 'typescript-cookie'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaCircleCheck } from "react-icons/fa6";
import NextLink from 'next/link'

export default function LoginModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser]: any = useState({});
    const router = useRouter();
    const path = usePathname();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // Prevent form to redirect
        e.preventDefault();

        setLoading(true);

        // Get form data
        const formData = new FormData(e.currentTarget);

        // Convert form data to object
        const userInput = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        // Send request header to API
        const requestHeader = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        // Send request to API
        try {
            // Get user token from API
            const getToken = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                email: userInput.email,
                password: userInput.password
            }, requestHeader)

            // set Cookie token
            setCookie('token', getToken.data.authorisation.token, { expires: 1 });

            // Set user data to state
            setUser(getToken.data.user);

            // Get user data from API
            if (getToken.data.user.role == 'admin' || getToken.data.user.role == 'kontributor') {
                // Redirect to dashboard
                window.location.replace('/dashboard');
            } else {
                // Reload the page
                window.location.reload();
            }


        } catch (err) {
            setError(true);
            setLoading(false);
        }
    }



    return (
        <>
            <Button bgColor={'#fba600'} color={'white'} px={'30px'} onClick={onOpen} _hover={{ backgroundColor: '#c28204' }}>Login</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody px={'50px'} py={'40px'}>
                        {user.name ? <>
                            <Alert status='success'>
                                <AlertIcon />
                                <AlertTitle mr={2}>Login Berhasil</AlertTitle>
                            </Alert>
                        </> : <>
                            <form action="#" onSubmit={handleSubmit}>
                                <Image src={SobatSehatDarkLogo.src} alt='Sobat Sehat Logo' mb={'70px'}></Image>

                                {error ? <Alert status='error' mb={4}>
                                    <AlertIcon />
                                    <AlertDescription>Email / Password Salah</AlertDescription>
                                </Alert> : ''}

                                <Input placeholder='email@contoh.com' size='md' mb={'20px'} name='email' type='email' />
                                <Input placeholder='password' size='md' mb={'20px'} name='password' type='password' />
                                {loading ? <Button isLoading colorScheme='yellow' w={'100%'} type='submit' spinnerPlacement='start'>Login</Button> : <Button colorScheme='yellow' w={'100%'} type='submit'>Login</Button>}
                                <Center mt={4}>
                                    <Link as={NextLink} href='/register' textAlign={'center'}>
                                        Belum mendaftar? Daftar disini
                                    </Link>
                                </Center>
                            </form>
                        </>}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
