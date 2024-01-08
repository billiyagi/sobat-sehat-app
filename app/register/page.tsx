import React from 'react'
import { Box, Text, Flex, Center, Square, Spacer, Link, Input } from '@chakra-ui/react'
import RegisterForm from '@/components/form/RegisterForm'

export default function Register() {
    return (
        <Center py={10}>
            <RegisterForm />
        </Center>
    )
}
