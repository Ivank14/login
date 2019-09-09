import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import Login2 from '../components/Login2';
import history from '../history';

export default function Loginfunction() {
    const [register, { data }] = useMutation(gql`
    mutation Register($nombre: String!,$email: String!,$contrasena: String!,$linkImg: String,$id: Int!,$genero: Boolean!,$calificacion: Float,$numCal: Int,$descripcion: String){
        register(nombre :$nombre, email: $email, contrasena: $contrasena, linkImg: $linkImg,  id:$id, genero:$genero, calificacion: $calificacion, numCal: $numCal, descripcion: $descripcion){
            success
            message
        }
    }
    `);
    const [login, { loading, error, data1 }] = useMutation(gql`
       mutation Login($email:String!, $pass: String!){
           login(email:$email, contrasena: $pass){
               success
               message
           }
       }
       `);
       console.log(inf1);
        if (data != null && ((data.register && data.register.success)||(data.login && data.login.success)) ) 
            history.push('/path');
    return (
        <Login2 login={login} register={register}/>
    )
}
