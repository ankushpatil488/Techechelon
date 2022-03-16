import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar,Button } from "react-bootstrap";
import * as navstyle from "../styles/navbar.module.scss"

// const Header = () => {
//     return ( 
//     <div className={styles.head}>
//         <header>
//             <nav>
//                 <div>
//                 <StaticImage src='../images/logo.png' alt='logo' width='154' height='40'/>
//                 </div>
//                 <div className="links"> 
//                     <Link to = "/404/" >
//                     Home
//                     </Link> 
//                     <Link to = "/404" > 
//                     About Us
//                     </Link> 
//                     <Link to = "/404" > 
//                     Services 
//                     </Link> 
//                     <Link to = "/404" > 
//                     Case Studies 
//                     </Link> 
//                     <Link to = "/404" >
//                     Careers 
//                     </Link> 
//                     <Link to = "/404" className={styles.btn}>
//                     Contact Us 
//                     </Link> 
//                 </div> 
//             </nav> 
//         </header>
//         </div>
//     )
// }

const Header = ()=>{
return (
    
        <Navbar expand='lg'>
            <Container>
                <Navbar.Brand>
                    <Container>
                        <StaticImage src='../images/logo.png' alt='logo'/>
                    </Container>
                </Navbar.Brand>
                        <Nav>
                            <Link to="/home" className={navstyle.navcolor}>Home</Link>
                            <Link to="/about" className={navstyle.navcolor}>About us</Link>
                            <Link to="/" className={navstyle.navcolor}>Services</Link>
                            <Link to="/" className={navstyle.navcolor}>Case Studies</Link>
                            <Link to="/Career" className={navstyle.navcolor}>Careers</Link>
                            <Button href='/' className={navstyle.navcolor}>Contact us</Button>
                        </Nav>
                   
            </Container>
        </Navbar>
   
)
}

export default Header