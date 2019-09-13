import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import Login2 from '../components/Login2';
import history from '../history';

export default function Loginfunction() {
    const [register, { data: data1 }] = useMutation(gql`
    mutation Register($nombre: String!,$email: String!,$contrasena: String!,$linkImg: String,$id: Int!,$genero: Boolean!,$calificacion: Float,$numCal: Int,$descripcion: String){
        register(nombre :$nombre, email: $email, contrasena: $contrasena, linkImg: $linkImg,  id:$id, genero:$genero, calificacion: $calificacion, numCal: $numCal, descripcion: $descripcion){
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
            history.push('/path');
    return (
        <Login2 login={login} register={register}/>
    )
}
