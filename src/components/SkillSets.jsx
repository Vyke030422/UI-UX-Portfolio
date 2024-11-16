import { Card, Flex, Text, Container, Divider, Image, Anchor } from '@mantine/core'
import UIUX from '../assets/icons/UIUX.png'
import Frontend from '../assets/icons/WebDevelopment.png'
import Experiences from '../assets/icons/Expirences.png'
export default function SkillSets() {
    return (
        <>
            <Card style={{ backgroundColor: '#AE9A93', borderRadius: '10px', }}>
                <Flex direction="row" wrap="wrap" justify="center" align="center">
                    <Container style={{ borderRadius: '10px', padding: '40px', width: '450px' }}>
                        <Image src={UIUX} style={{ width: '90px', height: '90px', objectFit: 'contain', margin: 'auto' }} />
                        <Text align="center" style={{ fontFamily: 'DM SerifDisplay-Regular, regular', fontSize: '30px', color: 'white', marginTop: '20px' }}>UI/UX Designer</Text>
                        <Text align="center" style={{ fontSize: '15px', color: 'white', marginTop: '10px' }}>I value simple content structure, clean design patterns, and thoughtful interactions. </Text>
                        <Text align="center" style={{ fontSize: '15px', color: '#F2F2F2', marginTop: '20px', marginBottom: '30px' }}>Tools that I use for UI/UX Design: </Text>
                        <Flex direction="row" wrap="wrap" justify="center" align="center" gap='5px'>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', }}>Figma, </Anchor>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', }}>Adobe XD, </Anchor>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', }}>Photoshop, </Anchor>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', }}>Illustrator, </Anchor>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', }}>After Effects, </Anchor>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', }}>Premiere Pro, </Anchor>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', }}>Sketch, </Anchor>
                        </Flex>
                    </Container>
                    <Divider orientation="vertical" />
                    <Container style={{ borderRadius: '10px', padding: '40px', width: '450px' }}>
                        <Image src={Frontend} style={{ width: '90px', height: '90px', objectFit: 'contain', margin: 'auto' }} />
                        <Text align="center" style={{ fontFamily: 'DM SerifDisplay-Regular, regular', fontSize: '30px', color: 'white', marginTop: '20px' }}>Frontend Developer</Text>
                        <Text align="center" style={{ fontSize: '15px', color: 'white' }} >I like to code things from scratch, and enjoy bringing ideas to life in the browser.</Text>
                        <Text align="center" style={{ fontSize: '15px', color: '#F2F2F2', marginTop: '20px', marginBottom: '30px' }}>Tools that I use for Frontend Development: </Text>
                        <Flex direction="row" wrap="wrap" justify="center" align="center" gap='5px'>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', }}>React, </Anchor>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', }}>Flutter, </Anchor>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', }}>HTML, </Anchor>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', }}>CSS, </Anchor>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', }}>Javascript, </Anchor>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', }}>Mantine, </Anchor>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', }}>Astro JS, </Anchor>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', }}>Sass, </Anchor>
                        </Flex>
                    </Container>
                    <Divider orientation="vertical" />
                    <Container style={{ borderRadius: '10px', padding: '40px', width: '450px' }}>
                        <Image src={Experiences} style={{ width: '90px', height: '90px', objectFit: 'contain', margin: 'auto' }} />
                        <Text align="center" style={{ fontFamily: 'DM SerifDisplay-Regular, regular', fontSize: '30px', color: 'white', marginTop: '20px' }}>Experiences</Text>
                        <Text align="center" style={{ fontSize: '15px', color: 'white' }} >I bring a wealth of experience in creating impactful digital solutions.</Text>
                        <Text align="center" style={{ fontSize: '15px', color: '#F2F2F2', marginTop: '20px', marginBottom: '30px' }}>Companies that I have worked with: </Text>
                        <Flex direction="Column" wrap="wrap" justify="center" align="center" gap='5px' marginBottom='20px'>
                            <Text style={{ fontSize: '15px', color: '#F2F2F2', fontFamily: 'DM SerifDisplay-Regular, regular' }}>2023 - Currently</Text>
                            <Anchor underline="hover" style={{ fontSize: '15px', color: '#F2F2F2', fontFamily: 'DM SerifDisplay-Regular, regular' }}>CanceLine Companion, </Anchor>




                        </Flex>
                    </Container>
                </Flex>

            </Card>

        </>

    )
}