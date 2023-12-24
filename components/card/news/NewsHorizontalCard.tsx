import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Flex, Spacer, Link, Box } from '@chakra-ui/react'
import CommunityImg from '@/public/img/ilustration/home-community.jpg';
import NextLink from 'next/link';

export default function NewsHorizontalCard() {
    return (
        <>
            <Card p={'20px 30px'}>
                <Flex>
                    <Box>
                        <Text color={'grey'}>12 Desember 2023</Text>
                        <Text fontSize={'md'} mt={3} fontWeight={'semibold'}>Yoga Mengenal Jenis-Jenis Yoga dan Manfaatnya Bagi Kesehatan</Text>
                        <Link as={NextLink} href='/news/1' fontSize={'sm'} color={'#71B8FF'} _hover={{ textDecoration: 'none', color: '#166DC4' }}>Selengkapnya</Link>
                    </Box>
                    <Spacer />
                    <Image src={CommunityImg.src} alt='thumbnail' w={'150px'} rounded={10}></Image>
                </Flex>
            </Card>
        </>
    )
}
