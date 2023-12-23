"use client"
import React from 'react'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, useDisclosure, Input, Flex, Text } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";

export default function SearchModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen}><FaSearch /></Button>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cari Berita dan Kegiatan</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Flex>
                            <Input placeholder='Ketik pencaharian...' size='md' />
                            <Button ml={2} colorScheme='blue' px={'15px'}>
                                <Text fontSize={'sm'}>
                                    <FaSearch />
                                </Text></Button>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
