import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';

function Hero(props)
{
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                    <Fade bottom>
                        {props.title && <h1 className="display-1 front-weight-bolder">{props.title}</h1>}
                    </Fade>
                    <Fade bottom>
                        {props.subTitle && <h3 className="display-4 front-weight-light">{props.subTitle}</h3>}
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