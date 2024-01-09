"use client"
import React, { useRef } from 'react'
import {
    Box,
    Heading,
    Flex,
    Center,
    Link,
    Button,
    Input,
    Text,
    Grid,
    GridItem
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaChevronLeft } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import axios from 'axios';
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function CreateEventsForm(params: { token: any }) {
    const router = useRouter()
    const toast = useToast()
    const [isLoading, setIsLoading] = React.useState(false)
    const [category, setCategory]: any = React.useState([])
    const [error, setError]: any = React.useState({
        status: 'idle',
        data: []
    })

    const editorRef: any = useRef(null);

    /** 
     * Handle submit form create users
    */
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true)
        const { name, thumbnail, start_at, end_at, link_location, location_at } = e.currentTarget;
        console.log(thumbnail.files[0])
        try {
            const response = await axios(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${params.token.value}`,
                    'Content-Type': 'multipart/form-data'
                },
                data: {
                    name: name.value,
                    thumbnail: thumbnail.files[0],
                    start_at: `${start_at.value.split('T').join(' ')}:00`,
                    end_at: `${end_at.value.split('T').join(' ')}:00`,
                    description: editorRef.current.getContent(),
                    link_location: link_location.value,
                    location_at: location_at.value
                }
            })
            if (response.data.status === 'success') {
                toast({
                    title: 'Berhasil',
                    description: response.data.message,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position: 'top-right'
                })
            }
            setIsLoading(false)
            router.push('/dashboard/events')
        } catch (error: any) {
            console.log(error.response)
            setIsLoading(false)
            if (error) {
                setError({
                    status: 'error',
                    data: error.response.data.message
                })
            }
            toast({
                title: 'Terjadi kesalahan',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        }
    }
    return (
        <form action="#" onSubmit={handleSubmit} encType='multipart/form-data'>
            <Box bg={'white'} p={5} rounded={10} shadow={'lg'} mb={10}>
                <Box mb={5}>
                    <Text mb={2}>Kegiatan</Text>
                    <Input size='md' name='name' required />
                    <Text size={'xs'} fontStyle={'italic'} color={'red'}>{error.data.name ? `* ${error.data.name}` : ''}</Text>
                </Box>
                <Box mb={5}>
                    <Text mb={2}>Thumbnail (Max 2MB)</Text>
                    <Input size='md' name='thumbnail' type='file' required />
                    <Text size={'xs'} fontStyle={'italic'} color={'red'}>{error.data.file ? `* ${error.data.file}` : ''}</Text>
                </Box >
                <Flex w={'100%'} justifyContent={'space-between'} mb={5}>
                    <Box w={'50%'} mr={3}>
                        <Text mb={2}>Nama Lokasi</Text>
                        <Input size='md' name='location_at' required />
                        <Text size={'xs'} fontStyle={'italic'} color={'red'}>{error.data.name ? `* ${error.data.name}` : ''}</Text>
                    </Box>
                    <Box w={'50%'} mr={3}>
                        <Text mb={2}>Link Lokasi</Text>
                        <Input size='md' name='link_location' required />
                        <Text size={'xs'} fontStyle={'italic'} color={'red'}>{error.data.name ? `* ${error.data.name}` : ''}</Text>
                    </Box>
                </Flex>
                <Flex w={'100%'} justifyContent={'space-between'} mb={5}>
                    <Box w={'50%'} mr={3}>
                        <Text mb={2}>Dimulai pada</Text>
                        <Input size='md' name='start_at' required type='datetime-local' />
                        <Text size={'xs'} fontStyle={'italic'} color={'red'}>{error.data.name ? `* ${error.data.name}` : ''}</Text>
                    </Box>
                    <Box w={'50%'} mr={3}>
                        <Text mb={2}>Berakhir pada</Text>
                        <Input size='md' name='end_at' required type='datetime-local' />
                        <Text size={'xs'} fontStyle={'italic'} color={'red'}>{error.data.name ? `* ${error.data.name}` : ''}</Text>
                    </Box>
                </Flex>

                <Box w={'100%'} mr={3}>
                    <Text mb={2}>Deskripsi</Text>
                    <Editor
                        id='editor'
                        apiKey='f1npif15ag3lt71rqltjkzb1f40rpsreppi8vpl5ccgountu'
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue="<p>This is the initial content of the editor.</p>"
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </Box >
                <Flex justifyContent={'end'} mt={10}>
                    <Button type='submit' colorScheme='blue' isLoading={isLoading}>
                        <Box mr={2}></Box>
                        Add Event</Button>
                </Flex>


            </Box>


        </form>
    )
}
