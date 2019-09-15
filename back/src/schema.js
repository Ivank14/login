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
        empresa: String!
        phone: String!
        descripcion: String,
        skills: String
        }
    type Query {
        personas: [Persona]!
        persona(id: Int!): Persona
        me: Persona
    }
    type Mutation{
        cambioContrasena(contrasena: String!):Response!
        calificar(calificacion: Float!):Float!
        register(nombre: String!,email: String!,contrasena: String!,id: Int!,genero: Boolean!, empresa: String!, phone: String!):Response!
        login(email: String!,contrasena: String!):Response!
        delete(id: Int!): Response!
        cambiarDescripcion(id: Int!, nuevaDescripcion: String!):Response!
    }
    type Response{
        success: Boolean!
        message: String
        id: Int
    }
`;

module.exports = typeDefs;