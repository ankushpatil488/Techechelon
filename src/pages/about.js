
import React from "react";
import { Link } from "gatsby";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, PlaceholderButton } from 'react-bootstrap';

import '../fonts/aleo/Aleo-Regular.ttf';
import '../styles/about.scss';
import ceo from '../images/ceo.png';
import developer from '../images/developer.png';
import finance from '../images/finance.png';
import flag from '../images/flag.png';
import image1 from '../images/image1.png';
import bitmap1 from '../images/bitmap1.png';
import bitmap2 from '../images/bitmap2.png';
import bitmap3 from '../images/bitmap3.png';
import image5 from '../images/image5.png';
// import logo from '../images/logo.png';
import shape from '../images/shape.png';
import vp from '../images/vp.png';

import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
    <div>
      <div className="bgcolor">
        <div>
          <div>
            <Container>
              <Row className="pt-5">
                <Col>
                  <h1 className="font-face-aleo-h">This is Techechelons</h1>
                  <img src={shape} class="img-fluid" alt="Responsive image" ></img>
                </Col>
                <Col>
                  <h4 className="font-face-mulish-sh">Founded in 2012, we partners with tech brands and growing businesses to create simple, and scalable digital solutions.</h4>
                </Col>
              </Row>
            </Container>
          </div>
          <img src={image1} class="w-100 p-3"></img>
          <div className="mb-5">
            <Container className="mt-5">
              <Row>
                <Col className="d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <img src={bitmap1} className="text-center"></img>
                    <p className="text-center font-face-aleo-sh">100,000+</p>
                    <h6 className="font-face-mulish-sh">Work hours completed</h6>
                  </div>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <img src={bitmap2} className="text-center"></img>
                    <p className="text-center font-face-aleo-sh">12+</p>
                    <h6 className="font-face-mulish-sh">years of experience</h6>
                  </div>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <img src={bitmap3} className="text-center"></img>
                    <p className="text-center font-face-aleo-sh">5+</p>
                    <h6 className="font-face-mulish-sh">Countries Served</h6>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>


        </div>
        <div className="mb-5 mx-auto"><hr className="hr2"></hr></div>
        <Row><h1 className="text-center font-face-aleo-h">Our Mission</h1></Row>
        <div className="text-center "><img src={shape} className="img-fluid1" alt="Responsive image" ></img></div>


        <div>
          <Container>
            <Row className="pt-5">
              <Col>
                <img src={flag} class="img-fluid2" alt="Responsive image" ></img>
              </Col>
              <Col>
                <h4 className="font-face-mulish-sh">To ensure the contentment of customers and employees,by utilizing the perfectionist and systematic approach towards the accomplishment of tasks, development of products and delivery services.</h4>
              </Col>
            </Row>
          </Container>
        </div>

      </div>

      <div className="bgcolor1">
        <Container>
          <Row className="pl-10">
            <h1 className="font-face-aleo-h pt-5">Our values are the driving force behind everything we do at techechelons</h1>
          </Row>
        </Container>
        <Row >
          <Col className="text-center" >
            <img></img>
            <h4 className="font-face-mulish-h">Best practices</h4>
            <p className="font-face-mulish">We follow the best project <br></br>management practices to <br></br>ensure we deliver on time <br></br>and as per quality.</p>
          </Col>
        </Row>


        <div className="mb-5">
          <Container className="mt-5">
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <img></img>
                  <h4 className="font-face-mulish-h">24/7 customer support</h4>
                  <p className="font-face-mulish">Our representatives are always <br></br>there to answer your queries<br></br> as well as doubts, we never <br></br>sleep!!!</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <img></img>
                  <h4 className="font-face-mulish-h">Customer centric attitude </h4>
                  <p className="font-face-mulish">Our customers are the focal point  <br></br>to Techechelons & we work hard<br></br>to keep it more human & fewer<br></br>machines.</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <img></img>
                  <h4 className="font-face-mulish-h">Highly effective leadership</h4>
                  <p className="font-face-mulish">Our management believes in guiding <br></br>you to get the best possible results  <br></br>at all times.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>


        <Row >
          <Col className="text-center" >
            <img></img>
            <h4 className="font-face-mulish-h">Socially responsible attitude</h4>
            <p className="font-face-mulish">We believe in serving the society <br></br>as a whole by delivering what we<br></br>promise without fail.</p>
          </Col>
        </Row>

      </div>
      <div className="bgcolor">
        <Container><Row><h1 className="font-face-aleo-h pt-5 pl-5">Meet the people behind techechelons</h1></Row></Container>















        
        <div className="mb-5">
          <Container className="mt-5">
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <img src={ceo} className="text-center1"></img>
                  <h4 className="font-face-mulish-h">Amir Movafaghi</h4>
                  <p className="font-face-mulish-h1">CEO</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <img src={vp} className="text-center1"></img>
                  <h4 className="font-face-mulish-h">Neil Rahilly</h4>
                  <p className="font-face-mulish-h1">Vice President</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <img src={developer} className="text-center1"></img>
                  <h4 className="font-face-mulish-h">Amy Husan</h4>
                  <p className="font-face-mulish-h1">Developer</p>
                </div>
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <img src={finance} className="text-center1"></img>
                  <h4 className="font-face-mulish-h">Justin Lau<br></br>Finance</h4>
                  <p className="font-face-mulish-h1">Finance</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        
        <div className="bgcolor3">
           
            <Row className="row">
              <Col className="col1">
                <h2 className="font-face-aleo-sh">Ready to work with the best custom software development company?</h2>
                <button className="contact">Contact Us</button>
              </Col>
              <Col className="col2">
                <img src={image5} className="image5"></img>
              </Col>
            </Row>
        </div>
         


      </div>

      

    </div>
    </Layout>


  )
}

export default About



