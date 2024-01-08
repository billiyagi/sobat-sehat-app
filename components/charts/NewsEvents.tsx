"use client"

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false, loading: () => <p>Loading...</p> });
import { Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import PieChartNewsEvents from "./PieChartNewsEvents";

export default function NewsEvents(params: { token: any }) {

    const toast = useToast();
    const [news, setNews]: any = useState(50);
    const [events, setEvents]: any = useState(30);

    useEffect(() => {
        // Get events total data
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/analytics/events`, {
            headers: {
                Authorization: `Bearer ${params.token.value}`
            }
        }).then(response => {
            setEvents(response.data.data);
        }).catch(error => {
            toast({
                title: 'Terjadi kesalahan',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        })

        // Get news total data
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/analytics/news`, {
            headers: {
                Authorization: `Bearer ${params.token.value}`
            }
        }).then(response => {
            setNews(response.data.data);
        }).catch(error => {
            toast({
                title: 'Terjadi kesalahan',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        })
    }, [toast, params])




    return (
        <>
            <Text fontWeight={'bold'}>News VS Events</Text>
            {news != 0 && events != 0 ? <PieChartNewsEvents news={news.total_news} events={events.total_events} /> : <></>}
        </>
    )
}
