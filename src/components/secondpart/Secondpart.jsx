import React from 'react'
import "./secondpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images11 from "../../assets/images11.png"
import images12 from "../../assets/images12.png"
import images13 from "../../assets/images13.png"


const Secondpart = () => {
  return (
    <section id='second'> 
        <Container>
            <Row>
            <Col lg={{span:6, offset:3}}>
          <div className="six">
            <h2>Latest News</h2>
           
         
          </div>
          </Col>
            </Row>

            <Row>
          <Col lg={4}>
          <div className="seven">
            <img src={images11} alt="" />
            <h2>Ducati XDIAVEL S-73</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
            <button>Read More</button>

          </div>
          </Col>
          <Col lg={4}>
          <div className="seven">
            <img src={images12} alt="" />
            <h2>FMotorcycles & Scooters</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
            <button>Read More</button>


          </div>
          </Col>
          <Col lg={4}>
          <div className="seven">
            <img src={images13} alt="" />
            <h2>2021 Honda CBR500R</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
            <button>Read More</button>


          </div>
          </Col>
       
        </Row>
        </Container>
    </section>
  )
}

export default Secondpart
