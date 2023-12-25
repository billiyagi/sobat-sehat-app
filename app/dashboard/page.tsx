import React, { useContext } from 'react'

import { Flex, Button, Text } from '@chakra-ui/react'
import { DataTable } from '@/components/DataTable';
import { createColumnHelper } from "@tanstack/react-table";
import DataGrowing from '@/components/charts/DataGrowing';
// import dashboardContext from './layout';

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
