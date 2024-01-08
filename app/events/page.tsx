import React from 'react'
import FeaturedEventCard from '@/components/card/events/FeaturedEventCard'
import { Text, Grid, Box } from '@chakra-ui/react'
import EventsCard from '@/components/card/events/EventsCard';
import ListEvents from '@/partials/ListEvents';
import axios from 'axios';

export default async function Events() {
    const getEvents = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events`);
    const getFeaturedEvents = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events/on/featured`);

    const featuredEvents = getFeaturedEvents.data.data[0];
    const events = getEvents.data.data;
    return (
        <>
            <FeaturedEventCard thumbnail={featuredEvents.thumbnail} title={featuredEvents.name} location={featuredEvents.location_at} />

            <Text fontSize={'2xl'} fontWeight={'bold'} my={10}>Jadwal Lainnya</Text>
            <ListEvents events={events} />
        </>
    )
}
