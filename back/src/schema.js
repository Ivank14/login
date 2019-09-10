const { gql } = require('apollo-server');

const typeDefs = gql`
    scalar Date

    type Persona {
        id: Int!
        nombre: String!
        email: String!
        contrasena: String!
        linkImg: String
        nacimiento: Date!
        genero: Boolean!
        calificacion: Float!
        numCal: Int!
        descripcion: String
        }
    type Query {
        personas: [Persona]!
        persona(id: Int!): Persona
        me: Persona
    }
    type Mutation{
        cambioContrasena(contrasena: String!):Response!
        calificar(calificacion: Float!):Float!
        register(nombre: String!,email: String!,contrasena: String!,linkImg: String,id: Int!,genero: Boolean!,calificacion: Float,numCal: Int,descripcion: String):Response!
        login(email: String!,contrasena: String!):Response!
    }
    type Response{
        success: Boolean!
        message: String
    }
`;

module.exports = typeDefs;