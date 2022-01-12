/* let lista1 = [
   100,
   200,
   300,
   500
];

let sumaLista1 = 0;

for (let i = 0; i < lista1.length; i++){
    sumaLista1 = sumaLista1 + lista1[i];
};

let promedioLista1 = sumaLista1 / lista1.length; */

function calcularMediaAritmetica (lista){
   /*Opc. 1 recorrer Array
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    };*/

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){ //Valor acumulado es el valor que va sumando y nuevoElemto es el nuevo elemto del array que va leyendo
            return valorAcumulado + nuevoElemento;
        }
    );

    let promedioLista = sumaLista / lista.length;
    return promedioLista;
};


