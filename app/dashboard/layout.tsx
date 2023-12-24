import React from 'react'
import ApexCharts from 'apexcharts'
import Navbar from '@/components/navbar/admin/Navbar'
import AsideMenu from '@/components/aside/AsideMenu'
import Footer from '@/components/footer/admin/Footer'
import { Button, ButtonGroup, Box, Text, Flex, Center, Square, Spacer, Link } from '@chakra-ui/react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar position={'fixed'} />
            <AsideMenu />
            <Box ps={'220px'} pt={'80px'} bg={'#F5F8FA'}>
                <Box px={'70px'} py={'50px'}>
                    {children}
                </Box>
            </Box>
            <Footer />
        </>
    )
}
