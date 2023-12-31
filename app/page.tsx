import NavbarTransparent from '@/components/navbar/app/NavbarTransparent';
import JumbotronImg from '@/public/img/ilustration/home-jumbotron.png';
import HomeBackground from '@/public/img/home-bg.png';
import IntroImg from '@/public/img/ilustration/home-3img.png';
import CommunityImg from '@/public/img/ilustration/home-community.jpg';
import NewsHorizontalCard from '@/components/card/news/NewsHorizontalCard';
import NextLink from 'next/link';
import Footer from '@/components/footer/app/Footer';

import { Heading, Box, Text, Center, Flex, Image, Spacer, Badge, Grid, Link } from '@chakra-ui/react';
import ListNewsHomeCard from '@/components/card/news/ListNewsHomeCard';
export default function Home() {
    const sobatSehatColor = '#fba600';
    return (
        <>
            {/* Navbar */}
            <NavbarTransparent position='fixed' />

            {/* Jumbotron */}
            <Flex bgImage={`url(${JumbotronImg.src})`} bgPosition="center" bgRepeat="no-repeat" h={'100vh'} position={'relative'}>
                <Box position='absolute' top='0' left='0' w='100%' h='100%' bgColor={'black'} opacity={'0.5'} />

                <Center position={'relative'} textAlign={'center'} w={'100%'}>
                    <Box>
                        <Heading as={'h1'} fontSize={'6xl'} color={'white'} fontWeight={'semibold'}>Bertransformasi Menuju</Heading>
                        <Heading as={'h1'} fontSize={'6xl'} color={'white'} fontWeight={'semibold'}> <span style={{ color: sobatSehatColor }}>Kesehatan</span> Optimal</Heading>
                    </Box>

                </Center>
            </Flex>



            <Box bgImage={`url(${HomeBackground.src})`} px={{ base: "10px", sm: "15px", md: 200 }} py={'80px'}>

                {/* Intro */}
                <Flex mb={'200px'}>
                    <Center>
                        <Box paddingRight={200}>
                            <Badge color={'white'} px={5} py={1} rounded={20} bgColor={sobatSehatColor}>Hidup Sehat</Badge>
                            <Heading fontSize={'4xl'} fontWeight={'extrabold'} lineHeight={1.7}>Memulai Hidup Lebih Baik, Lebih Sehat</Heading>
                            <Text fontSize={'2xl'} fontWeight={'light'} marginTop={5}>Bergabung dengan komunitas sobat sehat, ikuti berbagai kegiatan yang dibagikan oleh komunitas secara luas.</Text>
                        </Box>
                    </Center>
                    <Spacer />
                    <Image src={IntroImg.src} alt='Intro' h={'auto'} w={80}></Image>
                </Flex>

                {/* Community */}
                <Flex>
                    <Image src={CommunityImg.src} alt='Intro' h={500} w={400} objectFit={'cover'} rounded={25}></Image>
                    <Spacer />
                    <Center>
                        <Box paddingLeft={70}>
                            <Badge color={'white'} px={5} py={1} rounded={20} bgColor={sobatSehatColor}>Komunitas</Badge>
                            <Heading fontSize={'4xl'} fontWeight={'extrabold'} lineHeight={1.7}>Langsung dari Komunitas, untuk Komunitas</Heading>
                            <Text fontSize={'2xl'} fontWeight={'light'} marginTop={5}>Informasi kegiatan olahraga diberikan dan diliput langsung dari komunitas dan instansi olahraga, untuk dibagikan dengan masyarakat luas</Text>
                        </Box>
                    </Center>
                </Flex>

                {/* News Recently */}
                <Box mt={60}>
                    <Center>
                        <Heading fontSize={'4xl'} fontWeight={'extrabold'} lineHeight={1.7}>Kegiatan Olahraga Terkini</Heading>
                    </Center>

                    {/* List News */}
                    <ListNewsHomeCard />

                    <Center mt={20}>
                        <Link as={NextLink} href='/news' bgColor={sobatSehatColor} p={'10px 25px'} rounded={10} color={'#ffff'} _hover={{ textDecoration: 'none' }}>Lihat Semua</Link>
                    </Center>
                </Box>
            </Box>

            <Footer />
        </>
    )
}
