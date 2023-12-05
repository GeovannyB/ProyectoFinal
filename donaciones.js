const formInputs = {
    "nombre": null,
    "email": null,
    "telefono": null,
    "direccion": null,
    "ciudad": null,
    "departamentos": null,
    "tipodonacion": null
}; //Object JSON Javascript Object Notation /// Javascript Object



document.addEventListener("DOMContentLoaded", ()=>{
    initPageLoad();
});

function initPageLoad(){
    formInputs.nombre = document.getElementById("nombre");
    formInputs.email = document.getElementById("email");
    formInputs.telefono = document.getElementById("telefono");
    formInputs.direccion = document.getElementById("direccion");
    formInputs.ciudad = document.getElementById("ciudad");
    formInputs.departamentos = document.getElementById("departamentos");
    formInputs.tipodonacion = document.getElementById("tipodonacion");
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
    if(!isPhone(formInputs.telefono.value)){
        errors.push("El campo telefono no es valido");
    }
    if(!dateIsNotBeforeToday(formInputs.direccion.value)){
        errors.push("El campo Direccion no es valido");
    }
    if(!dateIsNotBeforeToday(formInputs.ciudad.value)){
        errors.push("El campo Ciudad no es valido");
    }
    if(!dateIsNotBeforeToday(formInputs.departamentos.value)){
        errors.push("El campo Departamentos no es valido");
    }
    if(!dateIsNotBeforeToday(formInputs.tipodonacion.value)){
        errors.push("El campo Tipo de Donacion no es valido");
    }

    
}
// Validadores
function isEmpty(value){
    // if(value == null || value == "") {
    //     return true;
    // }
    // return false;
    return /^\s*$/.test(value);
}

function isEmail(value){
    return /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value);
}

function isPhone(value) {
    return /^\+?\(?(504)?\)?\s?[23789]\d{3}-?\s?\d{4}$/.test(value);
}