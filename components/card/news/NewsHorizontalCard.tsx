import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Flex, Spacer, Link, Box } from '@chakra-ui/react'
import CommunityImg from '@/public/img/ilustration/home-community.jpg';
import NextLink from 'next/link';

export default function NewsHorizontalCard(params: { news: any }) {
    return (
        <>
            <Card p={'20px 30px'}>
                <Flex>
                    <Box>
                        <Text color={'grey'}>{params.news.created_at}</Text>
                        <Text fontSize={'md'} mt={3} fontWeight={'semibold'}>{params.news.title}</Text>
                        <Link as={NextLink} href={`/news/${params.news.slug}`} fontSize={'sm'} color={'#71B8FF'} _hover={{ textDecoration: 'none', color: '#166DC4' }}>Selengkapnya</Link>
                    </Box>
                    <Spacer />
                    <Image src={`${process.env.NEXT_PUBLIC_URL}/storage${params.news.thumbnail}`} alt='thumbnail' w={'150px'} rounded={10}></Image>
                </Flex>
            </Card>
        </>
    )
}
