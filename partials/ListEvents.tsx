import React from 'react'
import { Grid, GridItem, Box } from '@chakra-ui/react'
import EventsCard from '@/components/card/events/EventsCard'

export default function ListEvents(params: { events: any }) {
    return (
        <>
            <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                {params.events.map((event: any, index: any) => (
                    <Box key={index}>
                        <EventsCard name={event.name} date={event.created_at} slug={event.slug} thumbnail={event.thumbnail} />
                    </Box>
                ))}
            </Grid>
        </>
    )
}
