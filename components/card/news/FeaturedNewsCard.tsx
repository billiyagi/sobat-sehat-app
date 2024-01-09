import React from 'react'
import { Link, Card, Image, Flex, Box, Text, Avatar, Center } from '@chakra-ui/react'
import NextLink from 'next/link'
import { BsDot } from "react-icons/bs";

export default async function FeaturedNewsCard(params: { news: any }) {

    // Remove HTML Tags
    let newsContent = params.news.content.replace(/<[^>]*>/g, '');
    return (
        <Link as={NextLink} href={`/news/${params.news.slug}`} textDecoration={'none'} _hover={{ textDecoration: 'none' }}>
            <Card shadow={'none'}>
                <Flex>
                    <Center>
                        {/* Featured Thumbnail */}
                        <Image src={`${process.env.NEXT_PUBLIC_URL}/storage${params.news.thumbnail}`} alt='Thumbnail Featured News' h={'350px'} w='60%' objectFit={'cover'} rounded={20}></Image>

                        <Box ms={10} w={'40%'}>

                            {/* Author */}
                            <Flex>
                                <Center>
                                    <Avatar name={params.news.author.name} w={'35px'} h={'35px'} mr={3} />
                                    <Text fontWeight={'semibold'}>
                                        {params.news.author.name}
                                    </Text>
                                </Center>
                            </Flex>

                            {/* Title & Content */}
                            <Text fontSize={'2xl'} fontWeight={'bold'} my={3}>{params.news.title}</Text>

                            <Text>{newsContent.substr(1, 250)}</Text>

                            {/* Times and Category */}
                            <Flex mt={5}>
                                <Center>
                                    <Text color={'#fba600'} fontWeight={'semibold'}>{params.news.category.name}</Text>
                                    <BsDot />
                                    <Text>{params.news.created_at}</Text>
                                </Center>
                            </Flex>
                        </Box>
                    </Center>
                </Flex>
            </Card>
        </Link>
    )
}
