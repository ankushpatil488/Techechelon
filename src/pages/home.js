
import React from "react";
import { Link } from "gatsby";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, PlaceholderButton } from 'react-bootstrap';

import '../fonts/aleo/Aleo-Regular.ttf';
import '../styles/home.scss';
import homeimg1 from '../images/home1.png';
import homeimg2 from '../images/home2.png';
import homeimg3 from '../images/home3.png';
import bitmap1 from '../images/Bitmap1.png';
import bitmap2 from '../images/Bitmap2.png';
import bitmap3 from '../images/Bitmap3.png';
import expedia1 from '../images/expedialogo.png';
import skyscanner1 from '../images/skyscannerlogo.png';
import rakutenviber1 from '../images/rakutenviberlogo.png';
import lemonade1 from '../images/lemonadelogo.png';
import uberlogo1 from '../images/uberlogo.png';
import ziprecruiter1 from '../images/ziprecruiterlogo.png';
import nskyscanner1 from '../images/nskyscannerlogo.png';
import rectangle from '../images/Rectangle.png';

import Layout from '../components/layout';

const HomePage = () => {
  return(
    <div className="bgcolor">
      <Layout>
      <div>
        <div>
          <Container>
            <Row className="pt-5">
              <Col>
                <h1 className="font-face-aleo-h">We make digital products stand out and stick around</h1>
                <h4 className="font-face-mulish-sh">We are a dynamic team of developers and designers, 
                with track record of building high-quality softwares.</h4>
                <button className="btn">Contact Us</button>
              </Col>
              <Col>
                <img src={homeimg1}></img>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <img></img>
        </div>
      </div>
      {/* Count */}
      <div className="mb-5">
        <Container className="mt-5">
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <div className="text-center">
              <img src={bitmap1} className="text-center"></img>
              <p className="text-center font-face-aleo-sh">232</p>
              <h6 className="font-face-mulish-sh">Happy clients</h6>
            </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <div className="text-center">
              <img src={bitmap2} className="text-center"></img>
              <p className="text-center font-face-aleo-sh">237</p>
              <h6 className="font-face-mulish-sh">Projects completed</h6>
            </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <div className="text-center">
              <img src={bitmap3} className="text-center"></img>
              <p className="text-center font-face-aleo-sh">08</p>
              <h6 className="font-face-mulish-sh">Years in experiance</h6>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* End of Count */}
      <div className="mb-5 mx-auto"><hr className="hr2"></hr></div>
      {/* Companies mention */}
      <div>
        <Container className="text-center mt-5">
          <h3 className="mb-5 mt-5 font-face-aleo-h">Trusted by over 200 forward-thinking companies</h3>
          <div className="mb-4">
            <Row>
              <Col><img src={expedia1}></img></Col>
              <Col><img src={skyscanner1}></img></Col>
              <Col><img src={rakutenviber1}></img></Col>
              <Col><img src={lemonade1}></img></Col>
            </Row>
          </div>
          <div className="mb-4">
            <Row>
              <Col><img src={uberlogo1}></img></Col>
              <Col><img src={ziprecruiter1}></img></Col>
              <Col><img src={nskyscanner1}></img></Col>
            </Row>
          </div>
          <div className="mb-4">
          <Link to="/about">View more</Link>
          </div>
        </Container>
      </div>
      {/* End of Companies mention */}
      <div className="mt-5"><hr className="hr2"></hr></div>
      {/* Work people */}
      {/* <div className="text-center mt-5">
        <div><h2>The work we do, and the people we help.</h2></div>
        <div>
          <img src={homeimg1}></img>
          <Row>
            <Col><h4>task.io - </h4></Col>
            <Col><p>Improving customer experience for a next-gen real estate platform.</p></Col>
          </Row>
        </div>
        <div>
        <img src={homeimg2}></img>
          <Row>
            <Col><h4>Mitram.in - </h4></Col>
            <Col><p>Improving customer experience for a next-gen real estate platform.</p></Col>
          </Row>
        </div>
        <div>
        <img src={homeimg3}></img>
          <Row>
            <Col><h4>Tap.pay - </h4></Col>
            <Col><p>Improving customer experience for a next-gen real estate platform.</p></Col>
          </Row>
        </div>
      </div> */}
      {/* End of Work people */}
      {/* Our capabilities */}
      <div  className="bgcolor-ourcap">
      <Container>
      <div className="mt-5 pt-5">
        <h2 className="font-face-aleo-h">Our capabilities</h2>
        <h4 className="font-face-mulish-sh">BigBinary specializes in all these services. We have worked with these technologies long enough to offer expert consulting.</h4>
        <Row className="mt-5">
          <Col>
            <div className="font-face-mulish">
              <h4 className="font-face-aleo-sh">Development</h4>
              <p><h5 className="font-face-mulish-h">Full stack development.</h5> We specialize in all services. We have worked with these technologies long enough to offer expert consulting.these</p>
              <p><h5 className="font-face-mulish-h">Content management system.</h5> We specialize in all services. We have worked with these technologies long enough to offer expert consulting.these</p>
              <p><h5 className="font-face-mulish-h">E-commerce.</h5> We specialize in all services. We have worked with these technologies long enough to offer expert consulting.these</p>
            </div>
          </Col>
          <Col>
            <div><img src={homeimg2}></img></div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div><img src={homeimg3}></img></div>
          </Col>
          <Col>
            <div className="font-face-mulish">
              <h4 className="font-face-aleo-sh">Machine learning</h4>
              <p><h5 className="font-face-mulish-h">Chatbot development.</h5> We specialize in all services. We have worked with these technologies long enough to offer expert consulting.these</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="font-face-mulish">
            <h4 className="font-face-aleo-sh">Mobile Application</h4>
              <p><h5 className="font-face-mulish-h">iOS development.</h5> We specialize in all services. We have worked with these technologies long enough to offer expert consulting.these</p>
              <p><h5 className="font-face-mulish-h">Android development.</h5> We specialize in all services. We have worked with these technologies long enough to offer expert consulting.these</p>
              <p><h5 className="font-face-mulish-h">Hybrid development.</h5> We specialize in all services. We have worked with these technologies long enough to offer expert consulting.these</p>
            </div>
          </Col>
          <Col>
            <div><img src={homeimg1}></img></div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col><div><img src={homeimg2}></img></div></Col>
          <Col>
            <div className="font-face-mulish"> <h4 className="font-face-aleo-sh">Design</h4>
              <p><h5 className="font-face-mulish-h">Mobile app UI.</h5> We specialize in all services. We have worked with these technologies long enough to offer expert consulting.these</p>
              <p><h5 className="font-face-mulish-h">CMS themes.</h5> We specialize in all services. We have worked with these technologies long enough to offer expert consulting.these</p>
              <p><h5 className="font-face-mulish-h">Responsive design.</h5> We specialize in all services. We have worked with these technologies long enough to offer expert consulting.these</p>
              <p><h5 className="font-face-mulish-h">Wire framing.</h5> We specialize in all services. We have worked with these technologies long enough to offer expert consulting.these</p>
              <p><h5 className="font-face-mulish-h">Prototyping.</h5> We specialize in all services. We have worked with these technologies long enough to offer expert consulting.these</p>
            </div>
          </Col>
        </Row>
      </div>
      </Container>
      </div>
      {/* Our capabilitites ended */}
      {/* Insights start */}
      <Container className="mt-5">
        <Row>
        
          <Col>
            <div>
              <h2 className="font-face-aleo-h">Techechelons insights to build better</h2>
            </div>
          </Col>
          <Col>
           
            <div>
              <Row>
              <Col><div><img src={rectangle}></img></div></Col>
              <Col><div>
                <p className="font-face-mulish">#Front-end</p>
                <p className="font-face-aleo">How To Check The Website Before Releasing It?</p>
              </div></Col>
              </Row>
            </div>
            <div>
            <Row>
              <Col><div><img src={rectangle}></img></div></Col>
              <Col><div>
                <p className="font-face-mulish">#Front-end</p>
                <p className="font-face-aleo">How To Check The Website Before Releasing It?</p>
              </div></Col>
            </Row>
            </div>
            <div>
            <Row>
              <Col><div><img src={rectangle}></img></div></Col>
              <Col><div>
                <p className="font-face-mulish">#Front-end</p>
                <p className="font-face-aleo">How To Check The Website Before Releasing It?</p>
              </div></Col>
            </Row>
            </div>
            <div className="text-center">
            <Link to="/about">View more</Link>
            </div>
          </Col>
          
        </Row>
      </Container>
      {/* Insights end */}
      {/* Our customers */}
      <div className="mt-5">
        <h2>Our customers us</h2>
        <img></img>
      </div>
      {/* Our customers end */}
      </Layout>
    </div>
  )
}

export default HomePage