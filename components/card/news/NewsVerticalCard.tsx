import React from 'react'
import { Link, Card, Image, Flex, Box, Text, Avatar, Center } from '@chakra-ui/react'
import NextLink from 'next/link'
import { BsDot } from "react-icons/bs";

export default function NewsVerticalCard() {
    return (
        <Link as={NextLink} href='/' _hover={{ textDecoration: 'none' }} mb={8}>
            <Card shadow={'none'}>
                {/* Thumbnail */}
                <Image src='https://picsum.photos/500/300' alt='Thumbnail Featured News' h={'250px'} w='100%' objectFit={'cover'} rounded={20}></Image>

                {/* Author */}
                <Flex my={4}>
                    <Center>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' w={'35px'} h={'35px'} mr={3} />
                        <Text>
                            Jhon Doe
                        </Text>
                        <Text mx={1}>
                            <BsDot />
                        </Text>
                        <Text fontWeight={'semibold'} color={'#fba600'}>International</Text>
                    </Center>
                </Flex>

                <Text fontWeight={'semibold'} fontSize={'lg'}>
                    Mengenal Jenis-Jenis Yoga dan Manfaatnya Bagi Kesehatan
                </Text>
                <Text fontSize={'sm'} my={3}>
                    Yoga adalah salah satu jenis olahraga yang pamornya terus menanjak di mata publik dalam beberapa tahun belakangan. Tapi, apakah Anda tahu sepert? ...
                </Text>

                <Text fontSize={'xs'} color={'gray'}>
                    Dipublish 12 Menit yang lalu
                </Text>
            </Card>
        </Link>
    )
}
