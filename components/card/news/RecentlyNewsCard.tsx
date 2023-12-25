import React from 'react'
import { Text, Grid, Box, Image, GridItem, Badge, Flex, Center, Card, Link } from '@chakra-ui/react'
import { FaDotCircle } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import NextLink from 'next/link';


export default function RecentlyNewsCard(params: { recentlyNews: any }) {

    const recentlyNews = params.recentlyNews.data.data;
    return (
        <>
            <Box>
                <Flex mb={6}>
                    <Center>
                        <Box color={'#fba600'} mr={3}>
                            <FaDotCircle />
                        </Box>
                        <Text fontWeight={'bold'} fontSize={'2xl'}>Berita Terkini</Text>
                    </Center>
                </Flex>

                {/* List Recently News */}
                {recentlyNews.map((news: any, index: any) => (
                    <Box mt={10} key={index}>
                        {/* Badge Category */}
                        <Badge color={'white'} px={3} py={1} rounded={20} bgColor={'#fba600'} fontSize={'10px'}>{news.category.name}</Badge>

                        {/* Title news */}
                        <Box>
                            <Link href='/' as={NextLink} fontSize={'sm'} fontWeight={'semibold'} my={3}>{news.title}</Link>
                        </Box>

                        {/* Author and published_at */}
                        <Flex fontSize={'10px'} color={'#7f858f'}>
                            <Center>
                                <Text>{news.author.name}</Text>
                                <BsDot />
                                <Text>{news.created_at}</Text>
                            </Center>
                        </Flex>
                    </Box>

                ))}
            </Box>
        </>
    )
}
