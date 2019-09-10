module.exports = {
    Query: {
      personas: (_, __, { dataSources }) =>
        dataSources.personaAPI.getPersonas(),
      persona: (_, { id }, { dataSources }) =>
        dataSources.personaAPI.getPersona({ id: id }),
      me: (_,__,{dataSources})=>
        dataSources.personaApi.getPersonaAct(),
    },
    // cambioContrasena(contrasena: String!):Response!
    //     calificar(calificacion: FLoat!):Float!
    //     register(nombre: String!,email: String!,contrasena: String!,linkImg: String,nacimiento: Date!,id: Int!,genero: Boolean!,calificacion: FLoat!,numCal: Int!,descripcion: String):Response!
    //     login(email: String!,contrasena: String!):Respose!
    Mutation: {
        login: async (_, { email, contrasena }, { dataSources }) => {
          const persona = await dataSources.personaAPI.login({ email, contrasena });
          return {
              success:persona? true: false,
              message:persona? 'logeo correcto':'Correo o conraseña erroneo'
            };
        },
        register: async(_,{ nombre,email,contrasena,linkImg,nacimiento,id,genero,calificacion,numCal,descripcion },{dataSources})=>{
            const persona = await dataSources.personaAPI.createPersona({ nombre,email,contrasena,linkImg,nacimiento,id,genero,calificacion,numCal,descripcion });
            console.log(persona);
            return{
                success:persona? true: false,
                message:persona? 'registro correcto':'algo fallo'
              };
        },
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