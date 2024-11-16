import { BackgroundImage, Text, Flex, Container, Box, Center, Group, Anchor, Grid, AspectRatio, SimpleGrid } from '@mantine/core'
import DesignComponent from '../components/DesignComponent'
import HeroComponent from '../components/HeroComponent'
import GalleryComponent from '../components/GalleryComponent'
import CarouselComponent from '../components/CarouselComponent'
import SkillSets from '../components/SkillSets'
import ContactComponent from '../components/ContactComponent'
import '../App.css'
export function Home() {

    return (
        <SimpleGrid cols={1} style={{ backgroundColor: '#876653' }}>

            <HeroComponent />

            <Center mt="150px" mb="150px" >
                <DesignComponent />
            </Center>
            <Center mt="20px" mb="50px">
                <SkillSets />
            </Center>

            <Center>
                <GalleryComponent />
            </Center>
            <Center mt="20px">
                <CarouselComponent />
            </Center>
            <Center>
                <ContactComponent />
            </Center>

        </SimpleGrid >
    );
}
