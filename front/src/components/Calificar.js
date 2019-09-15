import React, { Component, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import StarRating from 'react-svg-star-rating'
import '../css/Calificar.scss';

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

// buscador https://codepen.io/MilanMilosev/pen/JdgRpB


const expand = () => {
    document.getElementById("search-btn").classList.toggle("close");
  document.getElementById("search-input").classList.toggle("square");
};

export class Calificar extends Component {
    render() {
        this.state = {
            calificacion: null
        }

        const oClick = (value) => {
            this.setState({ calificacion: value })
        }

        return (
            <div class='calificar-module'>
            <Container bsPrefix='grid'>
                <Row >
                    <Col md={6}>
                        
                        <form style = {{height: '50px'}} id="content" class='centrar-h forma'>
                            <input type="text" name="input" class="input" id="search-input" />
                            <button type="reset" class="search" id="search-btn" onClick={expand}></button>
                        </form>

                        <ListGroup variant="flush">
                            <ListGroup.Item> Perfil1<span class="Iconos_Perfiles"></span></ListGroup.Item>
                            <ListGroup.Item> Perfil2<span class="Iconos_Perfiles"></span></ListGroup.Item>
                            <ListGroup.Item>Perfil3<span class="Iconos_Perfiles"></span></ListGroup.Item>
                            <ListGroup.Item>Perfil4<span class="Iconos_Perfiles"></span></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md={6}>
                        <Card className='card-profile centrado-h' >
                            <div class='profile-image'>
                                <img src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
                            </div>
                            <Row className='profile' >
                                <Col md={2} className="opciones">

                                </Col>
                                <Col md={10} className="calificacion">
                                    <h1>{persona.nombre}</h1>
                                    <StarRating size="15" count="5" innerRadius="25" activeColor='#ffd055' hoverColor='#ffd055' isHalfRating='true' handleOnClick={(rating) => { console.log(rating) }} />
                                </Col>
                            </Row>
                        </Card>
                        <div class='centrado-h fit'  >
                            <StarRating size="30" count="5" innerRadius="25" activeColor='#ffd055' hoverColor='#ffd055' isHalfRating='true' handleOnClick={(rating) => { console.log(rating) }} className='fit' />
                        </div>

                    </Col>
                </Row>

            </Container>
            </div>
        )
    }
}

function Estrellitas() {

    const [cal, oClick] = useState(0)
    const est = []
    console.log(cal)
    if (cal != 0) {
        for (let index = 0; index < cal; index++)  est.push("i");
        return <>{est.map(() => <span >☆</span>)}</>
    }
    return <> <span onClick={oClick(1)}>☆</span><span onClick={oClick(2)}>☆</span><span onClick={oClick(3)}>☆</span><span onClick={oClick(4)}>☆</span><span onClick={oClick(5)}>☆</span></>
}

export default Calificar
