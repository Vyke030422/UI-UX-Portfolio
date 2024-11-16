import React from 'react';
import { Text, Container, Divider } from '@mantine/core';

function DesignComponent() {
    return (
        <div style={{
            borderTop: '1px solid white',
            borderBottom: '1px solid white',
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
            <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '-10px',
                width: '20px',
                height: '20px',
                backgroundColor: 'white',
                borderRadius: '50%',
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-10px',
                right: '-10px',
                width: '20px',
                height: '20px',
                backgroundColor: 'white',
                borderRadius: '50%',
            }}></div>
            <Text style={{ color: 'white', fontSize: '24px', fontFamily: 'DM Serif Display, serif', textAlign: 'justify' }}>
                I began my journey as a generalist designer at our startup company, CancerLine Companion. I've worked on various projects, including research, wireframing, prototyping, creating information architecture, and developing websites and mobile app. To achieve this, I've learned a lot from my team and through self-study.
            </Text>
        </div>
    );
}

export default DesignComponent;


