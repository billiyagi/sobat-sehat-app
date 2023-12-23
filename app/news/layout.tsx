import React from 'react'
import Navbar from '@/components/navbar/app/Navbar';
import Footer from '@/components/footer/app/Footer';
import { Button, ButtonGroup, Box, Text, Flex, Center, Square, Spacer, Link } from '@chakra-ui/react'

export default function EventsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar position='fixed' />
            <Box pt={'150px'} pb={20} px={'60px'}>
                {children}
            </Box>
            <Footer />
        </>
    )
}
