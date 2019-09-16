const { DataSource } = require('apollo-datasource');
const isEmail = require('isemail');

class PersonaAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  /**
   * This is a function that gets called by ApolloServer when being setup.
   * This function gets called with the datasource config including things
   * like caches and context. We'll assign this.context to the request context
   * here, so we can know about the user making requests
   */
  initialize(config) {
    
    this.context = config.context;
    
  }

  /**
   * User can be called with an argument that includes email, but it doesn't
   * have to be. If the user is already on the context, it will use that user
   * instead
   */
  // const email =this.context && this.context.user ? this.context.user.email : emailArg;
  async createPersona( nombre,email,contrasena,linkImg,nacimiento,id,genero,calificacion,numCal, descripcion, empresa, phone ) {
    const existE = await  this.store.persona.findOne({where: {email: email}});
    const existI = await this.store.persona.findByPk(id);
    if ( existE || existI|| !isEmail.validate(email)) return null;

    const persona = await this.store.persona.create({ id:id,nombre: nombre,email:email, contrasena: contrasena, linkImg:linkImg, nacimiento:nacimiento, genero:genero, calificacion:calificacion, numCal:numCal, descripcion:descripcion, empresa:empresa, phone: phone});
    
    if(persona){
      this.context.user = persona.dataValues.id;  
    }
    return persona;
  }

  
  async getPersonaAct() {
    if (!this.context || !this.context.user) return false;
    const userId = this.context.user;
    const persona = await this.store.persona.findByPk(userId);
    return persona;
  }
  async getPersona({id}) {
    const persona = await this.store.persona.findByPk(id);
    return persona;
  }
  async getPersonaE({email}) {
    const persona = await  this.store.persona.findOne({where: {email: email}});
    return persona;
  }
  async getPersonas() {
    const persona = await this.store.persona.findAll();
    return persona;
  }

  async calificar({ calificacion }) {
    if (!this.context || !this.context.user) return false;
    const id = this.context.user;
    const changed = await this.store.persona.update({
      calificacion: calificacion
    },{
      where:{id:id},
      returning:true,
      plain:true
    });
    return changed ;
  }
  async cambiarPWD({ contrasena }) {
    if (!this.context || !this.context.user) return false;
    const id = this.context.user;
    const changed = await this.store.persona.update({
      contrasena: contrasena
    },{
      where:{id:id},
      returning:true,
      plain:true
    });
    return changed ;
  }
  async login({email, contrasena}){
    const log = await this.store.persona.findOne({where:{email:email,contrasena:contrasena}});
    return log;
  }

  async delete (id){
    const log = await this.store.persona.destroy({where:{id:id}})
    return log;
  }
  async nuevaDescripcion({ id,nuevaDescripcion }) {
    const changed = await this.store.persona.update({
      descripcion: nuevaDescripcion
    },{
      where:{id:id},
      returning:true,
      plain:true
    });
    console.log(changed);
    return changed ;
  } 
  async nuevasSkills({ id,nuevasSkills }) {
    const changed = await this.store.persona.update({
      skills: nuevasSkills
    },{
      where:{id:id},
      returning:true,
      plain:true
    });
    return changed ;
  }
  async calificar(id,calificacion){
    const actual = (await this.getPersona({id})).dataValues;
    const nueva = ((actual.calificacion*actual.numCal)+calificacion)/(actual.numCal+1);
    const changed = await this.store.persona.update({
      calificacion: nueva,
      numCal: actual.numCal+1
    },{
      where:{id:id},
      returning:true,
      plain:true
    });
    return(nueva);
  } 
}

module.exports = PersonaAPI;
