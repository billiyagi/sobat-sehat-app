"use client"
import React, { useEffect } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Text,
    TableContainer,
    Box,
    Heading,
    Flex,
    Divider,
    ButtonGroup,
    Button,
    Badge,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Center,
    ModalBody,
    Spinner,

} from '@chakra-ui/react'
import { getCookie } from 'typescript-cookie'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { HiMiniTrash } from "react-icons/hi2";
import { useRouter } from 'next/navigation'
import { useDisclosure } from '@chakra-ui/react'




function paginationArray(dataset: any) {

    const totalData = dataset.length / 10 + 1;
    let results = []
    for (let i = 1; i <= totalData; i++) {
        results.push(dataset.slice((i - 1) * 10, i * 10))
    }
    return results;
}



export default function UsersTable(params: { token: any }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter();

    const [dataset, setDataset]: any = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(0)
    const [deleteUser, setDeleteUser]: any = React.useState({})
    const [isLoading, setIsLoading] = React.useState(false)
    const [showData, setShowData]: any = React.useState({
        status: false,
        data: []
    })
    const toast = useToast()

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
            headers: {
                Authorization: `Bearer ${params.token}`
            }
        }).then((response: any) => {
            setDataset(paginationArray(response.data.data))
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false)
            toast({
                title: 'Terjadi kesalahan',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        })
    }, [params, currentPage, toast])

    /** 
     * Handle show data
    */
    function handleShowData(dataset: any) {
        setShowData({
            status: true,
            data: dataset
        })
    }

    /** 
     * Handle delete data
    */
    function handleDeleteData() {

        // delete data from database
        axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/users/${deleteUser.id}`, {
            headers: {
                Authorization: `Bearer ${params.token}`
            }
        }).then((response: any) => {
            toast({
                title: 'Berhasil',
                description: 'Pengguna berhasil dihapus',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })
        }).catch((error) => {
            toast({
                title: 'Terjadi kesalahan',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        })

        // close modal
        onClose()
        // delete data from dataset
        dataset[currentPage].splice(deleteUser.index, 1)
    }

    return (
        <Box>
            {showData.status ? (
                <>
                    <Flex justifyContent={'space-between'} alignItems={'center'} mb={2}>
                        <Heading size={'md'}>Data User</Heading>
                        <Button onClick={() => setShowData({
                            status: false,
                            data: []
                        })}>Tutup</Button>
                    </Flex>
                    <Divider mb={3} />
                    <Text fontSize={'lg'}>
                        Nama: {showData.data.name}
                    </Text>
                    <Text fontSize={'lg'}>
                        Email: {showData.data.email}
                    </Text>
                    <Text fontSize={'lg'}>
                        Peran Pengguna: {showData.data.role}
                    </Text>
                    <Text fontSize={'lg'}>
                        Bergabung Pada: {showData.data.created_at}
                    </Text>
                </>) : (
                <>
                    <TableContainer maxHeight={'500px'} overflowY={'auto'}>
                        <Table variant='simple'>
                            <Thead bg={'#fba600'}>
                                <Tr >
                                    <Th color={'white'}>#</Th>
                                    <Th color={'white'}>Name</Th>
                                    <Th color={'white'}>Email</Th>
                                    <Th color={'white'}>Role</Th>
                                    <Th color={'white'}>Join At</Th>
                                    <Th color={'white'}>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {(dataset[currentPage]) ? (
                                    dataset[currentPage].map((user: any, index: number) => (
                                        <Tr key={index}>
                                            <Td>{index + 1}</Td>
                                            <Td>{user.name}</Td>
                                            <Td>{user.email}</Td>
                                            <Td>{user.role}</Td>
                                            <Td>{user.created_at}</Td>
                                            <Td>
                                                <Button colorScheme='yellow' onClick={
                                                    () => handleShowData(user)
                                                }><FaEye /></Button>
                                                <Button colorScheme='blue' mx={2} onClick={
                                                    () => router.push(`/dashboard/users/edit/${user.id}`)
                                                }><AiFillEdit /></Button>
                                                <Button colorScheme='red' onClick={() => {
                                                    setDeleteUser({
                                                        id: user.id,
                                                        index: index
                                                    })
                                                    return onOpen();
                                                }}><HiMiniTrash /></Button>
                                            </Td>
                                        </Tr>
                                    ))
                                ) : null}
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <Flex justifyContent={'end'}>
                        <ButtonGroup spacing='6' isAttached mt={5}>
                            <Button colorScheme='blue' isDisabled={!dataset[currentPage - 1] ? true : false} onClick={() => {
                                if (currentPage > 0) {
                                    setCurrentPage(currentPage - 1)
                                }
                            }}><GrFormPreviousLink /> Previous</Button>
                            <Button colorScheme='blue' isDisabled={!dataset[currentPage + 1] ? true : false} onClick={() => {
                                if (currentPage < dataset.length - 1) {
                                    setCurrentPage(currentPage + 1)

                                }
                            }}>Next <GrFormNextLink /></Button>
                        </ButtonGroup>
                    </Flex>
                </>
            )}


            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Center>
                            <Text mb={5} fontWeight={'bold'} fontSize={'3xl'}>Hapus data?</Text>
                        </Center>
                        <Flex mb={2}>
                            <Button onClick={onClose} w={'50%'} mr={2}>Tutup</Button>
                            <Button onClick={handleDeleteData} w={'50%'} ml={2} colorScheme='red'>Hapus Data</Button>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}
