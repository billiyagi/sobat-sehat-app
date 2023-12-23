import React from 'react'
import { Button, ButtonGroup, Box, Text, Flex, Center, Square, Spacer, Link, Image } from '@chakra-ui/react'
import FeaturedEventImage from '@/public/img/ilustration/example-featured-event.jpg';
import { IoMdPin } from "react-icons/io";

export default function FeaturedEventCard() {
    return (
        <Link href='/test'>
            <Box position={'relative'} rounded={20} overflow={'hidden'}>

                {/* Thumbnail Image */}
                <Image src={FeaturedEventImage.src} alt='Thumbnail Featured Event' h={'500px'} w='100%' objectFit={'cover'}></Image>
                <Box bgGradient={'linear(to-t, black 2%, transparent, transparent, transparent)'} h={'100%'} w={'100%'} position={'absolute'} top={0} left={0}></Box>

                {/* Title Events */}
                <Box position={'absolute'} bottom={0} left={0} color={'white'} py={7} px={5} zIndex={2} w={'70%'}>
                    <Flex>
                        <Center>
                            <Text color={'#ef3a2d'} mr={2}><IoMdPin /></Text>
                            <Text>Stadion Pakansari</Text>
                        </Center>
                    </Flex>
                    <Text fontSize={'3xl'} fontWeight={'bold'} >Yoga Mengenal Jenis-Jenis Yoga dan Manfaatnya Bagi Kesehatan</Text>
                </Box>
            </Box>
        </Link>
    )
}
