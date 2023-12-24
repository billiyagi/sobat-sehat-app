import React from 'react'
import { Text, Grid, Box, Image, GridItem, Badge, Flex, Center, Card } from '@chakra-ui/react'
import { FaDotCircle } from "react-icons/fa";
import { BsDot } from "react-icons/bs";


export default function RecentlyNewsCard() {
    return (
        <>
            <Box>
                <Flex mb={6}>
                    <Center>
                        <Box color={'#fba600'} mr={3}>
                            <FaDotCircle />
                        </Box>
                        <Text fontWeight={'bold'} fontSize={'2xl'}>Berita Terkini</Text>
                    </Center>
                </Flex>


                <Box mt={10}>
                    {/* Badge Category */}
                    <Badge color={'white'} px={3} py={1} rounded={20} bgColor={'#fba600'} fontSize={'10px'}>Komunitas</Badge>

                    {/* Title news */}
                    <Text fontSize={'sm'} fontWeight={'semibold'} my={3}>Mengenal Jenis-Jenis Yoga dan Manfaatnya Bagi Kesehatan</Text>

                    {/* Author and published_at */}
                    <Flex fontSize={'10px'} color={'#7f858f'}>
                        <Center>
                            <Text>Dini Nurhadi Yashi</Text>
                            <BsDot />
                            <Text>21 Sep 2023</Text>
                        </Center>
                    </Flex>
                </Box>
                <Box mt={10}>
                    {/* Badge Category */}
                    <Badge color={'white'} px={3} py={1} rounded={20} bgColor={'#fba600'} fontSize={'10px'}>Komunitas</Badge>

                    {/* Title news */}
                    <Text fontSize={'sm'} fontWeight={'semibold'} my={3}>Mengenal Jenis-Jenis Yoga dan Manfaatnya Bagi Kesehatan</Text>

                    {/* Author and published_at */}
                    <Flex fontSize={'10px'} color={'#7f858f'}>
                        <Center>
                            <Text>Dini Nurhadi Yashi</Text>
                            <BsDot />
                            <Text>21 Sep 2023</Text>
                        </Center>
                    </Flex>
                </Box>
                <Box mt={10}>
                    {/* Badge Category */}
                    <Badge color={'white'} px={3} py={1} rounded={20} bgColor={'#fba600'} fontSize={'10px'}>Komunitas</Badge>

                    {/* Title news */}
                    <Text fontSize={'sm'} fontWeight={'semibold'} my={3}>Mengenal Jenis-Jenis Yoga dan Manfaatnya Bagi Kesehatan</Text>

                    {/* Author and published_at */}
                    <Flex fontSize={'10px'} color={'#7f858f'}>
                        <Center>
                            <Text>Dini Nurhadi Yashi</Text>
                            <BsDot />
                            <Text>21 Sep 2023</Text>
                        </Center>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}
