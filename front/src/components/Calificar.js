import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'


export class Calificar extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row >
                    <Col md={6}>
                        <ListGroup variant="flush">
  <ListGroup.Item> Perfil1<span class="Iconos_Perfiles"></span></ListGroup.Item>
  <ListGroup.Item> Perfil2<span class="Iconos_Perfiles"></span></ListGroup.Item>
  <ListGroup.Item>Perfil3<span class="Iconos_Perfiles"></span></ListGroup.Item>
  <ListGroup.Item>Perfil4<span class="Iconos_Perfiles"></span></ListGroup.Item>
</ListGroup>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <Row><Col>calificacion actual</Col></Row>
                            <Row><Col>card imagen</Col></Row>
                            <Row><Col>calificar</Col></Row>
                        </Card>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Calificar
