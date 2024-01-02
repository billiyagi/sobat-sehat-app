"use client"
import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Heading,
    Flex,
    Center,
    Link,
    Button,
    Input,
    Text,
    Select
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaChevronLeft } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { getCookie } from 'typescript-cookie';
import axios from 'axios';
import { useToast } from '@chakra-ui/react'
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaUserPen } from "react-icons/fa6";

export default function UpdateUserForm(params: { token: any, userId: any }) {
    const router = useRouter()
    const toast = useToast()
    const [isLoading, setIsLoading] = React.useState(false)
    const [user, setUser]: any = React.useState({})
    const [error, setError]: any = React.useState({
        status: 'idle',
        data: []
    })


    /** 
     * Get information user
    */
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${params.userId}`, {
            headers: {
                Authorization: `Bearer ${params.token.value}`
            }
        }).then((response) => {
            setUser(response.data.data)
        }).catch((error) => {
            console.log(error.response.data)
        })
    }, [params])

    /** 
     * Handle submit form create users
    */
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true)
        const { name, email, password, roles } = e.currentTarget;


        try {
            const response = await axios(`${process.env.NEXT_PUBLIC_API_URL}/users/${params.userId}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${params.token.value}`
                },
                data: {
                    name: name.value,
                    email: email.value,
                    password: password.value,
                    role: roles.value
                }
            })
            if (response.data.status === 'success') {
                toast({
                    title: 'Berhasil',
                    description: response.data.message,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position: 'top-right'
                })
            }
            setIsLoading(false)
            router.push('/dashboard/users')
        } catch (error: any) {
            setIsLoading(false)
            if (error) {
                setError({
                    status: 'error',
                    data: error.response.data.message
                })
            }
            toast({
                title: 'Terjadi kesalahan',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        }
    }
    return (
        <form action="#" onSubmit={handleSubmit}>
            <Box bg={'white'} p={5} rounded={10} shadow={'lg'} mb={10}>
                <Box mb={5}>
                    <Text mb={2}>Nama Lengkap</Text>
                    <Input size='md' name='name' required defaultValue={user.name} />
                    <Text size={'xs'} fontStyle={'italic'} color={'red'}>{error.data.name ? `* ${error.data.name}` : ''}</Text>
                </Box>

                <Flex w={'100%'} justifyContent={'space-between'} mb={5}>
                    <Box w={'50%'} mr={3}>
                        <Text mb={2}>Email</Text>
                        <Input size='md' name='email' defaultValue={user.email} />
                        <Text size={'xs'} fontStyle={'italic'} color={'red'}>{error.data.email ? `* ${error.data.email}` : ''}</Text>
                    </Box >
                    <Box w={'50%'}>
                        <Text mb={2}>Role Pengguna (now: {user.role})</Text>
                        <Select placeholder='Pilih Role' name='roles'>
                            <option value='admin'>Administrator</option>
                            <option value='kontributor'>Kontributor</option>
                            <option value='user'>Subscriber</option>
                        </Select>
                        <Text size={'xs'} fontStyle={'italic'} color={'red'}>{error.data.role ? `* ${error.data.role}` : ''}</Text>
                    </Box>
                </Flex>

                <Box w={'100%'} mr={3}>
                    <Text mb={2}>Password</Text>
                    <Input size='md' name='password' />
                    <Text size={'xs'} fontStyle={'italic'} color={'red'}>{error.data.password ? `* ${error.data.password}` : ''}</Text>
                </Box >
                <Flex justifyContent={'end'} mt={10}>
                    <Button type='submit' colorScheme='blue' isLoading={isLoading}>
                        <Box mr={2}><FaUserPen /></Box>
                        Update User</Button>
                </Flex>
            </Box>


        </form>
    )
}
