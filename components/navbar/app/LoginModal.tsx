"use client"
import React from 'react'
import { Button, Modal, ModalOverlay, ModalBody, ModalFooter, ModalContent, ModalHeader, ModalCloseButton, useDisclosure, Input, Image, Alert, AlertIcon, AlertTitle, AlertDescription, Box, Text, Flex, Center } from '@chakra-ui/react'
import SobatSehatDarkLogo from '@/public/img/logo/Sobat-Sehat-Dark-Horizontal.svg'
import axios from 'axios'
import { useState } from 'react'
import { redirect, usePathname } from 'next/navigation'
import { getCookie, setCookie } from 'typescript-cookie'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaCircleCheck } from "react-icons/fa6";

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

        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            email: userInput.email,
            password: userInput.password
        }, requestHeader).then((response) => {
            setCookie('token', response.data.authorisation.token, { expires: 1 });
            setUser(response.data.user);
        }).catch((err) => {
            setError(true);
            setLoading(false);
        });

        if (user.role == 'admin' || user.role == 'kontributor') {
            router.replace('/dashboard')
        }

        // Reload the page
        window.location.reload();

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

                                <Input placeholder='yourmail@example.com' size='md' mb={'20px'} name='email' type='email' />
                                <Input placeholder='password' size='md' mb={'20px'} name='password' type='password' />
                                {loading ? <Button isLoading colorScheme='yellow' w={'100%'} type='submit' spinnerPlacement='start'>Button</Button> : <Button colorScheme='yellow' w={'100%'} type='submit'>Button</Button>}
                            </form>
                        </>}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
