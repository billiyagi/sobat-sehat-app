"use client"
import React from 'react'
import { Text, Grid, Box, Image, GridItem, Card, Link, Flex, Center, Avatar, Input, Button } from '@chakra-ui/react'
import { BsDot } from "react-icons/bs";
import { IoMdPin } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { getCookie } from 'typescript-cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function CommentsEventCard(param: { event: any }) {
    const [user, setUser]: any = useState(false);
    const [token, setToken]: any = useState(false);
    const [comments, setComments]: any = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setToken(getCookie('token'));

        // get user info
        if (token) {
            axios(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                setUser(res.data.user);
            }).catch((err) => {
                setUser(false);
            })
        } else {
            setUser(false);
        }


        // get comments
        axios(`${process.env.NEXT_PUBLIC_API_URL}/comments/type/event/${param.event.id}`, {
            method: 'GET',
        }).then((response) => {
            setComments(response.data.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [token, param, loading])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
            type: 'event',
            post_id: param.event.id,
            user_id: user.id,
            content: e.currentTarget.comment.value,
            parent_id: e.currentTarget.parent_id ? e.currentTarget.parent_id.value : 0
        }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setLoading(false);
        }).catch((err) => {
            setError(true);
            setLoading(false);
        })
        e.currentTarget.comment.value = '';

    }

    return (
        <Card bgColor={'#efefef'} height={'500px'} position={'relative'} >
            <Box px={5} py={5} overflow={'auto'}>
                {/* Comment */}
                {comments.length == 0 ? (
                    <Box>
                        <Text textAlign={'center'}>Belum ada komentar</Text>
                    </Box>
                ) : comments.map((comment: any, index: any) => (
                    <Box mb={5} key={index}>
                        <Flex>
                            <Avatar name='Dan Abrahmov' src='' h={10} w={10} />
                            <Box ml={3}>
                                <Text fontWeight={'bold'}>{comment.user.name}</Text>
                                <Text fontSize={'sm'}>{comment.content}</Text>
                            </Box>
                        </Flex>
                    </Box>
                ))}

            </Box >
            {
                user ? (
                    <Box position={'absolute'} bottom={0} left={0} px={5} py={3} bg={'white'} w={'100%'} >


                        <form action="#" method='post' onSubmit={handleSubmit}>
                            <Flex>
                                <Avatar name={user.name} src='' h={10} w={10} />
                                <Input placeholder='Ketik komentar' size='md' mx={2} name='comment' isReadOnly={loading} defaultValue={''} border={error ? '1px solid red' : '1px solid #ddd'} />
                                <Button colorScheme='blue' type='submit' isLoading={loading}>
                                    <IoSend />
                                </Button>
                            </Flex>
                        </form>
                    </Box>
                ) : ''}

        </Card >
    )
}
