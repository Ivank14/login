import React, { Component, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import StarRating from 'react-svg-star-rating'

export class Calificar extends Component {
    render() {
       this.state={
            calificacion:null
        }

        const oClick=(value)=>{
            this.setState({calificacion:value})
        }

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

                            <Row><Col>

<StarRating size="30" count="5" innerRadius="25" activeColor= '#ffd055' isHalfRating ='true' handleOnClick = {(rating) => {console.log(rating)}}/>

</Col></Row>
                            <Row><Col>card imagen</Col></Row>
                            <Row><Col>calificar</Col></Row>
                        </Card>
                    </Col>
                </Row>
            </Container>

        )
    }
}

function Estrellitas(){
    
    const [cal,oClick] = useState(0)
    const est=[]
    console.log(cal)
    if(cal!=0) { for (let index = 0; index < cal; index++)  est.push("i");
    return <>{est.map(()=><span >☆</span>)}</>
    }
    return <> <span onClick={oClick(1)}>☆</span><span onClick={oClick(2)}>☆</span><span onClick={oClick(3)}>☆</span><span onClick={oClick(4)}>☆</span><span onClick={oClick(5)}>☆</span></>
}

export default Calificar
