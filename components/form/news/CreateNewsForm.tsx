"use client"
import React, { useRef } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Heading,
    Flex,
    Center,
    Link,
    Button,
    Input,
    Text,
    Select
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaChevronLeft } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import axios from 'axios';
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function CreateNewsForm(params: { token: any }) {
    const router = useRouter()
    const toast = useToast()
    const [isLoading, setIsLoading] = React.useState(false)
    const [category, setCategory]: any = React.useState([])
    const [error, setError]: any = React.useState({
        status: 'idle',
        data: []
    })

    const editorRef: any = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
            headers: {
                Authorization: `Bearer ${params.token.value}`
            }
        }).then((response) => {
            setCategory(response.data.data)
        }).catch((error) => {
            console.log(error.response.data)
        })
    }, [params])

    /** 
     * Handle submit form create users
    */
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true)
        const { title, thumbnail, status, category_id } = e.currentTarget;
        console.log(thumbnail.files[0])

        try {
            const response = await axios(`${process.env.NEXT_PUBLIC_API_URL}/news`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${params.token.value}`,
                    'Content-Type': 'multipart/form-data'
                },
                data: {
                    title: title.value,
                    thumbnail: thumbnail.files[0],
                    status: status.value,
                    category_id: category_id.value,
                    content: editorRef.current.getContent()
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
            router.push('/dashboard/news')
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
                    <Text mb={2}>Judul</Text>
                    <Input size='md' name='title' required />
                    <Text size={'xs'} fontStyle={'italic'} color={'red'}>{error.data.title ? `* ${error.data.title}` : ''}</Text>
                </Box>
                <Box mb={5}>
                    <Text mb={2}>Thumbnail</Text>
                    <Input size='md' name='thumbnail' type='file' />
                    <Text size={'xs'} fontStyle={'italic'} color={'red'}>{error.data.file ? `* ${error.data.file}` : ''}</Text>
                </Box >
                <Flex w={'100%'} justifyContent={'space-between'} mb={5}>

                    <Box w={'50%'} mr={3}>
                        <Text mb={2}>Status</Text>
                        <Select placeholder='Pilih Status' name='status'>
                            <option value='draft'>Draft</option>
                            <option value='published'>Publish</option>
                            <option value='archived'>Archive</option>
                        </Select>
                        <Text size={'xs'} fontStyle={'italic'} color={'red'}>{error.data.status ? `* ${error.data.status}` : ''}</Text>
                    </Box>
                    <Box w={'50%'}>
                        <Text mb={2}>Category</Text>
                        <Select placeholder='Pilih Kategori' name='category_id'>
                            {category.map((item: any) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                        </Select>
                        <Text size={'xs'} fontStyle={'italic'} color={'red'}>{error.data.category_id ? `* ${error.data.category_id}` : ''}</Text>
                    </Box>
                </Flex>

                <Box w={'100%'} mr={3}>
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
                        <Box mr={2}><FaNewspaper /></Box>
                        Add News</Button>
                </Flex>


            </Box>


        </form>
    )
}
