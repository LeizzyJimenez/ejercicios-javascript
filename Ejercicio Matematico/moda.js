const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    1,
];

function creaArray (lista){
    const lista1Count = {};
    lista.map(
        function(elemento){
            if (lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }else {
                lista1Count[elemento] = 1;
            }
        }
    );
    return lista1Count;
};

function calcularModa (lista){

const lista1Count = creaArray(lista);

const lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }
);

    return lista1Array[lista1Array.length - 1];
};