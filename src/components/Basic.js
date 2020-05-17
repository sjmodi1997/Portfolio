import React from 'react';
import Hero from '../components/Hero';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import { Grid } from '@material-ui/core';

function Basic(props) {
    return(
        <Hero title={props.title} subTitle={props.subTitle} />
    );
    
    /*return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Grid style={{backgroundColor: 'white',borderRadius: '25px'}} fluid={true}>
                <Row className="justify-content-center py-5" style={{ marginLeft: '250px', marginRight: 0 }}>
                    <Col className="justify-content-center" style={{ paddingLeft: '0px', paddingRight: 0 }}> 
                        <h1 className="display-1 front-weight-bolder">{props.title}</h1>
                    </Col>
                </Row>
            </Grid>
        </Jumbotron>
    );
    */
}

export default Basic;