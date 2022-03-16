import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Span} from "react-bootstrap";
import * as footerStyle from "../styles/Footer.module.css"

const Footer = ()=>{
    return(
        <footer className={footerStyle.footer}>
            <Container>
                <div className="row" style={{
                    "margin-top": '100px'
                }}>
                    <div className="col-md-5 col-sm-6">
                        <StaticImage src='../images/logo.png' alt='logo'/>
                        <p className={footerStyle.footertext} style={{
                            'margin-top':'16px'
                        }}>Lorem Ipsum is simply<br></br> dummy text of the printing<br></br> and typesetting industry</p>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h4 className={footerStyle.footerhead}>Company</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link className={footerStyle.footertext} to='/home'>Home</Link>
                            </li>
                            <li>
                                <Link className={footerStyle.footertext} to='/about'>About</Link>
                            </li>
                            <li>
                                <Link className={footerStyle.footertext} to='/'>Service</Link>
                            </li>
                            <li>
                                <Link className={footerStyle.footertext} to='/404'>Case Studies</Link>
                            </li>
                            <li>
                                <Link className={footerStyle.footertext} to='/Career'>Careers</Link>
                            </li>
                            <li>
                                <Link className={footerStyle.footertext} to='/404'>Blogs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h4 className={footerStyle.footerhead}>Services</h4>
                        <ul className="list-unstyled">
                            <li>
                                <p className={footerStyle.footertext}>Machine Learnig</p>
                            </li>
                            <li>
                                <p className={footerStyle.footertext}>Development</p>
                            </li>
                            <li>
                                <p className={footerStyle.footertext}>Mobile applications</p>
                            </li>
                            <li>
                                <p className={footerStyle.footertext}>Design</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h4 className={footerStyle.footerhead}>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>
                                <StaticImage src="../images/mail.png"></StaticImage>
                                <p className={footerStyle.footertext}>info@techechelons.com</p>
                            </li>
                            <li>
                                <StaticImage src="../images/phone.png"></StaticImage>
                                <p className={footerStyle.footertext}>+91 9535954894</p>
                            </li>
                            <li>
                                <StaticImage src="../images/locate.png"></StaticImage>
                                <p className={footerStyle.footertext}>WeWork, Pune</p>
                            </li>
                        </ul>
                    </div>   
                </div>
                <Row>
                <hr className={footerStyle.hr}></hr>
                </Row>
                <div className="footer-bottom" style={{
                    'margin':'0px'
                                    }}>
                <Row className="">
                            <Col className="col-md-3">
                            <Row className="justify-content-between">
                            <Col className={footerStyle.footerimg}><StaticImage src="../images/fb.png"></StaticImage></Col>
                            <Col className={footerStyle.footerimg}><StaticImage src="../images/insta.png"></StaticImage></Col>
                            <Col className={footerStyle.footerimg}><StaticImage src="../images/ld.png"></StaticImage></Col>
                            <Col className={footerStyle.footerimg}><StaticImage src="../images/ytb.png"></StaticImage></Col>
                            </Row>
                            </Col>
                            
                            
                        <Col>
                                <p className={footerStyle.footerbtm}>© 2021 Techechelons Infosolutions Pvt Ltd. All right reserved.</p>    
                        </Col>
                        <Col>
                            <p className={footerStyle.footerbtm}>Privacy Policy</p>   
                        </Col>
                        </Row> 
                </div>
            </Container>
        </footer>
    )
}

export default Footer