//Funciones Helpers
function esPar (numero){
    return (numero % 2 === 0);
  };
  
  function calcularMediaAritmetica (lista){
      
      const sumaLista = lista.reduce(
          function(valorAcumulado = 0, nuevoElemento){
              return valorAcumulado + nuevoElemento;
          }
      );
      let promedioLista = sumaLista / lista.length;
      return promedioLista;
   };

//Calculadora Mediana General
function calcularMediana (lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salarioColSorted = salariosCol.sort (
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);
const medianaGeneralColombia = calcularMediana(salarioColSorted);

//Mediana del top 10%
const spliceStart = (salarioColSorted.length * 90) / 100;
const spliceCount = salarioColSorted.length - spliceStart;
const salarioColTop10 = salarioColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = calcularMediana(salarioColTop10);

console.log (medianaGeneralColombia, medianaTop10Col);

