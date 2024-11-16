import Image from '../assets/images/Hero-Page.svg'
import { BackgroundImage, Text, Flex, Anchor, Group } from '@mantine/core'

export default function HeroComponent() {
    return (
        <BackgroundImage
            h="100vh"
            w="auto"
            src={Image}
            style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor: '#876653', backgroundRepeat: 'no-repeat', position: 'relative' }}
        >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.1)', zIndex: 1 }}></div>

            <Flex justify="space-between"
                mt="30px"
                align="center"
                direction="row"
                wrap="wrap"
                style={{ padding: '20px', position: 'relative', zIndex: 2 }}
            >
                <Text ml="50px" style={{ color: 'white', fontSize: '50px', fontFamily: 'GreatVibes-Regular, regular', textDecoration: 'none' }}>
                    Kevin Intong
                </Text>
                <Group mr="30px" justify="center" spacing="xl" gap="50px">
                    <Anchor href="#home" style={{ color: 'white', fontSize: '25px', fontFamily: 'DM SerifDisplay-Regular, regular' }}>
                        Home
                    </Anchor>
                    <Anchor href="#about" style={{ color: 'white', fontSize: '25px', fontFamily: 'DM SerifDisplay-Regular, regular' }}>
                        About Me
                    </Anchor>
                    <Anchor href="#portfolio" style={{ color: 'white', fontSize: '25px', fontFamily: 'DM SerifDisplay-Regular, regular' }}>
                        CV Portfolio
                    </Anchor>
                    <Anchor href="#contact" style={{ color: 'white', fontSize: '25px', fontFamily: 'DM SerifDisplay-Regular, regular' }}>
                        Contact me
                    </Anchor>
                </Group>
            </Flex>
            <Flex justify="center"
                align="center"
                direction="column"
                wrap="wrap"
                mt="120px"
                gap="20px"
                style={{ color: 'white', position: 'relative', zIndex: 2 }}>
                <Text style={{ fontFamily: 'DM SerifDisplay-Regular, regular', fontSize: '50px', color: 'white' }}>A Generalist Designer and Frontend Developer</Text>
                <Text style={{ fontFamily: 'DM SerifDisplay-Regular, regular', fontSize: '25px', color: 'white', maxWidth: '900px', textAlign: 'center' }}>I bring design and code together to create stunning, functional digital experiences for web and mobile.</Text>

            </Flex>
        </BackgroundImage >
    );
}