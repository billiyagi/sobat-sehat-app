import React from 'react'
import FeaturedNewsCard from '@/components/card/news/FeaturedNewsCard'
import { Text, Grid, Divider, Flex, Center } from '@chakra-ui/react'
import ListNews from '@/partials/ListNews'
import { cookies } from 'next/headers'
import NewsVerticalCard from '@/components/card/news/NewsVerticalCard'
import axios from 'axios'

export default async function News() {
    const getNews = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/news`);
    const getFeaturedEvents = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/news/on/featured`);
    return (
        <>
            <FeaturedNewsCard news={getFeaturedEvents.data.data[0]} />

            <Flex>

                <Center w={'100%'} >
                    <Text my={'50px'} fontWeight={'semibold'} fontSize={'2xl'} w={'200px'}>Berita Terbaru</Text>
                    <Divider orientation='horizontal' />
                </Center>
            </Flex>
            <ListNews dataNews={getNews.data.data} />

        </>
    )
}
