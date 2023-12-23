import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Flex, Spacer, Link, Box } from '@chakra-ui/react'
import CommunityImg from '@/public/img/ilustration/home-community.jpg';
import NextLink from 'next/link';
import { FaBookmark } from "react-icons/fa6";

export default function EventsCard() {
    return (
        <>
            <Card p={'20px 20px'}>
                <Flex>
                    <div>

                        {/* Title Event */}
                        <Link as={NextLink} href='/wow' _hover={{ textDecoration: 'none' }}>
                            <Text color={'grey'}>12 Desember 2023</Text>
                            <Text fontSize={'md'} mt={3} fontWeight={'semibold'}>Yoga Mengenal Jenis-Jenis Yoga dan Manfaatnya Bagi Kesehatan</Text>
                        </Link>

                        {/* Daftar Event Button */}
                        <Box mt={3}>
                            <form action="/huf" method='get'>
                                <Button type='submit' bgColor={'#fba600'} color={'white'} _hover={{ backgroundColor: '#e09502' }}>
                                    <Text mr={2}><FaBookmark /></Text>
                                    Daftar Event
                                </Button>
                            </form>
                        </Box>
                    </div>
                    <Spacer />

                    {/* Thumbnail */}
                    <Image src={CommunityImg.src} alt='thumbnail' w={'150px'} rounded={10} objectFit={'cover'}></Image>
                </Flex>
            </Card>
        </>
    )
}
