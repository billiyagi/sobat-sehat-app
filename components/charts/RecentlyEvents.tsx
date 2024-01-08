"use client";
import React, { use } from 'react'
import {
    Grid, GridItem, Box, Link, Center, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';

export default function RecentlyEvents(params: { token: any }) {
    const toast = useToast();
    const [events, setEvents]: any = useState([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/analytics/recently-events`, {
            headers: {
                Authorization: `Bearer ${params.token.value}`
            }
        }).then(response => {
            setEvents(response.data.data);
            // response.data.data.recent_events
        }).catch(error => {
            toast({
                title: 'Terjadi kesalahan',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        })
    }, [params, toast])

    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead><Tr><Th>Event</Th><Th>Location</Th></Tr></Thead>
                    <Tbody>{events.length != 0 ? events.recent_events.map((event: any, index: number) => (<Tr key={index}><Td>{event.name}</Td><Td>{event.location_at}</Td></Tr>)) : <></>}</Tbody></Table>
            </TableContainer>
        </>
    )
}
