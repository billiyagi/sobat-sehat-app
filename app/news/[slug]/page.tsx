import React from 'react'
import { Text, Grid, Box, Image, GridItem, Badge } from '@chakra-ui/react'
import CategoryNewsCard from '@/components/card/news/CategoryNewsCard'
import RecentlyNewsCard from '@/components/card/news/RecentlyNewsCard'

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <>
            {/* <div>My Post: {params.slug}</div> */}
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>

                {/* Daftar Kategori */}
                <GridItem w='100%'>
                    <CategoryNewsCard />
                </GridItem>

                <GridItem colSpan={3} w='100%' h='auto'>
                    <Box rounded={20} overflow={'hidden'}>
                        {/* Thumbnail */}
                        <Image src='https://picsum.photos/500/300' alt='Thumbnail Events' h={'500px'} w='100%' objectFit={'cover'}></Image>
                    </Box>

                    {/* Badge Category */}
                    <Box mt={10}>
                        <Badge color={'white'} px={5} py={1} rounded={20} bgColor={'#fba600'}>Komunitas</Badge>
                        <Text fontSize={'4xl'} fontWeight={'semibold'} mt={3}>Mengenal Jenis-Jenis Yoga dan Manfaatnya Bagi Kesehatan</Text>
                    </Box>

                    {/* Konten News */}
                    <Box my={7}>
                        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, voluptates aspernatur distinctio sit hic assumenda magni aliquam dolores. Blanditiis expedita dolorum aliquam harum voluptas voluptate esse aspernatur porro incidunt assumenda!


                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, officiis ab dolorum dolorem odit tenetur laborum dolor iste quas. Fugiat deleniti placeat consequuntur at tenetur mollitia qui ducimus itaque commodi!
                            Eaque saepe dicta, cum esse molestias quasi praesentium soluta nulla quae harum nisi quam, laudantium at perferendis illo tempore aut laborum! Veniam dolorum saepe possimus vitae placeat autem harum veritatis.
                            Aliquam non quibusdam dolor, corporis illum molestias modi neque dicta sint natus eveniet et eum aperiam temporibus odio labore aspernatur voluptas veritatis reprehenderit? Totam sapiente repudiandae provident at ducimus eius.
                        </Text>
                    </Box>
                </GridItem>

                {/* Detail News */}
                <GridItem w='100%'>
                    <RecentlyNewsCard />
                </GridItem>
            </Grid>
        </>
    )
}