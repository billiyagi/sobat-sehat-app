import React from 'react'
import FeaturedNewsCard from '@/components/card/news/FeaturedNewsCard'
import NewsVerticalCard from '@/components/card/news/NewsVerticalCard'
import { Text, Grid, Divider, Flex, Center } from '@chakra-ui/react'

export default function News() {
    return (
        <>
            <FeaturedNewsCard />

            <Flex>

                <Center w={'100%'} >
                    <Text my={'50px'} fontWeight={'semibold'} fontSize={'2xl'} w={'200px'}>Berita Terbaru</Text>
                    <Divider orientation='horizontal' />
                </Center>
            </Flex>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                <NewsVerticalCard />
                <NewsVerticalCard />
                <NewsVerticalCard />
                <NewsVerticalCard />
                <NewsVerticalCard />
            </Grid>
        </>
    )
}
