"use client"
import React from 'react'
import { Box, Text, Flex, Center, Button, Heading, Link, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function RegisterForm() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        name: '',
        email: '',
        password: ''
    });

    const router = useRouter();

    const handleRegister = (e: any) => {
        setLoading(true);
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
            name: name,
            email: email,
            password: password
        }).then((response) => {
            toast({
                title: 'Akun berhasil dibuat.',
                description: "Klik tombol login untuk melanjutkan.",
                status: 'success',
                position: 'top-right',
                duration: 9000,
                isClosable: true,
            })
            setLoading(false);
            router.push('/events');
        }).catch((err) => {
            toast({
                title: 'Akun gagal dibuat.',
                description: err.response.data.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
            setLoading(false);
        })
    }

    return (
        <Box w={'400px'}>
            <form onSubmit={handleRegister}>
                <Box textAlign={'center'} mb={10}>
                    <Heading as={'h2'}>Welcome Aboard!</Heading>
                    <Text>Isi data berikut untuk mendaftar</Text>
                </Box>
                <Text mb='8px'>Nama Lengkap</Text>
                <Input name='name' type='text' mb={5} required />
                <Text mb='8px'>Email</Text>
                <Input name='email' type='email' mb={5} required />
                <Text mb='8px'>Password</Text>
                <InputGroup size='md' mb={8}>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        name='password'
                        required
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <Button type='submit' bg={'#fba600'} color={'white'} _hover={{ background: '#d68e02', color: '#white' }} w={'100%'} isLoading={loading}>Daftar</Button>
            </form>
        </Box>
    )
}
