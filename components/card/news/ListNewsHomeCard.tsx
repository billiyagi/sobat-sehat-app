"use client"
import React, { useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import NewsHorizontalCard from './NewsHorizontalCard'
import axios from 'axios'

export default function ListNewsHomeCard() {
    const [news, setNews] = React.useState([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/news-recently`)
            .then((res) => {
                // slice array to 2
                res.data.data = res.data.data.slice(0, 4);
                setNews(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={6} mt={20}>
            {
                news.map((item, index) => {
                    return (
                        <NewsHorizontalCard key={index} news={item} />
                    )
                })
            }
        </Grid>
    )
}
