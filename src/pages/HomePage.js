import React from 'react';
import Header from '../components/Header';
import Timeline from "../components/Timeline";
import Image from 'react-bootstrap/Image';
import portrait from '../images/portrait.jpg';
import "../cssStyles/portrait.css";

function HomePage(props) {
    return(
    <>
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
        
    }}>
        <Image alt="portrait" className="photo" src={portrait} roundedCircle thumbnail/>
    </div>
    <div>
        <Header></Header>
            <div>
                <Timeline></Timeline>
            </div>
    </div>
    </>
    );
}

export default HomePage;