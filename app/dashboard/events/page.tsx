import React from 'react'
import { useReactTable } from '@tanstack/react-table'
import { createColumnHelper } from "@tanstack/react-table";
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
    Button
} from '@chakra-ui/react'
import NextLink from 'next/link'

import { cookies } from 'next/headers';
import EventsTable from '@/components/table/EventsTable';

export default function Events() {
    const token: any = cookies().get('token');
    return (
        <Box >
            <Flex mb={10} justify={'space-between'} alignItems={'center'}>
                <Heading as={'h1'} size={'lg'}>Events</Heading>
                <Link as={NextLink} href="/dashboard/events/create" bg={'white'}>
                    <Button colorScheme='blue'>Create Event</Button>
                </Link>
            </Flex>
            <Box bg={'white'} p={5} rounded={10} shadow={'lg'}>
                <EventsTable token={token.value} />
            </Box>
        </Box>
    )
}
