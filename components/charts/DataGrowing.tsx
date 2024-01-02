"use client"

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false, loading: () => <p>Loading...</p> });
import { Text } from "@chakra-ui/react";
export default function DataGrowing() {
    const data: any = {
        series: [{
            name: 'series1',
            data: [0, 40, 28, 51, 42, 109, 100, 100, 100, 100, 100, 100],
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41, 100, 100, 100, 100, 100]
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
