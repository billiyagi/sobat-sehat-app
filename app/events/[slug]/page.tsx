import React from 'react'
import { Text, Grid, Box, Image, GridItem, Card, Link, Flex, Center, Avatar, Input, Button, Heading } from '@chakra-ui/react'
import { IoMdPin } from "react-icons/io";
import CommentsEventCard from '@/components/card/events/CommentsEventCard';
import axios from 'axios';
import NextLink from 'next/link';
import { cookies } from 'next/headers'

export default async function Page({ params }: { params: { slug: string } }) {
    const getEvents = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events/show/${params.slug}`);

    const token: any = cookies().get('token');
    const getUser = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {}, {
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    })
    const events = getEvents.data.data;

    return (
        <>
            <Box position={'relative'} rounded={20} overflow={'hidden'} mb={10}>

                {/* Thumbnail Image */}
                <Image src={`${process.env.NEXT_PUBLIC_URL}/storage${events.thumbnail}`} alt={`Thumbnail Event of ${events.name}`} h={'500px'} w='100%' objectFit={'cover'}></Image>
                <Box bgGradient={'linear(to-t, black 2%, transparent, transparent, transparent)'} h={'100%'} w={'100%'} position={'absolute'} top={0} left={0}></Box>

                {/* Title Events */}
                <Box position={'absolute'} bottom={0} left={0} color={'white'} py={7} px={5} zIndex={2} w={'70%'}>
                    <Flex>
                        <Center>
                            <Text color={'#ef3a2d'} mr={2}><IoMdPin /></Text>
                            <Link as={NextLink} href={events.link_location}>{events.location_at}</Link>
                        </Center>
                    </Flex>
                    <Heading fontSize={'3xl'} fontWeight={'bold'} >{events.name}</Heading>
                </Box>
            </Box>

            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <GridItem w='100%' colSpan={2}>
                    <Box>
                        {events.description}
                    </Box>
                </GridItem>
                <GridItem w='100%' colSpan={1}>
                    <CommentsEventCard user={getUser.data.user} />
                </GridItem>
            </Grid>
        </>
    )
}
