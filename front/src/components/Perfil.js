import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

export class Perfil extends Component {
    render() {
        return (
            <Container fluid= {true}> 
            <Row >
                <Col md={4}>
                    <Card>

                    
                    <Row >
                        <Col>holas</Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            ess
                        </Col> 
                        <Col md={10}>
                            fd
                        </Col> 
                    </Row>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card>
                    <Row><Col>dddd</Col></Row>
                    <Row><Col>kkk</Col></Row>
                    <Row><Col>qqqq</Col></Row>
                    </Card>
                </Col>
            </Row>
            </Container>

        )
    }
}

export default Perfil
