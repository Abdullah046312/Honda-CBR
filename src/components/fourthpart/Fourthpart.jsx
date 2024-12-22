import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "./fourthpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images18 from "../../assets/images18.png"


const Fourthpart = () => {
  return (
    <section id='four'>
        <Container>
            <Row>
            <Col lg={{span:6, offset:3}}>
          <div className="six">
            <h2>Frequently Asked Questions</h2>
            
         
          </div>
          </Col>
            </Row>

            <Row>
              <Col lg={5}>
              <div className="eleven">
                <img src={images18} alt="" />

              </div>
              
              
              </Col>
              <Col lg={{span:5, offset:1}}>
              <div className="tweleve">
                
              <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What are the most important things I should
        know about riding a bike?</Accordion.Header>
        <Accordion.Body>
        Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How can I tell if my helmet is old and I need a 
        new one?</Accordion.Header>
        <Accordion.Body>
        Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>My bike has been in storage is it safe to ride?</Accordion.Header>
        <Accordion.Body>
        Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>My bike has been in storage is it safe to ride?</Accordion.Header>
        <Accordion.Body>
        Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

              </div>
              
              
              </Col>
            </Row>

           
        </Container>
    </section>
  )
}

export default Fourthpart
