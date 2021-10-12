function Sumar(){
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var resultado=parseInt(num1) + parseInt(num2);
    alert("La suma de los números es: " + resultado);
}

function Restar(){
  var num1=document.getElementById("n1").value;
  var num2=document.getElementById("n2").value;
  var resultado=parseInt(num1) - parseInt(num2);
    alert("La suma de los números es: " + resultado);
}
function Multiplicar(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var resultado=parseInt(num1)*parseInt(num2);
    alert("La suma de los números es: " + resultado);
}
function Dividir(){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var resultado=parseInt(num1)/parseInt(num2);
    alert("La suma de los números es: " + resultado);
}
function Ver(){
var dato=document.getElementById("Materia").value;
switch (dato){
    case "Programacion":
        alert("Usted a selecionado Programación");
        break;
    case "Soporte TI":
        alert("Usted a selecionado Soporte TI");
        break;
     case "TICS":
            alert("Usted a selecionado TICS");
            break;
     case "Diseño de software":
            alert("Usted a selecionado Diseño de software");
            break;

        default:
            break;

}
}

function Validar(){
 var Edad = document.getElementById("Edad").value;
 if(Edad>=18){
     alert("Eres mayor de edad");
 }
 else{
     alert("Eres menor de edad");
 }
}