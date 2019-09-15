import React, { Component, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import history from '../history';
import '../css/Perfil.css';
import {MDBIcon} from 'mdbreact'
import "mdbreact/dist/css/mdb.css"


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
    var persona = {
        id: '',
        nombre: '',
        email: '',
        contrasena: '',
        genero: '',
        empresa: '',
        phone: '',
        descripcion: 'hola',
    }
    const { data, loading, error } = useQuery(QUERY)
    const [{ enable, changer }, setState] = useState({ enable: false, changer: 'edit' })
    const change = () => {
        if (!enable)
            setState({ enable: !enable, changer: 'save' });
        else
            setState({ enable: !enable, changer: 'edit' });
    }

    const setDesc = (e) => {
        const a = e.target.value
        persona.descripcion = a
        setState({ enable: enable, changer: changer });
    }

    if (loading) return <h1>Cargando...</h1>
    if (error) { console.log(error); return }
    if(data.me) persona = data.me;
    return (
        <Container bsPrefix="grid"  >
            <Row  >
                <Col md={4}>
                    <Card style= {{background:'black'}}>
                        <div class='profile-image'>
                            <img src = "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"/>
                        </div>
                        <Row className='profile' >
                            <Col md={2} className = "opciones">

                            </Col>
                            <Col md={10} className = "calificacion">
                                <h1>{persona.nombre}</h1>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col md={8} className="lp-l">
                    <Card >
                        <div class="card-header">
                            <h2>Profile Info</h2>
                        </div>
                        <div class='card-body'>
                            
                            <Row style={{ height: '72%', color: '#61dafb' }}>
                                <Col className="rb-1 iconos" md={6}>    
                                <Row>
                                    <MDBIcon icon='id-card'/><h4>{persona.id}</h4><br></br> 
                                </Row>    
                                <Row>
                                    <MDBIcon icon='at'/><h4>{persona.email}</h4><br></br>
                                </Row> 
                                <Row>
                                    <MDBIcon icon='briefcase'/><h4>{persona.empresa}</h4><br></br>                                    
                                </Row> 
                                <Row>
                                    <MDBIcon icon='birthday-cake'/><h4>{}h</h4><br></br>                                                      
                                </Row>  
                                <Row>
                                    <MDBIcon icon='transgender'/><h4>{persona.genero ? <span>Hombre</span> : <span>Mujer</span>}</h4><br></br>
                                </Row> 
                                <Row>
                                    <MDBIcon icon='phone'/><h4>{persona.phone}</h4><br></br>
                                </Row>
                                </Col>
                                <Col md={6}>
                                </Col>
                            </Row>
                            <Row className = 'tb-1' style={{ height: '25%', color: '#61dafb' }}>
                                <Col>
                                    <h5>Descripcion:</h5>
                                    <textarea value={persona.descripcion} disabled={!enable} onChange={setDesc} class='big-text' />
                                    <MDBIcon icon={changer}  onClick={change} className='editer'/>                                        
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
