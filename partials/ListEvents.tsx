import React from 'react'
import { Grid, GridItem, Box } from '@chakra-ui/react'
import EventsCard from '@/components/card/events/EventsCard'
import { useEffect, useState } from 'react'
import { getCookie } from 'typescript-cookie'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { cookies } from 'next/headers'

export default async function ListEvents(params: { events: any }) {
    const token: any = cookies().get('token');
    const user: any = token ? jwtDecode(token.value) : {};

    return (
        <>
            <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                {params.events.map((event: any, index: any) => (
                    <Box key={index}>
                        <EventsCard name={event.name} date={event.created_at} slug={event.slug} thumbnail={event.thumbnail} userId={user.id} eventId={event.id} />
                    </Box>
                ))}
            </Grid>
        </>
    )
}
