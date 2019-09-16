import React, {Component} from 'react'
import '../css/Menu.scss'
import {MDBIcon} from 'mdbreact'

export default class Menu extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div class='menu-module' style= {{display:this.props.enable}}>
                <ul>
                    <li>
                        <a href="home">
                            <span>Inicio</span>
                            <span>Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href="perfil">
                            <span>Perfil</span>
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="calificar">
                            <span>Calificar</span>
                            <span>Calificar</span>
                        </a>
                    </li>
                </ul>
                <button class="exit" onClick={this.props.change}><MDBIcon style={{color:"white"}} icon='times'/></button>
            </div>
        );
    }
}
