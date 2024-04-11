import { agenda } from "./dependencies.js"

let displayPersona

const outNombre = document.getElementById("paragraph__paragraph-outputNombre")
const outTelefono = document.getElementById("paragraph__paragraph-outputTelefono")
const outDireccion = document.getElementById("paragraph__paragraph-outputDireccion")
const outCorreoElectronico = document.getElementById("paragraph__paragraph-outputCorreoElectronico")

const agregarALaAgenda = document.getElementById("button__button-ingresarPersona")
agregarALaAgenda.addEventListener("click",()=>{

    let nombre = document.getElementById("input__input-nombre").value
    let telefono = document.getElementById("input__input-telefono").value
    let direccion = document.getElementById("input__input-direccion").value
    let correoElectronico = document.getElementById("input__input-correoElectronico").value
    agenda.añadirPersona(nombre,telefono,direccion,correoElectronico)

     

    displayPersona = agenda.getDisplay()

    
    outNombre.innerText = "Nombre: " + displayPersona.getNombre()
    outTelefono.innerText = "Telefono: " + displayPersona.getTelefono()
    outDireccion.innerText = "Direccion: " + displayPersona.getDireccion()
    outCorreoElectronico.innerText = "Correo Electronico: " + displayPersona.getCorreoElectronico()
    
})

const eliminarDeLaAgenda = document.getElementById("button__button-eliminarPersona")
eliminarDeLaAgenda.addEventListener("click",()=>{
    agenda.eliminarPersona()
})

const girarCarrusel = document.getElementById("button__button-carrusel")
girarCarrusel.addEventListener("click",()=>{
    
    agenda.girarCarrusel()

    displayPersona = agenda.getDisplay()
   
    outNombre.innerText = "Nombre: " + displayPersona.getNombre()
    outTelefono.innerText = "Telefono: " + displayPersona.getTelefono()
    outDireccion.innerText = "Direccion: " + displayPersona.getDireccion()
    outCorreoElectronico.innerText = "Correo Electronico: " + displayPersona.getCorreoElectronico()
    
})

const busquedaNombre = document.getElementById("button__button-buscar")
busquedaNombre.addEventListener("click",()=>{

    let nombre = document.getElementById("input__input-buscar").value

    displayPersona = agenda.buscar(nombre)
   
    outNombre.innerText = "Nombre: " + displayPersona.getNombre()
    outTelefono.innerText = "Telefono: " + displayPersona.getTelefono()
    outDireccion.innerText = "Direccion: " + displayPersona.getDireccion()
    outCorreoElectronico.innerText = "Correo Electronico: " + displayPersona.getCorreoElectronico()
})

