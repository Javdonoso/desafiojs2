
function bordear() {
    let image = document.querySelector(".imagen");
    if (image.style.border === "none") {
        image.style.border = "2px solid red";
    } else {
        image.style.border = "none";
    }
}

function verificar() {
    let cantidad1 = parseInt(document.querySelector("#cantidad1").value);
    let cantidad2 = parseInt(document.querySelector("#cantidad2").value);
    let cantidad3 = parseInt(document.querySelector("#cantidad3").value);

    if (isNaN(cantidad1)) {
        cantidad1 = 0;
    }
    if (isNaN(cantidad2)) {
        cantidad2 = 0;
    }
    if (isNaN(cantidad3)) {
        cantidad3 = 0;
    }

    
    let total = cantidad1 + cantidad2 + cantidad3;
    let texto = '';
    
    if (total <= 10) {
        texto = 'Llevas ' + total + ' Stickers';
    } else {
        texto = 'Llevas demasiados Stickers!!!';
    }

    document.querySelector("#resultado").textContent = texto;

}

function comprobar() {
    let numero1 = document.querySelector("#primero").value;
    let numero2 = document.querySelector("#segundo").value;
    let numero3 = document.querySelector("#tercero").value;

    let texto = '';
    if (numero1 == '9' && numero2 == '1' && numero3 == '1') {
        texto = 'Password 1 correcto';
    } else {
        if (numero1 == '7' && numero2 == '1' && numero3 == '4') {
            texto = 'Password 2 correcto';
        } else { 
            texto = 'Password Incorrecto';
        }
    }

    document.querySelector("#verificacion").textContent = texto;
}



