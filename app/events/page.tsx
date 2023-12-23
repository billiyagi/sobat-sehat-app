import React from 'react'
import FeaturedEventCard from '@/components/card/events/FeaturedEventCard'
import { Text, Grid } from '@chakra-ui/react'
import EventsCard from '@/components/card/events/EventsCard';

export default function Events() {
    return (
        <>
            <FeaturedEventCard />

            <Text fontSize={'2xl'} fontWeight={'bold'} my={10}>Jadwal Lainnya</Text>
            <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
            </Grid>
        </>
    )
}
