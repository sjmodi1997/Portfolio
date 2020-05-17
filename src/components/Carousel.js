import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import siliconvalley from '../assets/images/siliconvalley.jpg';
import ticTacToe from '../assets/images/tic-tac-toe.jpg';
import olympic from '../assets/images/olympic.png';

import Card from './Card';

class Carousel extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            items: [
                {
                    id: 0,
                    title: 'Tic-tac-toe',
                    subTitle: 'with MiniMax Algorithm',
                    imgSrc: ticTacToe,
                    link: 'https://github.com/sjmodi1997/tic-tac-toe-MiniMax-Algo',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Olympic',
                    subTitle: 'Database',
                    imgSrc: olympic,
                    link: 'https://github.com/sjmodi1997/Olympic-Database',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: siliconvalley,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id,card) =>
    {
        console.log(id);    
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id!==id)
            {
                item.selected = false;
            }
        });

        this.setState(
            {
                items
            }
        );
    } 

    makeItems = (items) => {
        return items.map(
            item => {
                return <Card item={item} click={(e=> this.handleCardClick(item.id,e))} key={item.id} /> 
            }
        )
    }
    render()
    {
        return(
            <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>      
            </Container>
        );
    }
}

export default Carousel;