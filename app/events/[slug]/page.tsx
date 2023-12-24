import React from 'react'
import { Text, Grid, Box, Image, GridItem, Card, Link, Flex, Center, Avatar, Input, Button } from '@chakra-ui/react'
import { IoMdPin } from "react-icons/io";
import CommentsEventCard from '@/components/card/events/CommentsEventCard';

export default function Page() {
    return (
        <>
            <Box position={'relative'} rounded={20} overflow={'hidden'} mb={10}>

                {/* Thumbnail Image */}
                <Image src={'https://picsum.photos/500/300'} alt='Thumbnail Featured Event' h={'500px'} w='100%' objectFit={'cover'}></Image>
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

            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <GridItem w='100%' colSpan={2}>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur rerum eveniet vero consectetur tempore accusamus aut, voluptas molestias, quasi incidunt eaque soluta esse blanditiis nemo a quam laborum? Sit?
                        Qui quasi nemo, mollitia molestias sint iste. Praesentium, quas. At illo aliquam, modi molestias ipsum laboriosam voluptates eum quo qui vitae debitis eius hic vel ut necessitatibus minima sed reiciendis?
                        Est modi laboriosam voluptates dolore quia quo animi distinctio, harum illum impedit odit suscipit fuga ducimus ipsam iusto? Culpa, dolore aliquid ea sapiente reiciendis enim pariatur quibusdam iure necessitatibus nam!</Text>
                </GridItem>
                <GridItem w='100%' colSpan={1}>
                    <CommentsEventCard />
                </GridItem>
            </Grid>
        </>
    )
}
