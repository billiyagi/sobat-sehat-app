import React, { useContext } from 'react'

import { Flex, Button, Text } from '@chakra-ui/react'
import { DataTable } from '@/components/DataTable';
import { createColumnHelper } from "@tanstack/react-table";
import DataGrowing from '@/components/charts/DataGrowing';
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

import TotalEventNews from '@/components/charts/TotalEventNews';
import NewsEvents from '@/components/charts/NewsEvents';
import RecentlyEvents from '@/components/charts/RecentlyEvents';
import { cookies } from 'next/headers';

export default function Dashboard() {
    const token: any = cookies().get('token');

    return (
        <>
            <Flex mb={10}>
                <Text fontWeight={'bold'} fontSize={'2xl'}>Dashboard</Text>
            </Flex>
            <Grid templateColumns='repeat(6, 1fr)' gap={6}>

                {/* Data Growing */}
                <GridItem w='100%' colSpan={3}>
                    <Box bg={'white'} boxShadow={'md'} rounded={10} p={3} h={'390px'}>
                        <DataGrowing />
                    </Box>
                </GridItem>

                {/* The 3 Cards */}
                <GridItem w='100%' colSpan={3}>
                    <Box bg={'white'} boxShadow={'md'} rounded={10} p={3} h={'390px'}>
                        <TotalEventNews token={token} />
                    </Box>
                </GridItem>

                {/* Recently Events */}
                <GridItem w={'100%'} colSpan={3}>
                    <Box bg={'white'} boxShadow={'md'} rounded={10} p={3} h={'390px'}>
                        <RecentlyEvents token={token} />
                    </Box>
                </GridItem>

                {/* News Events */}
                <GridItem w='100%' colSpan={3}>
                    <Box bg={'white'} boxShadow={'md'} rounded={10} p={3} h={'390px'}>
                        <NewsEvents token={token} />
                    </Box>
                </GridItem>
            </Grid>

        </>
    )
}
