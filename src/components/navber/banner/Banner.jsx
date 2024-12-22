import React from 'react'
import "./banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import images7 from "../../../assets/images7.png"


const Banner = () => {
  return (
    <section id='banner_main'>
      <Container>
        <Row>
          <Col lg={5}>
          <div className="one">
            <h4>Computer-controlled digital transistorized with electronic advance</h4>
            <h2>Honda CBR 300R</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button>Purchase</button>
          </div>
          </Col>
          <Col lg={{span:6, offset:1}}>
          <div className="two_main">
           <img src={images7} alt="" />
            
            
          </div>
          </Col>
        </Row>
       
      </Container>
    </section>
  )
}

export default Banner
