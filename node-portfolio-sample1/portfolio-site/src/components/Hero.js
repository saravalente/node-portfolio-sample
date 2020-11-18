import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h3 className="display-4">{props.title}</h3>}
                        { props.subTitle && <h5 className="lead">{props.subTitle}</h5>}
                        { props.text && <h5 className="lead">{props.text}</h5>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;