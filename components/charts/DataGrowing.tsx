"use client"

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false, loading: () => <p>Loading...</p> });

export default function DataGrowing() {
    const data: any = {
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
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
            }
        },
    };


    return (
        <>
            <Chart options={data.options} series={data.series} type="area" width={'100%'} height={'100%'}></Chart>
        </>
    )
}
