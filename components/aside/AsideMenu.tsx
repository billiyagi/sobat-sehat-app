"use client";
import React from 'react'
import SobatSehatLogo from '@/public/img/logo/Sobat-Sehat-Horizontal.svg'
import SobatSehatDarkLogo from '@/public/img/logo/Sobat-Sehat-Dark-Horizontal.svg'
import { Image, ResponsiveValue } from '@chakra-ui/react';
import { Button, ButtonGroup, Box, Text, Flex, Center, Square, Spacer, Link, Menu, MenuButton, MenuList, MenuItem, Avatar, AvatarBadge, Grid } from '@chakra-ui/react'
import NextLink from 'next/link';
import { AiFillDashboard } from "react-icons/ai";
import { usePathname } from 'next/navigation';
import { IoCalendar } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { FaComments } from "react-icons/fa";

export default function AsideMenu() {

    // List Menu
    const listMenu = [
        {
            'name': 'Dashboard',
            'icon': <AiFillDashboard />,
            'path': '/dashboard',
        },
        {
            'name': 'Events',
            'icon': <IoCalendar />,
            'path': '/dashboard/events',
        },
        {
            'name': 'News',
            'icon': <FaNewspaper />,
            'path': '/dashboard/news',
        },
        {
            'name': 'Users',
            'icon': <HiUsers />,
            'path': '/dashboard/users',
        },
        {
            'name': 'Subscribers',
            'icon': <MdEmail />,
            'path': '/dashboard/subscribers',
        },
        {
            'name': 'Comments',
            'icon': <FaComments />,
            'path': '/dashboard/comments',
        },

    ];

    // Get Pathname This Page
    const pathNameThisPage = usePathname();

    // Looping Menu
    const menus = listMenu.map((menu, index) => {
        return (
            <Link as={NextLink} href={menu.path} textAlign={'left'} _hover={{ textDecoration: 'none' }} key={index}>
                <Box px={'15px'} py={'7px'} rounded={10} fontWeight={'semibold'} bg={pathNameThisPage == menu.path ? '#efefef' : ''} _hover={{ backgroundColor: '#efefef' }}>
                    <Flex>
                        <Center>
                            {menu.icon}
                            <Text ml={3}>
                                {menu.name}
                            </Text>
                        </Center>
                    </Flex>
                </Box>
            </Link>
        )
    });
    return (
        <>
            <Box position={'fixed'} w={'220px'} h={'100%'} mt={'80px'} bg={'white'} borderRight={'1px solid #ddd'} top={0} left={0}>
                <Grid templateRows={'repeat(2, 1fr)'} gap={4} mt={20} px={'20px'}>
                    {menus}
                </Grid>
            </Box>
        </>
    )
}
