import React, { Component, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import history from '../history';

export class Perfil extends Component {
    render() {
        return (
            <div class='wrapper'>
                <Container fluid={true} style={{ height: '100%' }}>
                    <Row style={{ height: '100%' }}>
                        <Col md={4}>
                            <Card style={{ height: '100%' }}>


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
                        <Col md={8} style={{ height: '100%' }}>
                            <Card style={{ height: '100%' }}>
                                <Row style={{ height: '30%' }}> <Col>dddd</Col></Row>
                                <Row style={{ height: '50%', color: '#61dafb' }}><Col>kkk</Col></Row>
                                <Row style={{ height: '20%' }}><Col>qqqq</Col></Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default function () {
    const QUERY = gql`
    {
        me{
        id
        nombre
        email
        contrasena
        genero
        empresa
        phone
        descripcion
        }
    }`
    const MUTATION = gql`
    mutation cambio($id:Int!, $nuevaDescripcion: String!){
        cambiarDescripcion(id:$id, nuevaDescripcion: $nuevaDescripcion){
            success
            message
            id
        }
    }
    `
    const { data, loading, error } = useQuery(QUERY)
    const [cambio, { data: data2}] = useMutation(MUTATION)
    if (loading) return <h1>Cargando...</h1>
    if (error) {console.log(error)
    return<h1>Paila...</h1>}

    console.log(data)
    //const [{enable,desc}, setState]= useState({enable: false, desc: data.me.descripcion})
    const [enable, setState]= useState(false)
    const funct=()=>{
        setState(enable=>{
            
            return !enable;
        });
    }
    var contenido="";
    
    // const setDesc =(e)=>{
        
    //     setState(e);
    // }
    return (
        <div class='wrapper'>
            <Container fluid={true} style={{ height: '100%' }}>
                <Row style={{ height: '100%' }}>
                    <Col md={4}>
                        <Card style={{ height: '100%' }}>


                            <Row className='h-50'>
                                <Col>holas</Col>
                            </Row>
                            <Row className='h-50'>
                                <Col md={3}>

                                </Col>
                                <Col md={9}>
                                    <h1>{data.me.nombre}</h1>
                                    <h4>{data.me.id}</h4>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md={8} style={{ height: '100%' }}>
                        <Card style={{ height: '100%' }}>
                            <Row style={{ height: '30%' }}> <Col><h1>Email: {data.me.email}</h1>
                                <h1>Telefono: {data.me.phone}</h1></Col></Row>
                            <Row style={{ height: '50%', color: '#61dafb' }}><Col><h2>Empresa: {data.me.empresa}</h2>
                                <h2>Edad:</h2>
                                <h2>Genero: {data.me.genero ? <span>Hombre</span> : <span>Mujer</span>}</h2></Col></Row>
                            <Row style={{ height: '20%' }}>
                                <Col><button 
                                onClick={funct}
                                />
                                <h3>Descripcion:</h3>
                                <input
                                value={data.me.descripcion}  disabled={!enable} onChange={e=>contenido=e.target.value}
                            />
                                </Col>
                    </Row>
                    </Card>
                </Col>
            </Row>
            </Container>
            </div>

            )
    }
