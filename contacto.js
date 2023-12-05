const formInputs = {
    "nombre": null,
    "email": null,
    "mensaje": null,
}; //Object JSON Javascript Object Notation /// Javascript Object



document.addEventListener("DOMContentLoaded", ()=>{
    initPageLoad();
});

function initPageLoad(){
    formInputs.nombre = document.getElementById("nombre");
    formInputs.email = document.getElementById("email");
    formInputs.mensaje = document.getElementById("mensaje");
    console.log("Formulario Cargado", formInputs);
    document.getElementById("formulario").addEventListener("submit", (e)=>{
        const [errors, isValid] = validateForm();
        if(!isValid) {
            alert("Formulario no Valido");
            console.log("Form Errors", errors);
            e.preventDefault();
            e.stopPropagation();
        }
    });
}

function validateForm(){
    let errors = [];
    //Validar que el nombre no este vacio
    if(isEmpty(formInputs.nombre.value)){
        errors.push("El campo nombre no puede estar vacio");
    }
    if(!isEmail(formInputs.email.value)){
        errors.push("El campo email no es valido");
    }
    if(!isPhone(formInputs.mensaje.value)){
        errors.push("El campo mensaje no puede estar vacio");
    }
    
}
// Validadores
function isEmpty(value){
    return /^\s*$/.test(value);
}

function isEmail(value){
    return /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value);
}