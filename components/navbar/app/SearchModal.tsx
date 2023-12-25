"use client"
import React from 'react'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, useDisclosure, Input, Flex, Text, Box, Heading, Stack, StackDivider, Badge, Select } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";
import axios from 'axios';

export default function SearchModal(params: { token: string }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [searchResult, setSearchResult]: any = React.useState({
        type: 'events',
        result: []
    });
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);


        /**
         * Get form data
         */
        const formData = new FormData(e.currentTarget);


        /** 
         * Get data from API
        */
        axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_API_URL}/search/${formData.get('type') == '' ? 'events' : formData.get('type')}?query=${formData.get('query')}`,
            headers: {
                Authorization: `Bearer ${params.token}`
            }
        }).then((response: any) => {
            setSearchResult({
                type: formData.get('type') == '' ? 'events' : formData.get('type'),
                result: response.data.data
            });
            setLoading(false);
        }).catch((err) => { });
    }

    return (
        <>
            <Button onClick={onOpen}><FaSearch /></Button>

            <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cari Berita dan Kegiatan</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form action="#" onSubmit={handleSubmit}>
                            <Flex>
                                <Input placeholder='Ketik pencaharian...' size='md' name='query' type='text' />
                                <Select placeholder='Pilih pencaharian' w={'350px'} mx={2} name='type'>
                                    <option value='events'>Kegiatan</option>
                                    <option value='news'>Berita</option>
                                </Select>
                                <Button isLoading={loading} colorScheme='blue' px={'15px'} type='submit'>
                                    <Text fontSize={'sm'}>
                                        <FaSearch />
                                    </Text></Button>
                            </Flex>
                        </form>

                        {searchResult.result.length > 0 ? (
                            <Stack divider={<StackDivider />} spacing='4' mt={10}>
                                {searchResult.type == 'events' ? (
                                    searchResult.result.map((result: any, index: number) => (
                                        <Box key={index}>
                                            <Badge colorScheme='green' mb={2}>Kegiatan</Badge>
                                            <Heading size='xs' textTransform='uppercase'>
                                                {result.name}
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
                                                oleh {result.author.name}, Lokasi di {result.location_at}
                                            </Text>
                                        </Box>
                                    ))
                                ) : (
                                    searchResult.result.map((result: any, index: number) => (
                                        <Box key={index}>
                                            <Badge colorScheme='blue' mb={2}>Berita</Badge>
                                            <Heading size='xs' textTransform='capitalize'>
                                                {result.title}
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
                                                oleh {result.author.name}, di {result.category.name}
                                            </Text>
                                        </Box>
                                    ))
                                )}
                            </Stack>
                        ) : ''}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
