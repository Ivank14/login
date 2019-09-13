import React, { Component } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import history from '../history';
import { graphql } from 'react-apollo';

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
// export default graphql(gql`
// mutation Login($email:String!, $pass: String!){
//     login(email:$email, contrasena: $pass){
//         success
//         message
//     }
// }
// `)(Testfunction);

export default compose(
    graphql(gql`
mutation Login($email:String!, $pass: String!){
    login(email:$email, contrasena: $pass){
        success
        message
    }
}
`,{name: 'login'}),
)(Testfunction);

function Testfunction(props) {
    // const [register, { data }] = useMutation(gql`
    // mutation Register($nombre: String!,$email: String!,$contrasena: String!,$linkImg: String,$id: Int!,$genero: Boolean!,$calificacion: Float,$numCal: Int,$descripcion: String){
    //     register(nombre :$nombre, email: $email, contrasena: $contrasena, linkImg: $linkImg,  id:$id, genero:$genero, calificacion: $calificacion, numCal: $numCal, descripcion: $descripcion){
    //         success
    //         message
    //     }
    // }
    // `);
   // console.log(login);
    // if (data != null && ((data.register && data.register.success) || (data.login && data.login.success)))
    //     history.push('/path');
    console.log(props);
    return (
        <Testi login={login} />
    )
}

export class Testi extends Component {

    render() {
            return (
                <div>
                <a onClick={() => {
                    this.props.login({ variables: { email: "emailmio", pass: "estpass" } })
                    }}>
                    Ingresar
                </a>
                <a class="link"
                    onClick={() => this.regis()
                    }
                > Registrate</a></div>
                           )
    }
    regis = (e) =>{
       console.log("registrando");
    }
}

