import React from 'react';

import Card from '../components/Card';

import src1 from '../assets/img/src1.jpg'
import src2 from '../assets/img/src2.jpg'
import src3 from '../assets/img/src3.jpg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Title1',
                    subTitle: 'something',
                    imgSrc: src1,
                    link: 'www.google.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Title2',
                    subTitle: 'something',
                    imgSrc: src2,
                    link: 'www.google.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Title3',
                    subTitle: 'something',
                    imgSrc: src3,
                    link: 'www.google.com',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item=> {
            return <Card item ={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render(){
        return(
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel;