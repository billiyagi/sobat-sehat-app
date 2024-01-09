import React, { useEffect } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import NewsVerticalCard from '@/components/card/news/NewsVerticalCard'
import axios from 'axios'
import { useState } from 'react'
import { getCookie } from 'typescript-cookie'

export default async function ListNews(params: { dataNews: any }) {

    return (
        <>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                {params.dataNews.map((item: any, index: any) => (
                    <GridItem key={index}>
                        <NewsVerticalCard title={item.title} slug={item.slug} thumbnail={item.thumbnail} author={item.author} category={item.category} content={item.content} published={item.created_at} />
                    </GridItem>
                ))}
            </Grid>
        </>
    )
}
