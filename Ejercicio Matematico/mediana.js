function calcularMediaAritmetica (lista){
    
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    let promedioLista = sumaLista / lista.length;
    return promedioLista;
 };

function esPar(numerito){
    if (numerito % 2 === 0){ //Valida que el número sea par
        return true;
    } else {
        return false;
    }
}

function ordenarArray (lista){
    lista.sort (function(a,b){
    return a - b;
});
};

function calcularMediana (lista){
    let mediana;
    ordenarArray(lista);
    const mitadLista1 = parseInt(lista.length / 2); //parseInt me devuelve un entero de un número decimal 
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista1];
        const elemento2 = lista [mitadLista1 - 1]; //Se resta 1 para ir al segundo elemento de la mitad 
        const promedioElemento1y2 = calcularMediaAritmetica ([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElemento1y2;
    }else {
        mediana = lista[mitadLista1];
    };
    return mediana;
}
