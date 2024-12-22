import React from 'react'
import "./thirdpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images14 from "../../assets/images14.png"
import images15 from "../../assets/images15.png"
import images16 from "../../assets/images16.png"
import images17 from "../../assets/images17.png"

const Thirdpart = () => {
  return (
    <section id='third'>
        <Container>
            <Row>
           <Col lg={4}>
           <div className="ten">
            <img src={images14} alt="" />
           
              <p>Slate helps you see how
                many more days you need
                to work to reach your financial
                goal for the month and year.</p>
                <img src={images17} alt="" />
                <h4>Regina Miles</h4>
                <h5>Banker</h5>
         
       
           </div>
           </Col>
           <Col lg={4}>
           <div className="ten">
            <img src={images15} alt="" />
           
              <p>Slate helps you see how
                many more days you need
                to work to reach your financial
                goal for the month and year.</p>
                <img src={images17} alt="" />
                <h4>Regina Miles</h4>
                <h5>Banker</h5>
         
       
           </div>
           </Col>
           <Col lg={4}>
           <div className="ten">
            <img src={images16} alt="" />
           
              <p>Slate helps you see how
                many more days you need
                to work to reach your financial
                goal for the month and year.</p>
                <img src={images17} alt="" />
                <h4>Regina Miles</h4>
                <h5>Banker</h5>
         
       
           </div>
           </Col>
        
            </Row>

         
        </Container>
    </section>
  )
}

export default Thirdpart
