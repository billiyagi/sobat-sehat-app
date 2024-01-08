"use client"

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false, loading: () => <p>Loading...</p> });
import { Text } from "@chakra-ui/react";
export default function DataGrowing() {
    const data: any = {
        series: [{
            name: 'News',
            data: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        }, {
            name: 'Events',
            data: [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'month',
                categories: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
            },
        },
    };


    return (
        <>
            <Text fontWeight={'bold'}>Data Growing</Text>
            <Chart options={data.options} series={data.series} type="area" width={'100%'} height={'90%'}></Chart>
        </>
    )
}
