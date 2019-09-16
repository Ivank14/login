import React, { Component, useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import gql from 'graphql-tag'
import StarRating from 'react-svg-star-rating'
import '../css/Calificar.scss';
import PerfectScrollbar from 'react-perfect-scrollbar'




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
    
    return (
        <div>
            <form style={{ height: '50px' }} id="content" class='centrar-h forma'>
                <input type="text" name="input" class="input" id="search-input" onChange={setDesc} />
                <button type="reset" class="search" id="search-btn" onClick={expand}></button>
            </form>
            <PerfectScrollbar>
                <ListGroup variant="flush">{props.data.personas.filter(ele => (ele.nombre.toLowerCase().includes(filt.toLowerCase()))).map((personaA) => (
                    <ListGroup.Item action variant='dark' className="iteml"  value={personaA.id} onClick={()=>props.seleccion(personaA.id,personaA.nombre,personaA.calificacion)}>{personaA.nombre}<span class="Iconos_Perfiles"></span></ListGroup.Item>
                ))}
                </ListGroup>
            </PerfectScrollbar>
        </div>
    );

}


export default function Calificar(props) {
    const QUERY = gql`
    {
        personas{
        id
        nombre
        calificacion
        }
    }`
    const MUTATION_CALIFICAR = gql`
    mutation calificarSer($id:Int!, $calificacion:Float!){
        calificar(id:$id, calificacion: $calificacion)
    }`

    
    const { loading, data,refetch } = useQuery(QUERY)
    var persona = {
        id:0,
        nombre: '',
       calificacion: 0.0,
    }
    const [{
        id,
        nombre,
        calificacion,
       
    }, setPersona]= useState(persona)
    const [mutation, {data:dataMutation}]= useMutation(MUTATION_CALIFICAR,
        {onCompleted(d){
            console.log(d)
            refetch();
            setPersona({id:id,nombre:nombre,calificacion:d.calificar})

        }})
    if (loading) return <h1>Cargando...</h1>
    
    

        // const { data, loading, error, refetch } = useQuery(gql`
        
        //     query Persona($id:Int!){
        //     persona(id: $id){
            
        //     nombre
            
        //     calificacion
        //     numCal
            
        //     }
        // }`,{variables:{id:parseInt(uid)}})
    const seleccion = (id, nom, cal) => {

        setPersona({id:id,nombre:nom, calificacion:cal})
        // console.log('fuellamado')
        // refetch({variables:{uid:parseInt(id)}}).then(datos=>{
        //     if(datos.loading) return;
        //     persona=datos.data.persona;
        //     console.log(datos.data.persona);
        //});
    }
    

    function round5(x)
{
    var res = (x % 0.5) >= 0.25 ? parseInt(x / 0.5) * 0.5 + 0.5 : parseInt(x / 0.5) * 0.5;
    return res;
}

        // this.state = {
        //     calificacion: null
        // }

        // const oClick = (value) => {
        //     this.setState({ calificacion: value })
        // }
        // if (loading) return <h1>Cargando...</h1>
        // if (error) { console.log(error);}
        // console.log(data);
        // persona = data?data.persona:{};
        return (
            <div class='calificar-module'>
                <Container bsPrefix='lateral'>

                    <Row >
                        <Col md={3} className='lateral content'>
                            <Lista  seleccion={seleccion} data={data}/>
                        </Col>
                        <Col md={5} >
                            <Card className='card-profile centrado' >
                                <div class='profile-image'>
                                    <img src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
                                </div>
                                <Row className='profile'>
                                    <Col className="calificacion" >
                                        <h1>{nombre}</h1>
                                        <b>{calificacion.toFixed(1)}</b>
                                        <div class='centrado-h fit'  >
                                <StarRating size="30" count="5" innerRadius="25" activeColor='#ffd055' hoverColor='#ffd055' isHalfRating='true'  handleOnClick={(rating) => {  mutation({variables: {id:id,calificacion:rating}}) }} />
                                
                            </div>
                                    </Col>
                                </Row>
                                <Row>
                                
                                </Row>
                            </Card>
                        </Col>
                        
                    </Row>

                </Container>
            </div>
        )

}
