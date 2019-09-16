import React, { Component, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import '../css/Perfil.scss';
import {MDBIcon} from 'mdbreact'
import "mdbreact/dist/css/mdb.css"
import StarRating from 'react-svg-star-rating'

export class Circle extends Component {

    state={
        value:this.props.value,
        enable:this.props.enable
    }
    change=(e)=>{   
        const val = parseInt(e.target.value>0?e.target.value:0)
        this.setState({value:val}); 
        this.props.change(e.target.name, val);
    }    
        constructor(props) {
          super(props);
        }        
        render() {
      return ( 
          <>
      <svg viewBox="0 0 36 36" class={"circular-chart "+this.props.className}>
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle" style={{stroke: this.props.color}}
        strokeDasharray={ this.state.value +", 100"}
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" name='texto' class="percentage">{this.props.name}</text>
    
    
    </svg>
    <input class='circles-i centrado-v' name = {this.props.name} value={this.state.value}  onChange={this.change} disabled={!this.props.enable}/>
    </>
    );}
}

function round5(x)
{
    var res = (x % 0.5) >= 0.25 ? parseInt(x / 0.5) * 0.5 + 0.5 : parseInt(x / 0.5) * 0.5;
    return res;
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
        calificacion
        numCal
        skills
        }
    }`
    const MUTATION = gql`
    mutation CambiarDesc ($nuevaDescripcion: String!){
        cambiarDescripcion(id: ${uid}, nuevaDescripcion: $nuevaDescripcion){
        id
        success
        }
    }`
    const MUTATION_CIRCULITOS = gql`
    mutation CambiarSkills ($nuevasSkills: String!){
        cambiarSkills(id: ${uid}, nuevasSkills: $nuevasSkills){
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
        calificacion:'',
        numCal:'',
        skills:'',
        skill:{
            r:0,
            html:0,
            py:0,
            js:0,
            rct:0,
            graph: 0

        }
    }
    // formatoString: 'r;html;py;js;rct;graph'
    function mapSkills(){
        if(!persona.skills)
            persona.skills="10;40;70;54;67;90";
        var array=persona.skills.split(';');
        persona.skill={
            r:array[0],
            html:array[1],
            py:array[2],
            js:array[3],
            rct:array[4],
            graph: array[5]
        }
    }
    function skillsObjectToString(){
        if(!persona.skill) persona.skill= {
            r:0,
            html:0,
            py:0,
            js:0,
            rct:0,
            graph: 0

        };
        console.log(persona.skill)
        return ''+ persona.skill.r+ ";"
        + persona.skill.html+ ";"
        + persona.skill.py+ ";"
        + persona.skill.js
        + ";"+ persona.skill.rct
        + ";"+ persona.skill.graph;
        
    }    
    const { data, loading, error } = useQuery(QUERY)
    const [{ enableD, enableC, changerD,changerC }, setState] = useState({ enableD: false, enableD: false, changerD: 'edit', changerC: 'edit' })
    const [update, {data: data2}] = useMutation(MUTATION);
    const [update2, {data: data3}] = useMutation(MUTATION_CIRCULITOS);
    console.log(data2);
    const changeD = () => {
        if (!enableD)
            setState({ enableD: !enableD,enableC:enableC, changerD: 'save',changerC:changerC });
        else{
            setState({ enableD: !enableD,enableC:enableC, changerD: 'edit',changerC:changerC });
            update({variables:{nuevaDescripcion: persona.descripcion}})
        }
    }
    const changeC = () => {
        if (!enableC)
            setState({ enableD: enableD,enableC:!enableC, changerD:changerD, changerC: 'save' });
        else{
            setState({ enableD: enableD,enableC:!enableC, changerD:changerD, changerC: 'edit' });
            update2({variables:{nuevasSkills: skillsObjectToString()}})
        }
        document.getElementsByName('texto').forEach(element => {
            element.classList.toggle('titular');
        });
    }
    const setDesc = (e) => {
        const value = e.target.value;        
        persona.descripcion = value;      
        setState({ enableD: enableD,enableC:enableC, changerD:changerD, changerC: changerC });
    }
    function setCirc (name,value) {           
        persona.skill[name] = value;   
        console.log(persona.skill);   
        setState({ enableD: enableD,enableC:enableC, changerD:changerD, changerC: changerC });
    }
    

    if (loading) return <h1>Cargando...</h1>
    if (error) { console.log(error);}
    
    
    if(data.persona) persona = data.persona;
    if(!persona.skill)mapSkills();
    return (
        <div class='perfil-module'>
        <Container bsPrefix="grid"  >
            <Row  >
                <div class='fill' style={{width:"300px"}}>
                    <Card className='first' >
                        <div class='profile-image'>
                            <img src = "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"/>
                        </div>
                        <Row className='profile' >
                            <Col md={2} className = "opciones">
                            <Row style={{height:'10%'}}/>
                                <Row style={{height:'30%'}}>
                                    <MDBIcon fab className='centrado' size="2x"icon="facebook-square" style={{color:'white'}}/>
                                </Row>
                                <Row style={{height:'30%'}}>
                                    <MDBIcon fab className='centrado' size="2x"icon="google-plus-square" style={{color:'white'}}/>
                                   
                                </Row>
                                <Row style={{height:'30%'}}>
                                    <MDBIcon fab className='centrado' size="2x"icon="twitter-square" style={{color:'white'}}/>
                                </Row>
                            </Col>
                            <Col md={10} className = "calificacion">
                                <h1>{persona.nombre}</h1>
                                <b>{persona.calificacion.toFixed(1)}</b>
                            <StarRating initialRating= {round5(persona.calificacion)} isReadOnly ={true} size="30" count="5" innerRadius="25" activeColor='#ffd055'hoverColor='#ffd055' isHalfRating='true' />
                                <p># Calificaciones: {persona.numCal}</p>
                       
                            </Col>
                        </Row>
                    </Card>
                </div>
                <Col className="lp-l fill">
                    <Card className = 'info'>
                        <div class="card-header">
                            <h2>Profile Info</h2>
                        </div>
                        <div class='card-body'>
                            
                            <Row style={{ height: '67%', color: '#61dafb' }}>
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
                                        <Circle name='Py' value= {persona.skill.py} color='#306998' className="centrado-v" name="py" change={setCirc} enable={enableC}></Circle>
                                        </Col>
                                        <Col md={4} >
                                        <Circle name='Js' value= {persona.skill.js} color=' #f0db4f ' className="centrado-v" name="js" change={setCirc} enable={enableC}></Circle>                                          
                                        </Col>
                                        <Col md={4} >
                                        <Circle name='R' value= {persona.skill.r} color='#BFC2C5' className="centrado-v" name="r" change={setCirc} enable={enableC}></Circle>
                                                                              
                                        </Col>
                                    </Row>
                                    <Row style={{height: '45%'}}>
                                        <Col md={4} >
                                        <Circle name='Html' value= {persona.skill.html} color='#e44d26' className="centrado-v" name="html" change={setCirc} enable={enableC}></Circle>
                                        </Col>
                                        <Col md={4} >
                                        <Circle name='Rct'value= {persona.skill.rct} color='#61dbfb' className="centrado-v" name="rct" change={setCirc} enable={enableC}></Circle>
                                        </Col>
                                        <Col md={4} >
                                        <Circle name='Gql' value= {persona.skill.graph} color='rgb(229, 53, 171)' className="centrado-v" name="graph" change={setCirc} enable={enableC}></Circle>                                          
                                        </Col>
                                    </Row>
                                    
                                    <MDBIcon icon={changerC}  onClick={changeC} className='editer'/>                                        
                                </Col>
                            </Row>
                            <Row className = 'tb-1 desc' style={{ height: '30%', color: '#61dafb' }}>
                                <Col>
                                    <h5>Descripcion:</h5>
                                    <textarea name="descripcion" value={persona.descripcion} disabled={!enableD} onChange={setDesc} class='big-text' />
                                    <MDBIcon icon={changerD}  onClick={changeD} className='editer'/>                                        
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
