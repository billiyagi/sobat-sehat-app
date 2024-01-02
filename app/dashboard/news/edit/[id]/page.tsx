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
import CreateUserForm from '@/components/form/users/CreateUserForm';
import { cookies } from 'next/headers';
import UpdateNewsForm from '@/components/form/news/UpdateNewsForm';

export default function Edit({ params }: { params: { id: string } }) {
    const token: any = cookies().get('token');
    return (
        <Box >
            <Flex alignItems={'center'} mb={10}>
                <Link as={NextLink} href='/dashboard/users' mr={2}>
                    <Button colorScheme='green' p={'10px'}><FaChevronLeft /></Button>
                </Link>
                <Heading as={'h1'} size={'lg'}>Edit News</Heading>
            </Flex>
            <UpdateNewsForm token={token} newsId={params.id} />
        </Box>
    )
}
