"use client"

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false, loading: () => <p>Loading...</p> });
import { Text } from "@chakra-ui/react";
export default function NewsEvents() {
    const data: any = {
        series: [44, 55],
        options: {
            labels: ['News', 'Events'],
            chart: {
                width: 380,
                type: 'pie',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]

        },

    };


    return (
        <>
            <Text fontWeight={'bold'}>News VS Events</Text>
            <Chart options={data.options} series={data.series} type="pie" width={'100%'} height={'90%'}></Chart>
        </>
    )
}
