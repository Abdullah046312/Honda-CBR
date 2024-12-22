import React from 'react'
import "./footerpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images19 from "../../assets/images19.png"
import images20 from "../../assets/images20.png"

const Footerpart = () => {
  return (
   <section id='footer'>
    <Container>
        <Row>
            <Col lg={5}>
            <div className="fourteen">
                 <h2>Download Now</h2>
                <p>License</p>
                
            </div>
            <div className="fiveteen">
                <h4>About</h4>
                <h4>Features</h4>
                <h4>Pricing</h4>
                <h4>Careers</h4>
                <h4>Help</h4>
                <h4>Privacy Policy</h4>
            </div>
            <div className="sixteen">
                <h4>© 2020 bike. All rights reserved</h4>
            </div>
            </Col>

            <Col lg={{span:2, offset:4}}>
            <div className="seventeen">
                <h4>Get the App</h4>

            </div>
            <div className="eightteen">
                <img src={images19} alt="" />
                <img src={images20} alt="" />
            </div>
            
            </Col>
            
        </Row>
    </Container>
   </section>
  )
}

export default Footerpart
