//Codigo del cuadrado
console.group("Cuadrado"); //Agrupar mensajen en la consola

function perimetroCuadrado (lado) {
    return lado * 4; 
};
function areaCuadrado (lado){
    return lado * lado
};

console.groupEnd(); //Finaliza el grupo de la consola

//Código del triángulo
console.group("Triangulo");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
};
function areaTriangulo (base, altura) {
    return (base * altura) /2;
};


console.groupEnd();

//Código circulo
console.group("Circulos");
function diametroCirculo (radio){
    return radio *2;
};
const PI = Math.PI;
function perimetroCirculo (radio){
    const diametro = diametroCirculo (radio);
    return diametro * PI;
}; 
function areaCirculo (radio) {
    return (radio * radio) * PI;
};

console.groupEnd();

//Función que se ejecuta cuando se click a un boton desde html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
};
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
};
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
};
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = diametroCirculo(value);
    alert(perimetro);
};
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputLado1");
    const lado1Value = Number(inputLado1.value);
    const inputLado2 = document.getElementById("InputLado2");
    const lado2Value = Number(inputLado2.value);
    const inputBase = document.getElementById("InputBase");
    const baseValue = Number(inputBase.value);
    const perimetro = perimetroTriangulo(lado1Value, lado2Value, baseValue);
    alert(perimetro);
};
function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputBase");
    const baseValue = Number(inputBase.value);
    const inputAltura = document.getElementById("InputAltura");
    const AlturaValue = Number(inputBase.value);
    const area = areaTriangulo(baseValue, AlturaValue);
    alert(area);
};







