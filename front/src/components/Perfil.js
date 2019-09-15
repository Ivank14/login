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
      <text x="18" y="20.35" class="percentage">JS</text>
    </svg>
    );}
}
export default function Perfil() {
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
                        
                                <div class='centrado-h fit'  >
                            <StarRating size="30" count="5" innerRadius="25" activeColor='#ffd055' isHalfRating='true' handleOnClick={(rating) => { console.log(rating) }} className='fit' />
                        </div>
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
                                        <Circle value= {50} color='cyan' className="centrado-v" ></Circle>
                                        </Col>
                                        <Col md={4} >
                                        <Circle value= {50} color='cyan' className="centrado-v"></Circle>                                          
                                        </Col>
                                        <Col md={4} >
                                        <Circle value= {50} color='cyan' className="centrado-v"></Circle>                                          
                                        </Col>
                                    </Row>
                                    <Row style={{height: '45%'}}>
                                        <Col md={4} >
                                        <Circle value= {50} color='cyan' className="centrado-v"></Circle>
                                        </Col>
                                        <Col md={4} >
                                        <Circle value= {50} color='cyan' className="centrado-v"></Circle>                                          
                                        </Col>
                                        <Col md={4} >
                                        <Circle value= {50} color='cyan' className="centrado-v"></Circle>                                          
                                        </Col>
                                    </Row>
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
