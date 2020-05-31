import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SocialIcons from '../components/SocialIcons';

function Footer()
{
    return (
        <footer className="footer">
            <Container fluid={true}>
                <Row className="justify-content-between p-3">
                    <Col>
                    </Col>
                    <Col className="p-0" md="auto">
                        <SocialIcons />
                    </Col>
                    <Col className="footerLast">
                        This site is made by Smit Modi.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;