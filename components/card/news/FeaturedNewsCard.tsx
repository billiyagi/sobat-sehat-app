import React from 'react'
import { Link, Card, Image, Flex, Box, Text, Avatar, Center } from '@chakra-ui/react'
import NextLink from 'next/link'
import { BsDot } from "react-icons/bs";

export default function FeaturedNewsCard() {
    return (
        <Link as={NextLink} href='/' textDecoration={'none'} _hover={{ textDecoration: 'none' }}>
            <Card shadow={'none'}>
                <Flex>
                    <Center>
                        {/* Featured Thumbnail */}
                        <Image src='https://picsum.photos/500/300' alt='Thumbnail Featured News' h={'350px'} w='60%' objectFit={'cover'} rounded={20}></Image>

                        <Box ms={10} w={'40%'}>

                            {/* Author */}
                            <Flex>
                                <Center>
                                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' w={'35px'} h={'35px'} mr={3} />
                                    <Text fontWeight={'semibold'}>
                                        Jhon Doe
                                    </Text>
                                </Center>
                            </Flex>

                            {/* Title & Content */}
                            <Text fontSize={'2xl'} fontWeight={'bold'} my={3}>Mengenal Jenis-Jenis Yoga dan Manfaatnya Bagi Kesehatan</Text>
                            <Text>
                                Yoga adalah salah satu jenis olahraga yang pamornya terus menanjak di mata publik dalam beberapa tahun belakangan. Tapi, apakah Anda tahu seperti apa sejarahnya dan apa saja manfaat yoga untuk kesehatan? ...
                            </Text>

                            {/* Times and Category */}
                            <Flex mt={5}>
                                <Center>
                                    <Text color={'#fba600'} fontWeight={'semibold'}>International</Text>
                                    <BsDot />
                                    <Text>12 Menit yang lalu</Text>
                                </Center>
                            </Flex>
                        </Box>
                    </Center>
                </Flex>
            </Card>
        </Link>
    )
}
