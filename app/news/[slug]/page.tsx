import React from 'react'
import { Text, Grid, Box, Image, GridItem, Badge } from '@chakra-ui/react'
import CategoryNewsCard from '@/components/card/news/CategoryNewsCard'
import RecentlyNewsCard from '@/components/card/news/RecentlyNewsCard'
import axios from 'axios'

export default async function Page({ params }: { params: { slug: string } }) {
    const getNews = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/news/show/${params.slug}`);
    const getRecentlyNews = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/news?limit=5`);
    const getCategories = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    const news = getNews.data.data;
    return (
        <>
            {/* <div>My Post: {params.slug}</div> */}
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>

                {/* Daftar Kategori */}
                <GridItem w='100%'>
                    <CategoryNewsCard categories={getCategories} />
                </GridItem>

                <GridItem colSpan={3} w='100%' h='auto'>
                    <Box rounded={20} overflow={'hidden'}>
                        {/* Thumbnail */}
                        <Image src={`${process.env.NEXT_PUBLIC_URL}/storage${news.thumbnail}`} alt='Thumbnail Events' h={'500px'} w='100%' objectFit={'cover'}></Image>
                    </Box>

                    {/* Badge Category */}
                    <Box mt={10}>
                        <Badge color={'white'} px={5} py={1} rounded={20} bgColor={'#fba600'}>{news.category.name}</Badge>
                        <Text fontSize={'4xl'} fontWeight={'semibold'} mt={3}>{news.title}</Text>
                    </Box>

                    {/* Konten News */}
                    <Box my={7}>
                        <div dangerouslySetInnerHTML={{ __html: news.content }} />
                    </Box>
                </GridItem>

                {/* Detail News */}
                <GridItem w='100%'>
                    <RecentlyNewsCard recentlyNews={getRecentlyNews} />
                </GridItem>
            </Grid>
        </>
    )
}