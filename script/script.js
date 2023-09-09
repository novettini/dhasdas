// formOculto = document.getElementsByClassName(form-oculto);
// eleccion = document.getElementById('agregar');
aparecer = document.getElementById("formulario-oculto")
// select = document.getElementsByName("agregar-cancha")
seleccionado = document.formulario.motivo
botonEnviar = document.getElementById("primer-submit")
textareaFormulario = document.getElementById("agregados")

// acá aparece o desaparece el formulario
function mostrarOcultar(){
    seleccionado.addEventListener("change", () => {
    if(seleccionado.value == "agregar-cancha"){
        aparecer.classList.remove("d-none")
        botonEnviar.classList.add("d-none")
        textareaFormulario.classList.add("d-none")
    
}
else{
   
    aparecer.classList.add("d-none")
    botonEnviar.classList.remove("d-none")
    textareaFormulario.classList.remove("d-none")
    
}
})
}
// ---------

window.onload = mostrarOcultar(); 
