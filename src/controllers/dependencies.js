import { Agenda } from "../models/Agenda.js";
import { Persona } from "../models/Persona.js";

const agenda = new Agenda()

export {agenda}


export const crearPersona = function(nombre,telefono,direccion,correoElectronico){
    const NuevaPersona = new Persona(nombre,telefono,direccion,correoElectronico)
    return NuevaPersona
}

