import React from 'react'
import "./firstpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images8 from "../../assets/images8.png"
import images9 from "../../assets/images9.png"
import images10 from "../../assets/images10.png"

const Firstpart = () => {
  return (
    <section id='first'>
        <Container>
            <Row>
            <Col lg={{span:6, offset:3}}>
          <div className="two">
            <h2>Fetured Bikes In This Year</h2>
            <p>Best bike collection</p>
         
          </div>
          </Col>
            </Row>

            <Row>
                <Col lg={4}>
                <div className="three">
                    <img src={images8} alt="" />

                </div>
                </Col>
                <Col lg={4}>
                <div className="three">
                    <img src={images9} alt="" />

                </div>
                </Col>
                <Col lg={4}>
                <div className="three">
                    <img src={images10} alt="" />

                </div>
                </Col>
            </Row>

           
        </Container>
    </section>
  )
}

export default Firstpart
