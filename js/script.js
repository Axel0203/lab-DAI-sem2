document.querySelector(".exc.e1 form .btn.b-show").addEventListener("click", ejercicio1);
document.querySelector(".exc.e2 form .btn.b-show").addEventListener("click",ejercicio2);
document.querySelector(".exc.e3 form .btn.b-show").addEventListener("click",ejercicio3);
document.querySelector(".exc.e4 form .btn.b-show").addEventListener("click",ejercicio4);
document.querySelector(".exc.e5 form .btn.b-show").addEventListener("click",ejercicio5);


function ejercicio1() {
    event.preventDefault();
    var name = document.getElementById("name-ex-1");
    var email = document.getElementById("email-ex-1");

    if(name.value.length > 0 && email.value.length > 0){
        document.querySelector(".exc.e1 .show-result").innerHTML = "<p>El nombre es: " + name.value + " y el correo es: " + email.value + "</p>";
    }else{
        alert("Datos incorrectos");
    }
    
}
function ejercicio2() {
    event.preventDefault();
    var num1 = Number(document.getElementById("num1-ex-2").value);
    var num2 = Number(document.getElementById("num2-ex-2").value);
    var num3 = Number(document.getElementById("num3-ex-2").value);
    var num4 = Number(document.getElementById("num4-ex-2").value);

    if(num1!=0 && num2!=0 && num3!=0 && num4!=0){
        suma = num1 + num2
        producto = num3 * num4
        document.querySelector(".exc.e2 .show-result").innerHTML = "<p>La suma es: " + suma + " y el producto es: " + producto + "</p>";
    }else{  
        alert("Datos incorrectos"); 
    }
}
function ejercicio3() {
    event.preventDefault();
    var num1 = Number(document.getElementById("num1-ex-3").value);
    var num2 = Number(document.getElementById("num2-ex-3").value);

    if(num1!=0 && num2!=0){
        if(num1>num2){
            var suma = num1 + num2
            var diferencia = num1 - num2
            document.querySelector(".exc.e3 .show-result").innerHTML = "<p>La suma es: " + suma + " y la diferencia es: " + diferencia + "</p>";
        }else{
            var producto = num1 * num2
            var division = num2 / num1
            document.querySelector(".exc.e3 .show-result").innerHTML = "<p>El producto es: " + producto + " y la division es: " + division + "</p>";
        }
    }else{
        alert("Datos incorrectos");
    }
}
function ejercicio4() {
    event.preventDefault();
    var num1 = Number(document.getElementById("not1-ex-4").value);
    var num2 = Number(document.getElementById("not2-ex-4").value);
    var num3 = Number(document.getElementById("not3-ex-4").value);

    if(num1!=0 && num2!=0 && num3!=0){
        var media = (num1 + num2 + num3) / 3
        if(media >= 4){
            document.querySelector(".exc.e4 .show-result").innerHTML = "<p>El promedio es: " + media + "<br>Estado: Regular</p>";
        }else{
            document.querySelector(".exc.e4 .show-result").innerHTML = "<p>El promedio es: " + media + "<br>Estado: Desaprobado</p>";
        }
    }else{
        alert("Datos incorrectos");
    }
}
function ejercicio5() {
    event.preventDefault();
    var num1 = Number(document.getElementById("num1-ex-5").value);
    var num2 = Number(document.getElementById("num2-ex-5").value);
    var num3 = Number(document.getElementById("num3-ex-5").value);

    if(num1!=0 && num2!=0 && num3!=0){
        var max_num = Math.max(num1,num2,num3)
        document.querySelector(".exc.e5 .show-result").innerHTML = "<p>El numero mayor es: " + max_num + "</p>";
    }else{
        alert("Datos incorrectos");
    }
}