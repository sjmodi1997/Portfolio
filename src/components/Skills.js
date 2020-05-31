import React from 'react';
import Container from 'react-bootstrap/Container';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { Row } from 'react-bootstrap';

function Skills(props) {
    return (
        <Container className="skillsComponent" fluid={true}>
        <h2 className="skillsHeading"> Skills </h2>
        <Row className="py-2">
            <h4 className="skillsContent">Data Structure & Algo (C++)</h4>
        <Progress
            percent={90}
            theme={{
                success: {
                    symbol: '🏄‍',
                    color: 'linear-gradient(0deg, #766dff 0%, #88f3ff 100%)',
                    //background-Image: -webkit-;
                }
            }} />
        </Row>
        <Row className="py-2">
        <h4 className="skillsContent">Web-Backend (PHP,Postgres)</h4>
        <Progress
            percent={80}
            theme={{
                success: {
                    symbol: '🏄‍',
                    color: 'rgb(223, 105, 180)'
                }
            }}/>
        </Row>
        <Row className="py-2">
        <h4 className="skillsContent">FrontEnd (ReactJs,HTML,CSS)</h4>
        <Progress
            percent={70}
            theme={{
                success: {
                    symbol: '🏄‍',
                    color: 'rgb(223, 105, 180)'
                }
            }}/>
        </Row>
        <Row className="py-2">
        <h4 className="skillsContent">Image Processing (OpenCV,C++)</h4>
        <Progress
            percent={50}
            theme={{
                success: {
                    symbol: '🏄‍',
                    color: 'rgb(223, 105, 180)'
                }
            }}/>
        </Row>
        </Container>
    );
}

export default Skills;