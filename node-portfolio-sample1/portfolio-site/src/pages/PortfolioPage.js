import React from 'react';
import Container from 'react-bootstrap/Container';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Carousel from "../components/Carousel";

function PortfolioPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <p>
                    hihihihihihhihihi
                </p>
            </Content>
            <Carousel />
        </div>

    );
}

export default PortfolioPage;