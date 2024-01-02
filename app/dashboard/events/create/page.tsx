import React from 'react'
import {
    Box,
    Heading,
    Flex,
    Link,
    Button,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaChevronLeft } from "react-icons/fa";
import CreateEventsForm from '@/components/form/events/CreateEventsForm';
import { cookies } from 'next/headers';

export default function Create() {
    const token: any = cookies().get('token');
    return (
        <Box >
            <Flex alignItems={'center'} mb={10}>
                <Link as={NextLink} href='/dashboard/events' mr={2}>
                    <Button colorScheme='green' p={'10px'}><FaChevronLeft /></Button>
                </Link>
                <Heading as={'h1'} size={'lg'}>Create Events</Heading>
            </Flex>
            <CreateEventsForm token={token} />
        </Box>
    )
}
