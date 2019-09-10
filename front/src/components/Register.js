import React, { Component } from 'react'
import classNames from 'classnames'

import { Link } from 'react-router-dom'

export class Register extends Component {
    state = {
        email: "",
        password: "",
        confirm_password: "",
        birth_date_year: "",
        birth_date_month: "",
        birth_date_day: "",
        genero: "",
        descripcion: ""

    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value

        })

    }
    render() {
        return (
            <div class="wrapper" >
        <div class="box">
            <div class="card border-secondary mb-3" style={{ alignItems: 'center' }}>
                <div class="card-header">Registrarme </div>
                <div class="card-body"></div>
                <div class="form-group">
                    <label >Email</label>
                    <input type="email" name="email" class="form-control" aria-describedby="emailHelp" onChange={this.handleChange} />

                </div>
                <div class="form-group">
                    <label >Contraseña</label>
                    <input type="password" name="password" class="form-control" onChange={this.handleChange} />
                </div>
                <div class="form-group">
                    <label >Confirma contraseña</label>
                    <input type="password" name="confirm_password" className={classNames({
                    
                        'form-control is-valid': this.state.password===this.state.confirm_password,
                        'form-control is-invalid': this.state.password!==this.state.confirm_password

                    })}  onChange={
                        this.handleChange
                        } />
                </div>
                <div class="form-group">
                    <label >Cumpleaños</label>
                    <div>
                    <input type="number" name="birth_date_day" class="form-control" placeholder="Dia" onChange={this.handleChange} />
                    <select class="form-control" name="birth_date_month" onChange={this.handleChange}>
                        <option>Enero</option>
                        <option>Febrero</option>
                        <option>Julio</option>
                        <option>Noviembre</option>
                        <option>Diciembre</option>
                    </select>
                    <input type="number" name="birth_date_year" class="form-control" placeholder="Año" onChange={this.handleChange} />
                    </div>
                </div>
                <div class="form-group">
                    <label >Genero</label>
                    
                    
                    <select class="form-control" name="genero" onChange={this.handleChange}>
                        <option>Hombre</option>
                        <option>Mujer</option>
                        <option>Otro</option>
                    </select>
                    
                    
                </div>
                <div class="form-group">
      <label for="exampleTextarea">Describete :) </label>
      <textarea class="form-control" id="exampleTextarea" rows="6" name="descripcion" onChange={this.handleChange}></textarea>
    </div>
                <div>
                    <button type="button" class="btn btn-primary" onClick={() => console.log(this.state)}>Resgistrarme</button>
                </div>
                <div>
                    <Link type="button" class="btn btn-secondary" to="/login">Ya estoy registrado</Link>
                </div>
            </div>
            </div>
            </div>

        )
    }
}
export default Register;
