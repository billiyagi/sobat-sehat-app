import { Box, Grid, GridItem, Image, Text, Input, Button, Flex, Spacer } from '@chakra-ui/react'
import SobatSehatLogo from '@/public/img/logo/Sobat-Sehat-Horizontal.svg'
import SobatSehatDarkLogo from '@/public/img/logo/Sobat-Sehat-Dark-Horizontal.svg'
import React from 'react'

export default function Footer() {
    return (
        <Box borderTop={'1px solid #ddd'} py={10} px={10}>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <GridItem colSpan={2} w='100%' paddingRight={20}>
                    <Image src={SobatSehatDarkLogo.src} alt='Sobat Sehat Logo' w={'200px'}></Image>
                    <Text fontSize={'sm'} mt={5}>
                        Pengguna dapat dengan mudah menjadwalkan, mencari, dan berpartisipasi dalam kegiatan olahraga rekreasi yang sesuai dengan minat dan preferensi mereka.
                    </Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Grid templateColumns='repeat(3, 1fr)'>
                        <GridItem w='100%'>
                            <Text fontSize={'lg'} fontWeight={'bold'} mb={5}>Links</Text>
                            <Text fontSize={'sm'} mb={2}>Home</Text>
                            <Text fontSize={'sm'} mb={2}>Jadwal</Text>
                            <Text fontSize={'sm'} mb={2}>Berita</Text>
                        </GridItem>
                        <GridItem w='100%'>
                            <Text fontSize={'lg'} fontWeight={'bold'} mb={5}>Legal</Text>
                            <Text fontSize={'sm'} mb={2}>Term of Use</Text>
                            <Text fontSize={'sm'} mb={2}>Privacy Policy</Text>
                            <Text fontSize={'sm'} mb={2}>Cookie Policy</Text>
                        </GridItem>
                        <GridItem w='100%'>
                            <Text fontSize={'lg'} fontWeight={'bold'} mb={5}>Company</Text>
                            <Text fontSize={'sm'} mb={2}>About Us</Text>
                            <Text fontSize={'sm'} mb={2}>Contact</Text>
                            <Text fontSize={'sm'} mb={2}>Jobs</Text>
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem>
                    <Text fontSize={'lg'} mb={5}>Langganan Informasi Kegiatan</Text>
                    <form action="/subcribe" method='get'>
                        <Input placeholder='Your email' size='md' />
                        <Flex>
                            <Spacer />
                            <Button type='submit' name='subcribe' colorScheme='red' mt={3}>Subscribe</Button>
                        </Flex>
                    </form>

                </GridItem>

            </Grid>
        </Box>
    )
}
