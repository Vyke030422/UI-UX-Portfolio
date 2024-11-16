import { Text, Flex, Anchor, Divider, Container } from '@mantine/core';

export default function ContactComponent() {
    return (
        <Flex direction="column" align="center" justify="center" style={{ width: '100%', padding: '20px', marginRight: '200px', marginLeft: '200px', marginTop: '50px' }} >
            <Divider style={{ width: '100%', marginBottom: '20px' }} />
            <Flex direction="column" align="center" justify="center" style={{ width: '100%' }}>
                <Text style={{ fontFamily: 'DM SerifDisplay-Regular, regular', fontSize: '30px', color: 'white', textAlign: 'center', width: '800px' }}>
                    Interested in working together or looking to chat over coffee? Shoot me a message and let’s talk!
                </Text>
                <Flex direction="row" wrap="wrap" justify="space-between" align="center" gap='5px'>
                    <Text style={{ fontSize: '15px', color: '#F2F2F2', marginTop: '10px' }}>
                        Gmail: kevinintong20@gmail.com
                    </Text>
                    <Text style={{ fontSize: '15px', color: '#F2F2F2', marginTop: '10px' }}>
                        Github: <Anchor href="https://github.com/Vyke030422" style={{ color: '#F2F2F2' }}>Vyke030422 </Anchor>
                    </Text>
                    <Text style={{ fontSize: '15px', color: '#F2F2F2', marginTop: '10px' }}>
                        Facebook: <Anchor href="https://www.facebook.com/profile.php?id=100068596903783" style={{ color: '#F2F2F2' }}>Kevin Intong </Anchor>
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
