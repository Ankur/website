import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutPage(props) {
    return(
        <>
            <Jumbotron className="jumbotron-fluid p-0">
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-1 font-weight-bolder"> {props.title}</h1>}
                    </Col>
                </Row>
            </Jumbotron>
            <Row className="justify-content-center">
                <Col md={8}>
                    <p>Hi! My Name is Cjache and I'm currently a rising senior at UC Berkeley studying Business and Computer Science.</p>
                </Col>
            </Row>
        </>
    );
}

export default AboutPage;