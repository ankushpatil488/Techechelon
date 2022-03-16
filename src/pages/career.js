
import React from "react";
import { Link, withPrefix } from "gatsby";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, PlaceholderButton } from 'react-bootstrap';
import Helmet from "react-helmet"
import '../fonts/aleo/Aleo-Regular.ttf';
import '../styles/about.scss';

import ceo from '../images/ceo.png';
import developer from '../images/developer.png';
import finance from '../images/finance.png';
import flag from '../images/flag.png';
import image1 from '../images/image1.png';
 
import image5 from '../images/image5.png';
// import logo from '../images/logo.png';
 
import vp from '../images/vp.png';

import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
        <div className="bgcolor1">
        <Container>
          <Row className="pl-10">
            <h1 className="font-face-aleo-h pt-5">Current openings</h1>
            <div className="text-center "><img src={shape} className="img-fluid1" alt="Responsive image" ></img></div>
            <h4 className="font-face-mulish-sh">We look forward to seeing your application!</h4>
          </Row>
        </Container>
        <Row >
          <Col   >
            <button onclick="myFunction()" className="font-face-mulish-h mt-4 ">Front-end</button>
            {/* <button className="font-face-mulish-h mt-4">Back-end</button>
            <button className="font-face-mulish-h mt-4">Mobile application</button>
            <button className="font-face-mulish-h mt-4">Design</button> */}
          </Col>
          <Col >
          <div id="myDIV">
              <h1 >dasfdsfa</h1>
               
        
            
            {/* <h4 className="font-face-mulish-sh1 mt-4">Frontend UI Developer</h4>
            <h4 className="font-face-mulish-sh2 mt-4">Proficient understanding of web markup, including HTML5, CSS3 Experience in Bootstrap, Media Query</h4>
            <h4 className="font-face-mulish-sh1 mt-4">Frontend UI Developer</h4>
            <h4 className="font-face-mulish-sh2 mt-4">Proficient understanding of web markup, including HTML5, CSS3 Experience in Bootstrap, Media Query</h4>
            <h4 className="font-face-mulish-sh1 mt-4">Frontend UI Developer</h4>
            <h4 className="font-face-mulish-sh2 mt-4">Proficient understanding of web markup, including HTML5, CSS3 Experience in Bootstrap, Media Query</h4>
            <h4 className="font-face-mulish-sh1 mt-4">Frontend UI Developer</h4>
            <h4 className="font-face-mulish-sh2 mt-4">Proficient understanding of web markup, including HTML5, CSS3 Experience in Bootstrap, Media Query</h4>
            <h4 className="font-face-mulish-sh1 mt-4">Frontend UI Developer</h4>
            <h4 className="font-face-mulish-sh2 mt-4">Proficient understanding of web markup, including HTML5, CSS3 Experience in Bootstrap, Media Query</h4> */}
            
          </div>
          
          </Col>

        </Row>
        <Helmet>
          <script src={withPrefix('script.js')} type="text/javascript" ></script>
        </Helmet>
      </div>

    </Layout>

  )
}

export default About



