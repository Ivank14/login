import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import history from '../history';

export class Perfil extends Component {
    render() {
        return (
            <div class='wrapper'>
            <Container fluid= {true} style={{height:'100%'}}>
            <Row style={{height:'100%'}}>
                <Col md={4}>
                    <Card style={{height:'100%'}}>

                    
                    <Row className='h-50'>
                        <Col>holas</Col>
                    </Row>
                    <Row className='h-50'>
                        <Col md={3}>
                            ess
                        </Col> 
                        <Col md={9}>
                            <h1>Ivank Montes</h1>
                            <h4>1016098147</h4>
                        </Col> 
                    </Row>
                    </Card>
                </Col>
                <Col md={8} style={{height:'100%'}}>
                    <Card style={{height:'100%'}}>
                    <Row style={{height:'30%'}}> <Col>dddd</Col></Row>
                    <Row style={{height:'50%', color:'#61dafb'}}><Col>kkk</Col></Row>
                    <Row style={{height:'20%'}}><Col>qqqq</Col></Row>
                    </Card>
                </Col>
            </Row>
            </Container>
            </div>

        )
    }
}

export default function(){
    
}
