import React, { Component } from 'react'
import '../css/Navbar.scss'
import { MDBIcon } from 'mdbreact'
import Navbar from 'react-bootstrap/Navbar'
import Menu from './Menu'

export default class Navb extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        enable: false
    };
    volver=(e)=>{
        this.setState({enable:false})
    }
    render() {
        return (
            <>
                <Navbar className='navbar' bg="dark" variant="dark">
                    <Navbar.Brand href="home">
                        <img
                            alt=""
                            src="../assets/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        <p>Project</p>
                    </Navbar.Brand>
                    <button class="menu centrado-v" onClick= {()=>(this.setState({enable:true}))}><MDBIcon size="2x" style={{ color: "white" }} icon='bars' /></button>
                    <button class="salir centrado-v" onClick= {()=>{localStorage.removeItem('token'); window.location.reload();}}><MDBIcon size="2x" style={{ color: "white" }} icon='sign-out-alt' /></button>
                </Navbar>
                <Menu enable={this.state.enable? 'flex':'none'} change = {this.volver}/>
            </>
        );
    }
}