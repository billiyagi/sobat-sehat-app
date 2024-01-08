"use client"
import React, { useState } from 'react'
import { Box, Link, Text, Flex } from '@chakra-ui/react';
import { HiMiniUsers } from "react-icons/hi2";
import { IoCalendar } from "react-icons/io5";
import NextLink from 'next/link';
import axios from 'axios';
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

export default function TotalEventNews(params: { token: any }) {

    const toast = useToast();

    const [events, setEvents] = useState(0);
    const [eventsRegisteredUser, setEventsRegisteredUser] = useState(0);
    const [subscribers, setSubscribers] = useState(0);

    useEffect(() => {

        // Get total events
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/analytics/events`, {
            headers: {
                Authorization: `Bearer ${params.token.value}`
            }
        }).then(response => {
            setEvents(response.data.data.total_events)
        }).catch(error => {
            toast({
                title: 'Terjadi kesalahan',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        })

        // Get total events
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/analytics/subscribers`, {
            headers: {
                Authorization: `Bearer ${params.token.value}`
            }
        }).then(response => {
            setSubscribers(response.data.data.total_subscribers)
        }).catch(error => {
            toast({
                title: 'Terjadi kesalahan',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        })

        // Get total events registered user

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/analytics/user-register-events`, {
            headers: {
                Authorization: `Bearer ${params.token.value}`
            }
        }).then(response => {
            setEventsRegisteredUser(response.data.data.total_user_register_events)
        }).catch(error => {
            toast({
                title: 'Terjadi kesalahan',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        })


    }, [toast, params])

    return (
        <>
            <Flex>
                <Flex w={'50%'} borderRight={'1px solid #ddd'} p={5} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Text fontWeight={'bold'} opacity={'.5'}>Pendaftar Event</Text>
                        <Text fontWeight={'bold'} fontSize={'2xl'}>{eventsRegisteredUser}</Text>
                        <Text fontSize={'xs'}>Berdasarkan data tahun ini</Text>
                    </Box>
                    <Box bg={'#BEE2FE'} rounded={100} p={3}>
                        <Text fontSize={'3xl'} color={'#50B3F9'}><HiMiniUsers /></Text>
                    </Box>
                </Flex>
                <Flex w={'50%'} p={5} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Text fontWeight={'bold'} opacity={'.5'}>Jadwal Event</Text>
                        <Text fontWeight={'bold'} fontSize={'2xl'}>{events}</Text>
                        <Text fontSize={'xs'}>Berdasarkan data tahun ini</Text>
                        <Link as={NextLink} href='/dashboard/events' fontSize={'xs'} color={'#00b5ff'}>Selengkapnya</Link>
                    </Box>
                    <Box bg={'#BAEFED'} rounded={100} p={3}>
                        <Text fontSize={'3xl'} color={'#4CA672'}><IoCalendar /></Text>
                    </Box>
                </Flex>
            </Flex>
            <Box p={5} borderTop={'1px solid #ddd'} textAlign={'center'}>
                <Text fontWeight={'bold'} opacity={'.5'} mb={2}>Total Subscribers</Text>
                <Text fontWeight={'bold'} fontSize={'4xl'}>{subscribers}</Text>
                <Text fontWeight={'bold'} opacity={'.5'} mt={2}>Berdasarkan data tahun ini</Text>
                <Link as={NextLink} href='/dashboard/events' fontSize={'xs'} color={'#00b5ff'}>Selengkapnya</Link>
            </Box>
        </>
    )
}
