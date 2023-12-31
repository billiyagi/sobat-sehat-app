"use client"
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Flex, Spacer, Link, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Alert, AlertIcon } from '@chakra-ui/react'
import CommunityImg from '@/public/img/ilustration/home-community.jpg';
import NextLink from 'next/link';
import { FaBookmark } from "react-icons/fa6";
import { getCookie } from 'typescript-cookie';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { jwtDecode } from 'jwt-decode';

export default function EventsCard(params: { name: string, date: string, slug: string, thumbnail: string, userId: number, eventId: any }) {
    const toast = useToast();

    const [token, setToken]: any = useState(false);
    const [isRegistered, setIsRegistered]: any = useState(false);
    const [user, setUser]: any = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure()

    // Check if user is registered
    useEffect(() => {
        const token: any = getCookie('token');
        setToken(token);
        setUser(token ? jwtDecode(token) : {});

        if (token) {
            axios({
                method: 'get',
                url: `${process.env.NEXT_PUBLIC_API_URL}/registered/${params.eventId}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                if (response.data.status) {
                    setIsRegistered(true);
                }
            }).catch((error) => {
                toast({
                    title: 'Terjadi kesalahan',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    position: 'top-right'
                })
            });
        }


    }, [params, token, toast]);


    const handleRegister = (e: any) => {

        e.preventDefault();
        axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/register/event`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                event_id: params.eventId,
                user_id: user.user.id
            }
        }).then((response) => {
            toast({
                title: 'Berhasil mendaftar',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        }).catch((error) => {
            toast({
                title: 'Terjadi kesalahan',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        })
        setIsRegistered(true);
    }

    return (
        <>
            <Card p={'20px 20px'}>
                <Flex>
                    <div>

                        {/* Title Event */}
                        <Link as={NextLink} href={`/events/${params.slug}`} _hover={{ textDecoration: 'none' }}>
                            <Text color={'grey'}>{params.date}</Text>
                            <Text fontSize={'md'} mt={3} fontWeight={'semibold'}>{params.name}</Text>
                        </Link>

                        {/* Daftar Event Button */}
                        {!token ? (
                            <Box mt={3}>
                                <Button type='submit' bgColor={'#fba600'} color={'white'} _hover={{ backgroundColor: '#e09502' }} onClick={onOpen}>
                                    <Text mr={2}><FaBookmark /></Text>
                                    Daftar Event
                                </Button>
                            </Box>
                        ) : (
                            isRegistered ? (
                                <Box mt={3}>
                                    <form action="#">
                                        <Button bgColor={'#00a96e'} color={'white'} _hover={{ backgroundColor: '#029965' }}>
                                            <Text mr={2}><FaBookmark /></Text>
                                            Terdaftar
                                        </Button>
                                    </form>
                                </Box>
                            ) : (
                                <Box mt={3}>
                                    <form action="#" onSubmit={handleRegister}>
                                        <Button type='submit' bgColor={'#fba600'} color={'white'} _hover={{ backgroundColor: '#e09502' }}>
                                            <Text mr={2}><FaBookmark /></Text>
                                            Daftar Event
                                        </Button>
                                    </form>
                                </Box>
                            )
                        )}
                    </div>
                    <Spacer />

                    {/* Thumbnail */}
                    <Image src={`${process.env.NEXT_PUBLIC_URL}/storage${params.thumbnail}`} alt='thumbnail' w={'150px'} rounded={10} objectFit={'cover'}></Image>
                </Flex>
            </Card>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent rounded={20} overflow={'hidden'}>

                    <Alert status='warning'>
                        <AlertIcon />
                        Login untuk mendaftar
                    </Alert>
                </ModalContent>
            </Modal>
        </>
    )
}
