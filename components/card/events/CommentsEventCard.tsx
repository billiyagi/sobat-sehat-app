import React from 'react'
import { Text, Grid, Box, Image, GridItem, Card, Link, Flex, Center, Avatar, Input, Button } from '@chakra-ui/react'
import { BsDot } from "react-icons/bs";
import { IoMdPin } from "react-icons/io";
import { IoSend } from "react-icons/io5";

export default function CommentsEventCard() {
    return (
        <Card bgColor={'#efefef'} height={'500px'} position={'relative'} overflow={'hidden'}>
            <Box px={5} py={5}>
                {/* Comment */}
                <Box mb={5}>
                    <Flex>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' h={10} w={10} />
                        <Box ml={3}>
                            <Text fontWeight={'bold'}>Dan Abrahmov</Text>
                            <Text fontSize={'sm'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</Text>

                            {/* Reply */}
                            <Text mt={3} fontSize={'sm'} fontWeight={'semibold'}>Balas</Text>
                        </Box>
                    </Flex>
                </Box>

            </Box>
            <Box position={'absolute'} bottom={0} left={0} px={5} py={3} bg={'white'} w={'100%'}>
                <Flex>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' h={10} w={10} />
                    <Input placeholder='Ketik komentar' size='md' mx={2} />
                    <Button colorScheme='blue'>
                        <IoSend />
                    </Button>
                </Flex>
            </Box>

        </Card>
    )
}
