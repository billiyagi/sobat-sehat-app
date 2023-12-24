import React from 'react'

import { Flex, Button, Text } from '@chakra-ui/react'
import { DataTable } from '@/components/DataTable';
import { createColumnHelper } from "@tanstack/react-table";
import DataGrowing from '@/components/charts/DataGrowing';

export default function Dashboard() {



    return (
        <>
            <Flex>
                <Text fontWeight={'bold'} fontSize={'2xl'}>Dashboard</Text>
            </Flex>
            <DataGrowing />
        </>
    )
}
