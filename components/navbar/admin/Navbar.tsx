import React from 'react'
import SobatSehatLogo from '@/public/img/logo/Sobat-Sehat-Horizontal.svg'
import SobatSehatDarkLogo from '@/public/img/logo/Sobat-Sehat-Dark-Horizontal.svg'
import { Image, ResponsiveValue } from '@chakra-ui/react';
import { Button, ButtonGroup, Box, Text, Flex, Center, Square, Spacer, Link, Menu, MenuButton, MenuList, MenuItem, Avatar, AvatarBadge } from '@chakra-ui/react'
import NextLink from 'next/link';
import { LuDot } from "react-icons/lu";


export default function Navbar(params:
    { position: ResponsiveValue<'fixed' | 'absolute' | 'relative' | 'static' | 'sticky'> }) {
    return (
        <>
            <Flex w='100%' bgColor={'white'} position={params.position} py={4} px={{ base: "10px", sm: "15px", md: 55 }} zIndex={20} boxShadow={'rgba(0, 0, 0, 0.10) 0px 3px 20px;'}>

                {/* Sobat Sehat Logo */}
                <Image objectFit='cover' src={SobatSehatDarkLogo.src} alt='Sobat Sehat Logo' height={'50px'} />

                {/* Recent Event */}
                <Center ms={5}>
                    <Box bgColor={'#FFE3AB'} p={'5px 10px'} rounded={20}>
                        <Flex>
                            <Text fontSize={'xs'}>Recent Event</Text>
                            <LuDot />
                            <Text fontSize={'xs'}>Senam lantai Jakarta Fest 2023</Text>
                        </Flex>
                    </Box>
                </Center>
                <Spacer />

                {/* Menus */}
                <Center >


                    {/* Search Modal
                    <Box mx={'20px'}>
                        <Button><MdDarkMode /></Button>
                    </Box> */}


                    {/* Login */}
                    <Menu>
                        <MenuButton>
                            <Flex>
                                <Center>
                                    <Text mr={2}>
                                        Febry Billiyagi
                                    </Text>
                                    <Avatar w={'40px'} h={'40px'} name='Oshigaki Kisame' src='https://avatars.githubusercontent.com/u/89958256?v=4'>
                                        <AvatarBadge boxSize='20px' bg='green.500' />
                                    </Avatar>
                                </Center>
                            </Flex>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                </Center>
            </Flex>
        </>
    )
}
