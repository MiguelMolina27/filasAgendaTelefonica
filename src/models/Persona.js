export class Persona {
    #nombre
    #telefono
    #direccion
    #correoElectronico

    constructor(nombre,telefono,direccion,correoElectronico){
        this.#nombre = nombre
        this.#direccion = direccion
        this.#telefono = telefono
        this.#correoElectronico = correoElectronico
    }

    setNombre(nombre){
        this.#nombre = nombre
    }
    setTelefono(telefono){
        this.#telefono = telefono
    }
    setDireccion(direccion){
        this.#direccion = direccion
    }
    setCorreoElectronico(correoElectronico){
        this.#correoElectronico = correoElectronico
    }

    getNombre(){
        return this.#nombre
    }
    getTelefono(){
        return this.#telefono
    }
    getDireccion(){
        return this.#direccion
    }
    getCorreoElectronico(){
        return this.#correoElectronico
    }
}