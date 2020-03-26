var formNames = document.querySelector('input[name=name]');
var formApellido = document.querySelector('input[name=apellido]');
var formEdad = document.querySelector('input[name=edad]');
var formEmail = document.querySelector('input[name=email]');
var formPass = document.querySelector('input[name=password]');
var formPass2 = document.querySelector('input[name=password_confirmation]');
var form2 = document.querySelector("form");
var okey = document.querySelector(".card-header")
var regEmail = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;


formNames.onblur = function(){
  if (this.value == 'hola') {
    alert('El campo');
  }
}

form2.onsubmit = function (event) {
  if (formNames.value.length == 0) {
    alert('El campo Nombre es obligatorio');
    event.preventDefault();
  } else if (formNames.value.length < 3) {
    alert('El campo Nombre tiene que tener al menos 3 caracteres');
    event.preventDefault();
  } else if (formApellido.value.length == 0) {
    alert('El campo Apellido es obligatorio');
    event.preventDefault();
  } else if (formApellido.value.length < 3) {
    alert('El campo Apellido tiene que tener al menos 3 caracteres');
    event.preventDefault();
  } else if (formEdad.value.length == 0) {
    alert('El campo Edad es obligatorio');
    event.preventDefault();
  } else if (formEdad.value > 149) {
    alert('El campo Edad no puede tener mas del valor 149');
    event.preventDefault();
  } else if (formEmail.value.length == 0) {
    alert('El campo Email es obligatorio');
    event.preventDefault();
  } else if (!regEmail.test(formEmail.value)) {
    alert('Ingresa un mail valido');
    event.preventDefault();
  } else if (formPass.value.length == 0) {
    alert('El campo Contraseña es obligatorio');
    event.preventDefault();
  } else if (formPass.value.length < 7) {
    alert('El campo Contraseña tiene que tener al menos 8 caracteres');
    event.preventDefault();
  } else if (formPass2.value.length == 0) {
    alert('El campo Repetir Contraseña es obligatorio');
    event.preventDefault();
  } else if (formPass2.value != formPass.value) {
    alert('Las contraseñas tiene que coincidir');
    event.preventDefault();
  } else {
    form2.classList.add('d-none');
    okey.classList.remove('d-none');
    event.preventDefault();
  }
}
