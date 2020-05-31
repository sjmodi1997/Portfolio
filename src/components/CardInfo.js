import React from 'react';
//import Container from 'react-bootstrap/Container';
import Button from '@material-ui/core/Button';
import {useSpring,animated} from 'react-spring';

function CardInfo(props)
{
    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <Button color="primary" href={props.link} className="buttonView">
                View Details
            </Button>
            {/*<a href={props.link} target="_blank" rel="noopener noreferrer">View</a>*/}
        </animated.div>
    );
}

export default CardInfo;