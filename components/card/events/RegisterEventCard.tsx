"use client";
import React from 'react'
import { Box, Button, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from 'typescript-cookie';

export default function RegisterEventCard(params: { event: any }) {
    const [user, setUser]: any = useState({});
    const [isRegistered, setIsRegistered]: any = useState(false);
    const [token, setToken]: any = useState('');

    useEffect(() => {
        const token: any = getCookie('token')
        setToken(token);

        if (token) {
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/registered/${params.event.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                setUser(res.data.user);
                setIsRegistered(res.data.status);
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
        }

    }, [params]);

    const handleRegisterEvent = () => {
        // console.log(user)
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register/event`, {
            event_id: params.event.id,
            user_id: user.id
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res);
            setIsRegistered(true);
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <>
            {isRegistered ? (
                <Box bg={'#efefef'} mb={5} rounded={10} px={10} py={5}>
                    <Button colorScheme='green' w={'100%'}>Anda Terdaftar</Button>
                </Box >
            ) : (
                <Box bg={'#efefef'} mb={5} rounded={10} px={10} py={5}>
                    <Heading size={'md'} textAlign={'center'} mb={5}>Daftar {params.event.name}</Heading >
                    <Button colorScheme='yellow' w={'100%'} onClick={handleRegisterEvent}>Daftar Kegiatan</Button>
                </Box >
            )
            }
        </>
    )
}
