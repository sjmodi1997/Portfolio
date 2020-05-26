import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';

function Hero(props)
{
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12} xs={12}>
                    <Fade bottom>
                        {props.title && <h1 className="xyz front-weight-bolder">{props.title}</h1>}
                    </Fade>
                    <Fade bottom>
                        {!props.isMainHeading && props.subTitle && <h3 className="display-5 front-weight-light">{props.subTitle}</h3>}
                    </Fade>
                    <Fade bottom>
                        {props.isMainHeading && 
                        <ReactTypingEffect
                            text="Software Developer || Competitive Coder... "
                            className="typical"
                            speed="100"
                            eraseDelay="500000"
                        />}
                    </Fade>
                    <Fade bottom>
                        {props.text && <h3 className="lead front-weight-light">{props.text}</h3>}    
                    </Fade>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

//
export default Hero;