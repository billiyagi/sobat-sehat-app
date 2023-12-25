import React from 'react'
import { Text, Grid, Box, Image, GridItem, Badge, Link } from '@chakra-ui/react'
import NextLink from 'next/link';

export default function CategoryNewsCard(params: { categories: any }) {
    const categories = params.categories.data.data;
    return (
        <>
            <Text fontWeight={'bold'} fontSize={'2xl'}>Kategori</Text>
            <Box mt={5} bgColor={'#EFEFEF'} px={5} py={3} rounded={'lg'}>
                {categories.map((category: any, index: any) => (
                    <Link as={NextLink} href="/news/category/nasional" key={index}>
                        <Text fontWeight={'semibold'} mb={3}>
                            {category.name}
                        </Text>
                    </Link>
                ))}
            </Box>
        </>
    )
}
