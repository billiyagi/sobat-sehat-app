import React from 'react'
import { Text, Grid, Box, Image, GridItem, Badge, Link } from '@chakra-ui/react'
import NextLink from 'next/link';

export default function CategoryNewsCard() {
    return (
        <>
            <Text fontWeight={'bold'} fontSize={'2xl'}>Kategori</Text>
            <Box mt={5} bgColor={'#EFEFEF'} px={5} py={3} rounded={'lg'}>
                <Link as={NextLink} href="/news/category/nasional">
                    <Text fontWeight={'semibold'} mb={3}>
                        Nasional
                    </Text>
                </Link>
                <Link as={NextLink} href="/news/category/iptek">
                    <Text fontWeight={'semibold'} mb={3}>
                        IPTEK
                    </Text>
                </Link>
                <Link as={NextLink} href="/news/category/humoniora">
                    <Text fontWeight={'semibold'} mb={3}>
                        Humoniora
                    </Text>
                </Link>
            </Box>
        </>
    )
}
