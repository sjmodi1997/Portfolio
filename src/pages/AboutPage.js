//import React from 'react';
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Smit from '../assets/images/Smit2.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from '../components/Hero.js';

function AboutPage(props)
{
    return(
        <Container fluid={true}>
            <Row>
                <Col>
                    <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
                    <Fade bottom>
                        <p className='about-p'>An organized and quick-learning software developer with an emphasis in Web-Services and Competitive Coding. My goal is to make world a better place by building build high performance, scalable, robust, secure, data driven applications using cutting edge technology with quality code. My work philosophy is formed around continuous learning and improvement, staying always up to date with current technologies, best practices, and programming methodologies. Working for 1+ year in the industry has given me great exposure to work in real-time, fast-paced, high volume and mission-critical projects, targeting extremely low latency and zero error tolerance release.</p>
                    </Fade>
                </Col>
                <Col>
                    <img className='about-img' src={Smit} alt='about image'></img>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutPage;