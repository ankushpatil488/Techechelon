
import { graphql} from "gatsby"
import React from "react"
import { StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as styles from "../styles/index.module.scss"
import BackgroundImage from "gatsby-background-image"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, column } from "react-bootstrap"
import Image from 'react-bootstrap/Image'

const Index =(props)=> {
      
  return (
    <Layout>
    
     <div className={styles.service}>
     <div>
     <Container>
     <Row className="pt-5">
     <h1 className={styles.title}>Why opt for our javascript development service?</h1>
     <StaticImage src='../images/Shape.png' alt='logo' className={styles.shape}/>
     
     </Row>
     <Row className="mt-3" style={{
       "margin-bottom":"120px"
     }}>
          <div className={styles.tagline}>Our development process is always backed up by the latest technologies. We build robust, <br></br>future-proof products that improve functionality, and can evolve with time.</div>
     </Row>
     </Container>
     </div>
     <div>
              <Container>
              <div className={styles.playbackContainer}>
                <StaticImage src="../images/playback.png" alt='playback'/>
              </div>
              <div className={styles.laptop}>
                <StaticImage src="../images/laptop.png" alt='playback'/>
              </div>
          </Container>
     </div>
       
        <div>
          <h1 className={styles.javascript}>Our core competence in javascript frame work</h1>
          <h2 className={styles.js2}> 
              <p>Javascript development solutions can change the game for you if you are in<br></br> search of universal solutions, which are fast and responsive.</p>
         </h2>
          </div>
          <div className={styles.wrapper}>
            <div className="Column">
              <hr className={styles.hr}></hr>
              <p className={styles.gridbody}>Jquery development</p>
              <Row>
              <div className={styles.gridbodydata}> 
              <p>JQuery is a lightweight library and light plugins give ample flexibility to create world-class solutions.</p>
            </div>
              </Row>
             
            </div>
            <div className="Column">
              <hr className={styles.hr}></hr>
              <p className={styles.gridbody}>Angular JS development</p>
              <div className={styles.gridbodydata}> 
              <p>Angular.js is a javascript toolkit, which is fully extendible and integrates perfectly with other libraries.</p>
            </div>
            </div>
            
            <div className="Column">
              <hr className={styles.hr}></hr>
              <p className={styles.gridbody}>React JS development</p>
              <div className={styles.gridbodydata}> 
              <p>React unleashes the quickest and easiest way develop components of projects that are self-sufficient and can be integrated to form complex solutions.</p>
            </div>
            </div>
            
            <div className="col">
              <hr className={styles.hr}></hr>
              <p className={styles.gridbody}>Meter Js development</p>
              <div className={styles.gridbodydata}> 
              <p>React unleashes the quickest and easiest way develop components of projects that are self-sufficient and can be integrated to form complex solutions.</p>
            </div>
            </div>
            
            <div className="col">
              <hr className={styles.hr}></hr>
              <p className={styles.gridbody}>Node Js development</p>
              <div className={styles.gridbodydata}> 
              <p>Stability and reliability come in our package of node.js development services.</p>
            </div>
            </div>
            <div className="col">
              <hr className={styles.hr}></hr>
              <p className={styles.gridbody}>Vue JS development</p>
              <div className={styles.gridbodydata}> 
              <p>Less opinionated and more verbose, this JS framework can be considered the most suitable base for progressive web apps.</p>
            </div></div>
          </div>
          <div style={{
            marginLeft: '80px', marginRight: '80px', marginTop:'120px'
          }}>
          <hr className={styles.hr2}></hr>
          </div>
          <Container>
          <Row>
          <h1 className={styles.title2}>Why choose our javascript service for your website?</h1>
          <h2 className={styles.tagline2}>Being a client-oriented corporation, we make sure the product quality, delivery time and services are always maintained for the highest satisfaction of our customers.</h2>
          <h3 className={styles.title3}>We excel in</h3>
          </Row>
          </Container>
          
         
          <section style={{
            width: '100%',
            marginLeft:'80px'
          }}>
            <div>
             <span className={styles.path}>
             <StaticImage src="../images/Path.png" />
             </span>
             <span className={styles.excel}>
             Customized solutions to your website requirements.
             </span>
            </div>
            
            <div>
             <span className={styles.path}>
             <StaticImage src="../images/Path.png" />
             </span>
             <span className={styles.excel}>
             Spam resistant wordpress website with extended functionalities.
             </span>
            </div>
            <div>
             <span className={styles.path}>
             <StaticImage src="../images/Path.png" />
             </span>
             <span className={styles.excel}>
             Designing and developing flexible websites that can incorporate a new feature or functionality at any time.
             </span>
            </div>
            <div>
             <span className={styles.path}>
             <StaticImage src="../images/Path.png" />
             </span>
             <span className={styles.excel}>
             We value your timelines and deliver the best product within the promised brackets.
             </span>
            </div>
          </section>
          <div className={styles.container}>
               
          
                {/* <BackgroundImage
                  fluid={props.data.indexImage.childImageSharp.fluid}
                  className={styles.bgimage}
                >
               <h1 className={styles.title4}>Industry Experience</h1>
               <div><StaticImage src='../images/shape.png' alt='logo' className={styles.shape2}/></div>
               <h2 className={styles.tagline3}>Our team is specialized in a wide array of industry verticals</h2>
               <div className={styles.row2}>
               <div className={styles.column2}>
               <StaticImage src="../images/Oval.png" className={styles.svcimg}/>
               <span className={styles.svctech}>Banking &<br></br> Finance</span> 
           </div>
                <div className={styles.column2}>
                    <StaticImage src="../images/Oval.png" className={styles.svcimg}/>
                    <span className={styles.svctech}>Education and<br></br>E-Learning</span> 
                </div>
            
            <div className={styles.column2}>
                    <StaticImage src="../images/Oval.png" className={styles.svcimg}/>
                    <span className={styles.svctech}>Healthcare</span> 
                </div>

                <div className={styles.column2}>
                    <StaticImage src="../images/Oval.png" className={styles.svcimg}/>
                    <span className={styles.svctech}>E-commerce</span> 
                </div>
            
            <div className={styles.column2}>
                    <StaticImage src="../images/Oval.png" className={styles.svcimg}/>
                    <span className={styles.svctech}>Travel &<br></br>Tourism</span> 
                </div>
            
                <div className={styles.column2}>
                    <StaticImage src="../images/Oval.png" className={styles.svcimg}/>
                    <span className={styles.svctech}>ISVs & Product<br></br>Companies</span> 
                </div>

            <div className={styles.column2}>
                    <StaticImage src="../images/Oval.png" className={styles.svcimg}/>
                    <span className={styles.svctech}>Retail</span> 
                </div>
               </div>
               <div style={{display:'inline'}}>
               <hr className={styles.hr3}></hr>
               <h1 className={styles.javascript2}>Technologies we serve</h1>
               <div><StaticImage src='../images/shape.png' alt='logo' className={styles.shape3}/></div>
               </div>
               <div className={styles.container2} >
               <ul>
               <h1 className={styles.tab}>Front-End</h1>
              <h1 className={styles.tab}>Back-End</h1>
              <h1 className={styles.tab}>Mobile</h1>
              <h1 className={styles.tab}>Machine Learning</h1>
               </ul>
               </div>
              </BackgroundImage> */}
      
          </div>
          <div style={{width:'100%'}}>
          
            <h1 className={styles.title2} style={{
              "margin-left": "90px"
            }}>Industry Specific Problems Solved with Javascript</h1>
            <div>
              <div className={styles.row}>
                 <div className={styles.column}>
                 <div><StaticImage src="../images/service1.png" style={{
                   position:"relative"
                 }}/></div>
                 <p className={styles.tech}>#Front-end</p>
                 <h1 className={styles.post}>Is Node JS good for setting up your online business?</h1>
                 <span className={styles.date}>February 10, 2021      |  </span>
                 <span className={styles.date}>6 Min Read</span>
                
                 </div>
                 <div className={styles.column}>
                 <StaticImage src="../images/service2.png"/>
                 <p className={styles.tech}>#Front-end</p>
                 <h1 className={styles.post}>Is Node JS good for setting up your online business?</h1>
                 <span className={styles.date}>February 10, 2021      |  </span>
                 <span className={styles.date}>6 Min Read</span>
                 
                 </div>
                 <div className={styles.column}>
                 <StaticImage src="../images/service3.png"/>
                 <p className={styles.tech}>#Front-end</p>
                 <h1 className={styles.post}>Is Node JS good for setting up your online business?</h1>
                 <span className={styles.date}>February 10, 2021      |  </span>
                 <span className={styles.date}>6 Min Read</span>
                 </div>
              </div>
         
            </div>
                
          </div>
          
        
     </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
      query{
        indexImage: file(relativePath:{eq:"white-back.jpg"}){
          childImageSharp{
            fluid(maxWidth: 1800){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
`;

// export const pageQuery2 = graphql`
//       query{
//         indexImage2: file(relativePath:{eq:"Oval.png"}){
//           childImageSharp{
//             fluid(maxWidth: 1800){
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
// `;

