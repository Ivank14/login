module.exports = {
    Query: {
      personas: (_, __, { dataSources }) =>
        dataSources.personaAPI.getPersonas(),
      persona: (_, { id }, { dataSources }) =>{ console.log(id)
        dataSources.personaAPI.getPersona({ id: id })},
      me: (_,__,{dataSources})=>
        dataSources.personaAPI.getPersonaAct(),
    },
    // cambioContrasena(contrasena: String!):Response!
    //     calificar(calificacion: FLoat!):Float!
    //     register(nombre: String!,email: String!,contrasena: String!,linkImg: String,nacimiento: Date!,id: Int!,genero: Boolean!,calificacion: FLoat!,numCal: Int!,descripcion: String):Response!
    //     login(email: String!,contrasena: String!):Respose!
    Mutation: {
        login: async (_, { email, contrasena }, { dataSources }) => {
          const persona = await dataSources.personaAPI.login({ email, contrasena });
          const id= await dataSources.personaAPI.getPersonaE({email:email})
          return {
              success:persona? true: false,
              message:persona? 'logeo correcto':'Correo o conraseña erroneo',
              id: parseInt(id.dataValues.id)
            };
        },
        delete: async (_, { id }, { dataSources }) => {
          const log = await dataSources.personaAPI.delete(id);
          return {
              success:log? true: false,
              message:log? 'Eliminacion correcta':'no se borro'
            };
        },
        register: async(_,{ nombre,email,contrasena,id,genero,empresa,phone },{dataSources})=>{
          
            const persona = await dataSources.personaAPI.createPersona( nombre,email,contrasena,"",null,id,genero,0,0,"", empresa, phone );
            return{
                success:persona? true: false,
                message:persona? 'registro correcto':'algo fallo',
                id: parseInt(id)
              };
        },
        cambiarDescripcion: async(_, { id, nuevaDescripcion }, { dataSources })=>{
          const log = await dataSources.personaAPI.nuevaDescripcion({id,nuevaDescripcion});
          return {
              success:log? true: false,
              message:log? 'Descripcion cambiada':'Paila',
              id: id
            };
        },
        cambiarDescripcion: async(_, { id, nuevasSkills }, { dataSources })=>{
          const log = await dataSources.personaAPI.nuevasSkills({id,nuevasSkills});
          return {
              success:log? true: false,
              message:log? 'Skills cambiadas':'Paila',
              id: id
            };
        }
        // calificar: async (_,{calificacion},{dataSources})=>{
        //   const actuan = await dataSources.personaAPI.
        // }
        // bookTrips: async (_, { launchIds }, { dataSources }) => {
        //     const results = await dataSources.userAPI.bookTrips({ launchIds });
        //     const launches = await dataSources.launchAPI.getLaunchesByIds({
        //       launchIds,
        //     });
        
        //     return {
        //       success: results && results.length === launchIds.length,
        //       message:
        //         results.length === launchIds.length
        //           ? 'trips booked successfully'
        //           : `the following launches couldn't be booked: ${launchIds.filter(
        //               id => !results.includes(id),
        //             )}`,
        //       launches,
        //     };
        //   },
        //   cancelTrip: async (_, { launchId }, { dataSources }) => {
        //     const result = await dataSources.userAPI.cancelTrip({ launchId });
        
        //     if (!result)
        //       return {
        //         success: false,
        //         message: 'failed to cancel trip',
        //       };
        
        //     const launch = await dataSources.launchAPI.getLaunchById({ launchId });
        //     return {
        //       success: true,
        //       message: 'trip cancelled',
        //       launches: [launch],
        //     };
        //   },
      },
    // Launch: {
    //     isBooked: async (launch, _, { dataSources }) =>
    //       dataSources.userAPI.isBookedOnLaunch({ launchId: launch.id }),
    //   },
    //   User: {
    //     trips: async (_, __, { dataSources }) => {
    //       // get ids of launches by user
    //       const launchIds = await dataSources.userAPI.getLaunchIdsByUser();
      
    //       if (!launchIds.length) return [];
      
    //       // look up those launches by their ids
    //       return (
    //         dataSources.launchAPI.getLaunchesByIds({
    //           launchIds,
    //         }) || []
    //       );
    //     },
    //   },
  };