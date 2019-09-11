import React, { Component } from 'react'

// export default compose(
//     graphql(gql`mutation (...) { ... }`, { name: 'createTodo' }),
//     graphql(gql`mutation (...) { ... }`, { name: 'updateTodo' }),
//     graphql(gql`mutation (...) { ... }`, { name: 'deleteTodo' }),
//   )(MyComponent);
  
//   function MyComponent(props) {
//     // Instead of the default prop name, `mutate`,
//     // we have three different prop names.
//     console.log(props.createTodo);
//     console.log(props.updateTodo);
//     console.log(props.deleteTodo);
  
//     return null;
//   }


export class Login2 extends Component {
    state = {
        email: "",
        password: "",
        registrado: true,
        confirm_password: "",
        genero: "",
        descripcion: "",
        id: "",
        nombre: ""
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
                            <div class="ma">
                                <a onClick={() => {
                                    this.props.login({ variables: { email: this.state.email, pass: this.state.password } })
                                }}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Ingresar
                                </a>
                            </div>
                            <br />
                            <div>
                                <label>¿No tienes una cuenta? </label>
                                <a class="link"
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
                        <form >
                            <div class="inputBox">
                                <input type="text" name="nombre" required="" onChange={this.handleChange} />
                                <label>Nombre</label>
                            </div>
                            <div class="inputBox">
                                <input type="text" name="id" required="" onChange={this.handleChange} />
                                <label>Identificacion</label>
                            </div>
                            <div class="inputBox">
                                <input type="text" name="email" required="" onChange={this.handleChange} />
                                <label>Email</label>
                            </div>
                            <div class="inputBox">
                                <input type="password" name="password" required="" onChange={this.handleChange} />
                                <label>Contraseña</label>
                            </div>
                            <div class="inputBox">

                                <input type="password" name="confirm_password" required="" onChange={this.handleChange} />
                                <label>Confirmar Contraseña</label>
                            </div>
                            <div class="inputBox">
                                <select name="genero" required="" onChange={this.handleChange}>
                                    <option>Hombre</option>
                                    <option>Mujer</option>
                                </select>
                                <label class="selectLable">Genero</label>
                            </div>

                        </form>
                        <div class="ma">
                            <a class="boton"
                            onClick={()=>{ if(this.state.password===this.state.confirm_password)this.props.register({variables:{nombre: this.state.nombre, email:this.state.email, contrasena: this.state.password, id: parseInt(this.state.id), genero: this.state.genero=="Hombre"?true:false,calificacion:0.0,numCal:0,descripcion:"",linkImg:""}})
                            }
                        }
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
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

export default Login2;
