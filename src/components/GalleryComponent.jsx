import { Grid, Card, Text, Image, Flex } from '@mantine/core'
import CancerLine from '../assets/Thumbnails/CancerLine Companion.png'

export default function GalleryComponent() {
    return (

        <Flex direction="column" align="center" justify="center" style={{ width: '100%', padding: '20px', marginRight: '200px', marginLeft: '200px', marginTop: '150px' }} >
            <div style={{
                borderTop: '1px solid white',
                padding: '50px',
                position: 'relative',
                textAlign: 'center',
                maxWidth: '1300px',
                width: '100%',
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                }}></div>
            </div>
            <Flex direction="row" align="center" justify="space-between" style={{ width: '100%', padding: '20px', marginRight: '200px', marginLeft: '200px', marginBottom: '90px', marginTop: '100px' }} >
                <Text style={{ fontFamily: 'GreatVibes-Regular, regular', fontSize: '70px', color: 'white', }}>Design Projects</Text>
            </Flex>

            <Flex direction="row" align="center" justify="space-between" style={{ width: '80%', padding: '20px', marginRight: '100px', marginLeft: '100px' }} >
                <Text style={{ fontFamily: 'DM SerifDisplay-Regular, regular', fontSize: '30px', color: 'white', marginRight: '20px' }}>CancerLine Companion App</Text>
                <Card style={{ width: '400px', height: '400px', borderRadius: '10px', border: 'solid 1px white', backgroundColor: '#AE9A93', padding: '40px', boxShadow: '19px 20px 30px rgba(0, 0, 0, 0.1)' }}>
                    <Image src={CancerLine} alt="CancerLine Companion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Card>
            </Flex>
            <Flex direction="row" align="center" justify="space-between" style={{ width: '80%', padding: '20px', marginRight: '100px', marginLeft: '100px' }} >
                <Card style={{ width: '400px', height: '400px', borderRadius: '10px', border: 'solid 1px white', backgroundColor: '#AE9A93', padding: '40px', boxShadow: '19px 20px 30px rgba(0, 0, 0, 0.1)' }}>
                    <Image src={CancerLine} alt="CancerLine Companion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Card>
                <Text style={{ fontFamily: 'DM SerifDisplay-Regular, regular', fontSize: '30px', color: 'white', marginRight: '20px' }}>Innovation & Technology Support Office (UIC)</Text>

            </Flex>
            <Flex direction="row" align="center" justify="space-between" style={{ width: '80%', padding: '20px', marginRight: '100px', marginLeft: '100px', marginBottom: '150px' }} >
                <Text style={{ fontFamily: 'DM SerifDisplay-Regular, regular', fontSize: '30px', color: 'white', marginRight: '20px' }}>CancerLine Companion App</Text>
                <Card style={{ width: '400px', height: '400px', borderRadius: '10px', border: 'solid 1px white', backgroundColor: '#AE9A93', padding: '40px', boxShadow: '19px 20px 30px rgba(0, 0, 0, 0.1)' }}>
                    <Image src={CancerLine} alt="CancerLine Companion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Card>
            </Flex>
            <div style={{
                borderTop: '1px solid white',
                padding: '50px',
                position: 'relative',
                textAlign: 'center',
                maxWidth: '1300px',
                width: '100%',
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                }}></div>
            </div>
            <Flex direction="row" align="center" justify="space-between" style={{ width: '100%', padding: '20px', marginRight: '200px', marginLeft: '200px', marginBottom: '90px', marginTop: '100px' }} >
                <Text style={{ fontFamily: 'GreatVibes-Regular, regular', fontSize: '70px', color: 'white', }}>Design Products </Text>
            </Flex>

            <Flex direction="row" align="center" justify="space-between" style={{ width: '80%', padding: '20px', marginRight: '100px', marginLeft: '100px' }} >
                <Text style={{ fontFamily: 'DM SerifDisplay-Regular, regular', fontSize: '30px', color: 'white', marginRight: '20px' }}>CancerLine Companion App</Text>
                <Card style={{ width: '400px', height: '400px', borderRadius: '10px', border: 'solid 1px white', backgroundColor: '#AE9A93', padding: '40px', boxShadow: '19px 20px 30px rgba(0, 0, 0, 0.1)' }}>
                    <Image src={CancerLine} alt="CancerLine Companion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Card>
            </Flex>
            <Flex direction="row" align="center" justify="space-between" style={{ width: '80%', padding: '20px', marginRight: '100px', marginLeft: '100px' }} >
                <Card style={{ width: '400px', height: '400px', borderRadius: '10px', border: 'solid 1px white', backgroundColor: '#AE9A93', padding: '40px', boxShadow: '19px 20px 30px rgba(0, 0, 0, 0.1)' }}>
                    <Image src={CancerLine} alt="CancerLine Companion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Card>
                <Text style={{ fontFamily: 'DM SerifDisplay-Regular, regular', fontSize: '30px', color: 'white', marginRight: '20px' }}>Innovation & Technology Support Office (UIC)</Text>

            </Flex>
            <Flex direction="row" align="center" justify="space-between" style={{ width: '80%', padding: '20px', marginRight: '100px', marginLeft: '100px', marginBottom: '150px' }} >
                <Text style={{ fontFamily: 'DM SerifDisplay-Regular, regular', fontSize: '30px', color: 'white', marginRight: '20px' }}>CancerLine Companion App</Text>
                <Card style={{ width: '400px', height: '400px', borderRadius: '10px', border: 'solid 1px white', backgroundColor: '#AE9A93', padding: '40px', boxShadow: '19px 20px 30px rgba(0, 0, 0, 0.1)' }}>
                    <Image src={CancerLine} alt="CancerLine Companion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Card>
            </Flex>
            <div style={{
                borderTop: '1px solid white',
                padding: '50px',
                position: 'relative',
                textAlign: 'center',
                maxWidth: '1300px',
                width: '100%',
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                }}></div>
            </div>
        </Flex>
    )
}

