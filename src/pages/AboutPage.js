import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutPage(props) {
    return(
        <>
            <Jumbotron className="jumbotron-fluid p-0">
                        { props.title && <h1 className="display-1 font-weight-bolder"> {props.title}</h1>}
            </Jumbotron>
                    <p>Hi! My Name is Cjache and I'm currently a rising senior at UC Berkeley studying Business and Computer Science.</p>

        </>
    );
}

export default AboutPage;