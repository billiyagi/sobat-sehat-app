import React from 'react'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false, loading: () => <p>Loading...</p> });
import { Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export default function PieChartNewsEvents(params: { news: number, events: number }) {
    const data: any = {
        series: [params.news, params.events],
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
            {/* <Chart options={data.options} series={data.series} type="pie" width={'100%'} height={'90%'}></Chart> */}
        </>
    )
}
