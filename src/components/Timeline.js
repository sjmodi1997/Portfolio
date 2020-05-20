import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Timeline() {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    {/*<Col md={4} sm={12}>*/}
                        <h1 className="display-1 front-weight-bolder">My Journey</h1>
                    {/*</Col>*/}
                </Row>
            </Container>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="July, 2019 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Software Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Vehant Technologies Pvt Ltd, Noida, IND</h4>
                <p>
                    C++, OpenCv, Licence-plate extraction
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jan, 2019 - June, 2019"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Vehant Technologies Pvt Ltd, Noida, IND</h4>
                <p>
                    Web-Backend, PHP, Postgres
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Aug, 2015 - May, 2019"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Technology</h3>
                <h4 className="vertical-timeline-element-subtitle">Dhirubhai Ambani Institute of Information and Communication Technology</h4>
                <p>
                    Information and Communication Technology
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </Jumbotron>
    );
}

export default Timeline;