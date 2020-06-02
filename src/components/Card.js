import React, { useState } from 'react';
import CardInfo from './CardInfo';
import hoverIcon from '../assets/images/hoverIcon3.png';

function onClick (props) {
    //console.log(props);
    window.open(props.item.link);
};

function Card(props) {
    const [isShown, setIsShown] = useState(false);
    return (
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} onClick={onClick.bind(null,props)}/>
                {/*!isShown && <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />*/}
                {/*isShown && <img className="g-card-image" src={hoverIcon} alt={props.item.imgSrc} onClick={onClick.bind(null,props)}//>*/}
            </div>
            <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />
            {/*{props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link ={props.item.link}/>}*/}
        </div>
    );
}

export default Card;