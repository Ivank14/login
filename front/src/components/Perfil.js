import React, { Component, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import history from '../history';
import '../css/Perfil.scss';
import {MDBIcon} from 'mdbreact'
import "mdbreact/dist/css/mdb.css"
import {Redirect } from 'react-router-dom'
import StarRating from 'react-svg-star-rating'

export class Circle extends Component {

    
        constructor(props) {
          super(props);
        }
  render() {
      return ( 
      <svg viewBox="0 0 36 36" class={"circular-chart "+this.props.className}>
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle" style={{stroke: this.props.color}}
        stroke-dasharray={ this.props.value +", 100"}
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">{this.props.name}</text>
    </svg>
    );}
}
export default function Perfil(props) {
    const uid=props.uid
    const QUERY = gql`
    {
        persona(id: ${uid}){
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
    mutation CambiarDesc ($nuevaDescripcion: String!){
        cambiarDescripcion(id: ${uid}, nuevaDescripcion: $nuevaDescripcion){
        id
        success
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
    // console.log(localStorage.getItem('token'))
    const { data, loading, error } = useQuery(QUERY)
    const [{ enable, changer }, setState] = useState({ enable: false, changer: 'edit' })
    const [update, {data: data2}] = useMutation(MUTATION)
    const change = () => {
        if (!enable)
            setState({ enable: !enable, changer: 'save' });
        else{
            setState({ enable: !enable, changer: 'edit' });
            update({variables:{nuevaDescripcion: persona.descripcion}})
        }
    }

    const setDesc = (e) => {
        const a = e.target.value
        persona.descripcion = a
        
        setState({ enable: enable, changer: changer });
    }

    if (loading) return <h1>Cargando...</h1>
    if (error) { console.log(error); return <Redirect to="/perfil"/>}
    
    console.log(data2)
    if(data.persona) persona = data.persona;
    return (
        <div class='perfil-module'>
        <Container bsPrefix="grid"  >
            <Row  >
                <Col md={4} className='fill'>
                    <Card style= {{background:'black'}}>
                        <div class='profile-image'>
                            <img src = "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"/>
                        </div>
                        <Row className='profile' >
                            <Col md={2} className = "opciones">

                            </Col>
                            <Col md={10} className = "calificacion">
                                <h1>{persona.nombre}</h1>
                        
                                <div class='centrado-h fit'  >
                            <StarRating size="30" count="5" innerRadius="25" activeColor='#ffd055'hoverColor='#ffd055' isHalfRating='true' handleOnClick={(rating) => { console.log(rating) }} className='fit' />
                        </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col md={8} className="lp-l fill">
                    <Card >
                        <div class="card-header">
                            <h2>Profile Info</h2>
                        </div>
                        <div class='card-body'>
                            
                            <Row style={{ height: '72%', color: '#61dafb' }}>
                                <Col className="rb-1 iconos" md={6}>    
                                <Row>
                                    <MDBIcon icon='id-card'/><h4>{persona.id}</h4><br/>
                                </Row>    
                                <Row>
                                    <MDBIcon icon='at'/><h4>{persona.email}</h4><br/>
                                </Row> 
                                <Row>
                                    <MDBIcon icon='briefcase'/><h4>{persona.empresa}</h4><br/>                                    
                                </Row> 
                                <Row>
                                    <MDBIcon icon='birthday-cake'/><h4>{}h</h4><br/>                                                      
                                </Row>  
                                <Row>
                                    <MDBIcon icon='transgender'/><h4>{persona.genero ? <span>Hombre</span> : <span>Mujer</span>}</h4><br/>
                                </Row> 
                                <Row>
                                    <MDBIcon icon='phone'/><h4>{persona.phone}</h4><br/>
                                </Row>
                                </Col>
                                <Col md={6} className="skills">
                                    <Row style={{height: '10%'}}>
                                        <b>Skills</b>
                                    </Row>
                                    <Row style={{height: '45%'}}>
                                        <Col md={4} >
                                        <Circle name='Py' value= {50} color='#306998' className="centrado-v" ></Circle>
                                        </Col>
                                        <Col md={4} >
                                        <Circle name='Js' value= {50} color=' #f0db4f ' className="centrado-v"></Circle>                                          
                                        </Col>
                                        <Col md={4} >
                                        <Circle name='R' value= {50} color='#BFC2C5' className="centrado-v"></Circle>                                          
                                        </Col>
                                    </Row>
                                    <Row style={{height: '45%'}}>
                                        <Col md={4} >
                                        <Circle name='Html' value= {50} color='#e44d26' className="centrado-v"></Circle>
                                        </Col>
                                        <Col md={4} >
                                        <Circle name='Rct'value= {50} color='#61dbfb' className="centrado-v"></Circle>                                          
                                        </Col>
                                        <Col md={4} >
                                        <Circle name='Gql' value= {50} color='rgb(229, 53, 171)' className="centrado-v"></Circle>                                          
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className = 'tb-1 desc' style={{ height: '25%', color: '#61dafb' }}>
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
        </div>
    )
}
