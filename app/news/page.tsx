import React from 'react'
import FeaturedNewsCard from '@/components/card/news/FeaturedNewsCard'
import NewsVerticalCard from '@/components/card/news/NewsVerticalCard'
import { Text, Grid } from '@chakra-ui/react'

export default function News() {
    return (
        <>
            <FeaturedNewsCard />

            <Text my={'50px'} fontWeight={'semibold'} fontSize={'2xl'}>Berita Terbaru</Text>
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
