import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import history from '../history';

export default function Loginfunction() {
    const [register, { data: data1 }] = useMutation(gql`
    mutation Register($nombre: String!,$email: String!,$contrasena: String!,$id: Int!,$genero: Boolean!,$empresa: String!,$numero: Int!){
        register(nombre :$nombre, email: $email, contrasena: $contrasena, id:$id, genero:$genero, empresa: $empresa, numero: $numero){
            success
            message
        }
    }
    `);
    const [login, { data: data2}] = useMutation(gql`
       mutation Login($email:String!, $pass: String!){
           login(email:$email, contrasena: $pass){
               success
               message
           }
       }
       `);
       console.log(data2, data1);
         if ( ((data1 && data1.register.success)||(data2 && data2.login.success)) ) 
            history.push('/perfil');
    return (
        <Login login={login} register={register}/>
    )
}

export class Login extends Component {
    state = {
        email: "",
        password: "",
        registrado: true,
        confirm_password: "",
        genero: "",
        descripcion: "",
        id: "",
        nombre: "",
        numero:"",
        empresa:""
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value

        })

    }


    render() {
        if (this.state.registrado)
            return (
                <div class="wrapper" >
                    <div class="box">
                            <h3 class="title"> Iniciar Sesión</h3>
                            <form>
                                <div class="inputBox">
                                    <input type="text" name="email" required="" onChange={this.handleChange} />
                                    <label>Email</label>
                                </div>
                                <div class="inputBox">
                                    <input type="password" name="password" required="" onChange={this.handleChange} />
                                    <label>Contraseña</label>
                                </div>
                            </form>
                            <div className="ma">
                                <a onClick={() => {
                                    this.props.login({ variables: { email: this.state.email, pass: this.state.password } })
                                }}>
                                    Ingresar
                                </a>
                            </div>
                            <br />
                            <div>
                                <label>¿No tienes una cuenta? </label>
                                <a className="link"
                                    onClick={() => this.setState({ registrado: false })
                                    }
                                > Registrate</a>
                            </div>
                        </div>
                </div>)
        return (
            <div class="wrapper" >
                <div class="box">
                    <div >
                        <title class="title">Registrarse</title>
                        <Row>
                            <Col md={7}>
                            <div class="inputBox">
                                <input type="text" name="nombre" required="" onChange={this.handleChange} />
                                <label>Nombre</label>
                            </div>
                            </Col>
                            <Col md={5}><div class="inputBox">
                                <select name="genero" required="" onChange={this.handleChange}>
                                    <option>Hombre</option>
                                    <option>Mujer</option>
                                </select>
                                <label class="selectLable">Genero</label>
                            </div></Col>
                        </Row>
                            
                            <div class="inputBox">
                                <input type="text" name="id" required="" onChange={this.handleChange} />
                                <label>Identificacion</label>
                            </div>
                            <Row>
                            <Col><div class="inputBox">
                                <input type="text" name="email" required="" onChange={this.handleChange} />
                                <label>Email</label>
                            </div></Col>
                            <Col>
                            
                            <div class="inputBox">

                                <input type="phone" name="numero" required="" onChange={this.handleChange} />
                                <label>Telefono</label>
                            </div>
                            </Col>
                            </Row>
                            
                            <div class="inputBox">
                                <input type="password" name="password" required="" onChange={this.handleChange} />
                                <label>Contraseña</label>
                            </div>
                            <div class="inputBox">

                                <input type="password" name="confirm_password" required="" onChange={this.handleChange} />
                                <label>Confirmar Contraseña</label>
                            </div>
                            
                            
                            <div class="inputBox">

                                <input type="text" name="empresa" required="" onChange={this.handleChange} />
                                <label>Empresa</label>
                            </div>
                        
                        <div class="ma">
                            <a class="boton"
                            onClick={()=>{ if(this.state.password===this.state.confirm_password)this.props.register({variables:{nombre: this.state.nombre, email:this.state.email, contrasena: this.state.password, id: parseInt(this.state.id), genero: this.state.genero=="Hombre"?true:false,calificacion:0.0,numCal:0,descripcion:"",linkImg:""}})
                            }
                        }
                            >
                              
                                Registrarse
                    </a>
                        </div>
                        <br />
                        <div>
                            <label>¿Ya tienes una cuenta? </label>
                            <a class="link"
                                onClick={() => this.setState({ registrado: true })}
                            > Ingresa</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

