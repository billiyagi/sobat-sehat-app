"use client"
import React from 'react'
import { Grid, GridItem, Box } from '@chakra-ui/react'
import EventsCard from '@/components/card/events/EventsCard'
import { useEffect, useState } from 'react'
import { getCookie } from 'typescript-cookie'
import axios from 'axios'

export default function ListEvents(params: { events: any }) {
    const [token, setToken]: any = useState(false);
    const [user, setUser]: any = useState({});

    useEffect(() => {
        setToken(getCookie('token'));

        if (token) {
            axios({
                method: 'post',
                url: `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response: any) => {
                setUser(response.data.user);

            }).catch((error) => {
                console.log(error);
            });
        }
    }, [token]);


    return (
        <>
            <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                {params.events.map((event: any, index: any) => (
                    <Box key={index}>
                        <EventsCard name={event.name} date={event.created_at} slug={event.slug} thumbnail={event.thumbnail} userId={user.id} eventId={event.id} token={token} />
                    </Box>
                ))}
            </Grid>
        </>
    )
}
