"use client";
import {
    Box, Grid, GridItem, Image, Text, Input, Button, Flex, Spacer, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Link
} from '@chakra-ui/react'
import SobatSehatLogo from '@/public/img/logo/Sobat-Sehat-Horizontal.svg'
import SobatSehatDarkLogo from '@/public/img/logo/Sobat-Sehat-Dark-Horizontal.svg'
import React from 'react'
import axios from 'axios'
import { useToast } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Footer() {
    const toast = useToast();
    const handleSubscribe = (e: any) => {
        e.preventDefault();
        const email = e.target.email.value;

        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/subscribe`, {
            email: email
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            toast({
                title: 'Berhasil Berlangganan',
                description: `Email ${email} anda telah berhasil berlangganan`,
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        }).catch((err) => {
            toast({
                title: 'Gagal Berlangganan',
                description: `Email ${email} anda telah berlangganan`,
                status: 'warning',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        });

        e.target.email.value = '';
    }
    return (
        <Box borderTop={'1px solid #ddd'} py={10} px={10} bgColor={'white'}>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <GridItem colSpan={2} w='100%' paddingRight={20}>
                    <Image src={SobatSehatDarkLogo.src} alt='Sobat Sehat Logo' w={'200px'}></Image>
                    <Text fontSize={'sm'} mt={5}>
                        Pengguna dapat dengan mudah menjadwalkan, mencari, dan berpartisipasi dalam kegiatan olahraga rekreasi yang sesuai dengan minat dan preferensi mereka.
                    </Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Grid templateColumns='repeat(3, 1fr)'>
                        <GridItem w='100%'>
                            <Text fontSize={'lg'} fontWeight={'bold'} mb={5}>Links</Text>
                            <Link as={NextLink} href='/' fontSize={'sm'} mb={2} display={'block'}>Home</Link>
                            <Link as={NextLink} href='/events' fontSize={'sm'} mb={2} display={'block'}>Jadwal</Link>
                            <Link as={NextLink} href='/news' fontSize={'sm'} mb={2} display={'block'}>Berita</Link>
                        </GridItem>
                        <GridItem w='100%'>
                            <Text fontSize={'lg'} fontWeight={'bold'} mb={5}>Legal</Text>
                            <Link as={NextLink} href='tos' fontSize={'sm'} mb={2} display={'block'}>Term of Use</Link>
                            <Link as={NextLink} href='privacy' fontSize={'sm'} mb={2} display={'block'}>Privacy Policy</Link>
                            <Link as={NextLink} href='cookie' fontSize={'sm'} mb={2} display={'block'}>Cookie Policy</Link>
                        </GridItem>
                        <GridItem w='100%'>
                            <Text fontSize={'lg'} fontWeight={'bold'} mb={5}>Company</Text>
                            <Text fontSize={'sm'} mb={2} display={'block'}>About Us</Text>
                            <Text fontSize={'sm'} mb={2} display={'block'}>Contact</Text>
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem>
                    <Text fontSize={'lg'} mb={5}>Langganan Informasi Kegiatan</Text>
                    <form action="#" onSubmit={handleSubscribe}>
                        <Input placeholder='Alamat email..' size='md' name='email' />
                        <Flex>
                            <Spacer />
                            <Button type='submit' name='subcribe' colorScheme='red' mt={3}>Subscribe</Button>
                        </Flex>
                    </form>

                </GridItem>

            </Grid>
        </Box>
    )
}
