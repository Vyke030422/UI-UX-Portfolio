import { Carousel } from '@mantine/carousel';
import { Image, Container, Text, Flex } from '@mantine/core';
import Github from '../assets/icons/Github.png';
import ReactIcon from '../assets/icons/React.png';
import Flutter from '../assets/icons/Flutter.png';
import Figma from '../assets/icons/Figma.png';
import HTML from '../assets/icons/HTML.png';
import CSS from '../assets/icons/CSS.png';
import Javascript from '../assets/icons/Javascript.png';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

export default function CarouselComponent() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));

    return (
        <Flex direction="column" justify="center" align="center" style={{ width: '100%', height: '100%', padding: '20px', color: 'white', marginBottom: '50px' }}>
            <Text style={{ fontFamily: 'DM SerifDisplay-Regular, regular', fontSize: '50px', marginBottom: '50px' }}>
                Tools that I currently use and learning into.
            </Text>

            <Carousel
                withIndicators
                height={200}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                loop
                align="center"
                slideSize="20%"
                slideGap="10px"
                style={{ width: '100%', padding: '30px' }}
                withControls={false}
                styles={{
                    indicator: {
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        backgroundColor: '#ccc',
                        transition: 'background-color 250ms ease',
                        '&[data-active]': {
                            backgroundColor: '#333',
                        },
                    },
                }}
            >
                <Carousel.Slide>
                    <Image src={Github} alt="Github" style={{ width: '150px', height: '150px', objectFit: 'contain', margin: 'auto' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image src={ReactIcon} alt="React" style={{ width: '150px', height: '150px', objectFit: 'contain', margin: 'auto' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image src={Flutter} alt="Flutter" style={{ width: '150px', height: '150px', objectFit: 'contain', margin: 'auto' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image src={Figma} alt="Figma" style={{ width: '150px', height: '150px', objectFit: 'contain', margin: 'auto' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image src={HTML} alt="HTML" style={{ width: '150px', height: '150px', objectFit: 'contain', margin: 'auto' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image src={CSS} alt="CSS" style={{ width: '150px', height: '150px', objectFit: 'contain', margin: 'auto' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image src={Javascript} alt="Javascript" style={{ width: '150px', height: '150px', objectFit: 'contain', margin: 'auto' }} />
                </Carousel.Slide>
            </Carousel>

        </Flex>
    );
}


