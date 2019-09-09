import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value

        })

    }
    render() {
        return (
            <div class="card border-secondary mb-3" style={{ alignItems: 'center' }}>
                <div class="card-header">Log In</div>
                <div class="card-body"></div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleChange} />

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" name="password" class="form-control" id="exampleInputPassword1" onChange={this.handleChange} />
                </div>
                <div>
                    <button type="button" class="btn btn-primary" onClick={() => console.log(this.state)}>Entrar</button>
                </div>
                <div>
                    <Link type="button" class="btn btn-secondary" to="/registrarme">Registrarse</Link>
                </div>
            </div>


        )
    }
}

export default Login;
