import React, { Component, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import gql from 'graphql-tag'
import StarRating from 'react-svg-star-rating'
import '../css/Calificar.scss';
import PerfectScrollbar from 'react-perfect-scrollbar'

var persona = {
    id: 0,
    nombre: '',
    email: '',
    contrasena: '',
    genero: '',
    empresa: '',
    phone: '',
    descripcion: 'hola',
}
const QUERY = gql`
    {
        personas{
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

// buscador https://codepen.io/MilanMilosev/pen/JdgRpB

function Lista(props) {
    const [filt, setState] = useState('')

    const setDesc = (e) => {
        const a = e.target.value
        setState(a);
    }
    const expand = () => {
        document.getElementById("search-btn").classList.toggle("close");
        document.getElementById("search-input").classList.toggle("square");
        setState('');
    };
    const { loading, data } = useQuery(QUERY)
    if (loading) return <h1>Cargando...</h1>
    return (
        <div>
            <form style={{ height: '50px' }} id="content" class='centrar-h forma'>
                <input type="text" name="input" class="input" id="search-input" onChange={setDesc} />
                <button type="reset" class="search" id="search-btn" onClick={expand}></button>
            </form>
            <PerfectScrollbar>
                <ListGroup variant="flush">{data.personas.filter(ele => (ele.nombre.toLowerCase().includes(filt.toLowerCase()))).map((persona) => (
                    <ListGroup.Item action variant='dark' className="iteml" value={persona.id} onClick={props.seleccion}>{persona.nombre}<span class="Iconos_Perfiles"></span></ListGroup.Item>
                ))}
                </ListGroup>
            </PerfectScrollbar>
        </div>
    );

}


export default function Calificar(props) {
    var uid=props.uid
        console.log(uid)
        const { data, loading, error, refetch } = useQuery(gql`
        
            query Persona($id:Int!){
            persona(id: $id){
            id
            nombre
            email
            contrasena
            genero
            empresa
            phone
            descripcion
            calificacion
            numCal
            skills
            }
        }`,{variables:{id:parseInt(uid)}})
    const seleccion = (e) => {
        const id = e.target.value
        console.log(id);
        refetch({variables:{uid:id}}).then(datos=>{
            persona=datos.data.persona;
            console.log(datos.data.persona);
        });
    }


        // this.state = {
        //     calificacion: null
        // }

        // const oClick = (value) => {
        //     this.setState({ calificacion: value })
        // }
        if (loading) return <h1>Cargando...</h1>
        if (error) { console.log(error);}
        console.log(data);
        persona = data?data.persona:{};
        return (
            <div class='calificar-module'>
                <Container bsPrefix='lateral'>

                    <Row >
                        <Col md={3} className='lateral content'>
                            <Lista uid= {uid} seleccion={seleccion} />
                        </Col>
                        <Col md={5} >
                            <Card className='card-profile centrado' >
                                <div class='profile-image'>
                                    <img src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
                                </div>
                                <Row className='profile'>
                                    <Col className="calificacion">
                                        <h1>{persona.nombre}</h1>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <div class='centrado-h fit'  >
                                <StarRating size="30" count="5" innerRadius="25" activeColor='#ffd055' hoverColor='#ffd055' isHalfRating='true' handleOnClick={(rating) => { console.log(rating) }} />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        )

}
