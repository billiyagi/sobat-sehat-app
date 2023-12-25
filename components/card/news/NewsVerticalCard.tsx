import React from 'react'
import { Link, Card, Image, Flex, Box, Text, Avatar, Center } from '@chakra-ui/react'
import NextLink from 'next/link'
import { BsDot } from "react-icons/bs";

export default function NewsVerticalCard(params: { slug: string, thumbnail: string, author: any, category: any, title: string, content: string, published: string }) {
    return (
        <Link as={NextLink} href={`/news/${params.slug}`} _hover={{ textDecoration: 'none' }} mb={8}>
            <Card shadow={'none'}>
                {/* Thumbnail */}
                <Image src={`${process.env.NEXT_PUBLIC_URL}/storage${params.thumbnail}`} alt='Thumbnail Featured News' h={'250px'} w='100%' objectFit={'cover'} rounded={20}></Image>

                {/* Author */}
                <Flex my={4}>
                    <Center>
                        <Avatar name='Dan Abrahmov' src='' w={'35px'} h={'35px'} mr={3} />
                        <Text>
                            {params.author.name}
                        </Text>
                        <Text mx={1}>
                            <BsDot />
                        </Text>
                        <Text fontWeight={'semibold'} color={'#fba600'}>{params.category.name}</Text>
                    </Center>
                </Flex>

                <Text fontWeight={'semibold'} fontSize={'lg'}>
                    {params.title}
                </Text>
                <Text fontSize={'sm'} my={3}>
                    Yoga adalah salah satu jenis olahraga yang pamornya terus menanjak di mata publik dalam beberapa tahun belakangan. Tapi, apakah Anda tahu sepert? ...
                </Text>

                <Text fontSize={'xs'} color={'gray'}>
                    {params.published}
                </Text>
            </Card>
        </Link>
    )
}
