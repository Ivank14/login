import React, {Component} from 'react'
import '../css/Menu.scss'
import {MDBIcon} from 'mdbreact'

export default class Menu extends Component{

    render(){
        return(
            <div class='home-module'>
                <ul>
                    <li>
                        <a>
                            <span>Home</span>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>Profile</span>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>Calificar</span>
                            <span>Calificar</span>
                        </a>
                    </li>
                </ul>
                <button class="exit"><MDBIcon style={{color:"white"}} icon='times'/></button>
            </div>
        );
    }
}
