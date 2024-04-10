import { Queue } from "./Queue.js"
import { crearPersona } from "../controllers/dependencies.js"

export class Agenda {
    #fila

    constructor(){
        this.#fila = new Queue() 
    }

    añadirPersona(nombre,telefono,direccion,correoElectronico){
        this.#fila.enqueue(crearPersona(nombre,telefono,direccion,correoElectronico))
    }

     eliminarPersona(){
        if(this.#fila.isEmpty()){
            return undefined
        }else{
            this.#fila.dequeue()
        }
        
    }

    carrusel(){
        if(this.#fila.size() == 1 || this.#fila.isEmpty()){
            return undefined
        }else{
            this.#fila.enqueue(this.#fila.dequeue())
        }
    }

     getDisplay(){
        let displayPersona
        if(this.#fila.isEmpty()){
            displayPersona = crearPersona("","","","")
        }else{
            displayPersona = this.#fila.peek().getData()
        }
        return displayPersona
    }




}