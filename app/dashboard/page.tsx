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
import NextLink from 'next/link';
import { HiMiniUsers } from "react-icons/hi2";
import { IoCalendar } from "react-icons/io5";
import NewsEvents from '@/components/charts/NewsEvents';

export default function Dashboard() {


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
                        <Flex>
                            <Flex w={'50%'} borderRight={'1px solid #ddd'} p={5} alignItems={'center'} justifyContent={'space-between'}>
                                <Box>
                                    <Text fontWeight={'bold'} opacity={'.5'}>Pendaftar Event</Text>
                                    <Text fontWeight={'bold'} fontSize={'2xl'}>128</Text>
                                    <Text fontSize={'xs'}>Berdasarkan data tahun ini</Text>
                                </Box>
                                <Box bg={'#BEE2FE'} rounded={100} p={3}>
                                    <Text fontSize={'3xl'} color={'#50B3F9'}><HiMiniUsers /></Text>
                                </Box>
                            </Flex>
                            <Flex w={'50%'} p={5} alignItems={'center'} justifyContent={'space-between'}>
                                <Box>
                                    <Text fontWeight={'bold'} opacity={'.5'}>Jadwal Event</Text>
                                    <Text fontWeight={'bold'} fontSize={'2xl'}>128</Text>
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
                            <Text fontWeight={'bold'} fontSize={'4xl'}>128</Text>
                            <Text fontWeight={'bold'} opacity={'.5'} mt={2}>Berdasarkan data tahun ini</Text>
                            <Link as={NextLink} href='/dashboard/events' fontSize={'xs'} color={'#00b5ff'}>Selengkapnya</Link>
                        </Box>
                    </Box>
                </GridItem>

                {/* Recently Subscribers */}
                <GridItem w={'100%'} colSpan={3}>
                    <Box bg={'white'} boxShadow={'md'} rounded={10} p={3} h={'390px'}>
                        <TableContainer>
                            <Table variant='simple'>
                                <TableCaption>Imperial to metric conversion factors</TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>To convert</Th>
                                        <Th>into</Th>
                                        <Th isNumeric>multiply by</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td isNumeric>25.4</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>feet</Td>
                                        <Td>centimetres (cm)</Td>
                                        <Td isNumeric>30.48</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>yards</Td>
                                        <Td>metres (m)</Td>
                                        <Td isNumeric>0.91444</Td>
                                    </Tr>
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th>To convert</Th>
                                        <Th>into</Th>
                                        <Th isNumeric>multiply by</Th>
                                    </Tr>
                                </Tfoot>
                            </Table>
                        </TableContainer>
                    </Box>
                </GridItem>

                {/* Data Growing */}
                <GridItem w='100%' colSpan={3}>
                    <Box bg={'white'} boxShadow={'md'} rounded={10} p={3} h={'390px'}>

                        <NewsEvents />
                    </Box>
                </GridItem>
            </Grid>

        </>
    )
}
