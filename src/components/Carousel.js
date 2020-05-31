import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import siliconvalley from '../assets/images/siliconvalley.jpg';
import Portfolio from '../assets/images/Portfolio2.jpg';
import ticTacToe from '../assets/images/tic-tac-toe3.png';
import olympic from '../assets/images/olympic.jpg';

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
                    subTitle: 'Game with MiniMax Algorithm',
                    imgSrc: ticTacToe,
                    link: 'https://github.com/sjmodi1997/tic-tac-toe-MiniMax-Algo',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Olympic',
                    subTitle: 'Database Schema for Olympics',
                    imgSrc: olympic,
                    link: 'https://github.com/sjmodi1997/Olympic-Database',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Portfolio',
                    subTitle: 'A Portfolio for Software Developers',
                    imgSrc: Portfolio,
                    link: 'https://github.com/sjmodi1997/Portfolio',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id,card) =>
    {
        //console.log(id);    
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