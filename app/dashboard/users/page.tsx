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
import UsersTable from '@/components/table/UsersTable';
import { cookies } from 'next/headers';

export default function Users() {
    // const table = useReactTable(options)
    const token: any = cookies().get('token');
    return (
        <Box >
            <Flex mb={10} justify={'space-between'} alignItems={'center'}>
                <Heading as={'h1'} size={'lg'}>Users</Heading>
                <Link as={NextLink} href="/dashboard/users/create" bg={'white'}>
                    <Button colorScheme='blue'>Create User</Button>
                </Link>
            </Flex>
            <Box bg={'white'} p={5} rounded={10} shadow={'lg'}>
                <UsersTable token={token.value} />
            </Box>
        </Box>
    )
}
