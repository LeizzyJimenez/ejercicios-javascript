// const precioOriginal = 120;
// const descuento = 18;

// console.log ({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });  
// Para comentar ctrl + k + c

let cupones = [
    {
        nombre: 'Cupon 1',
        descuento: 10
    },
    {
        nombre: 'Cupon 2',
        descuento: 15
    },
    {
        nombre: 'Cupon 3',
        descuento: 20
    }
];

function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    return (precio * porcentajePrecioConDescuento)/100; 
};





function onClickButtonPriceDiscount(){
    const idInputPrice = document.getElementById("InputPrice");
    const idInputCupon = document.getElementById("InputCupon");
    const priceValue = idInputPrice.value;
    const cuponValue = idInputCupon.value;

    if (cuponValue ==""){
        alert ("por favor digita un cupon")
    }
    else  {
        const cuponesFind = cupones.find(function(cupon){
            return cupon.nombre === cuponValue;
        });

        if (!cuponesFind) {
            alert("El cupón " + cuponValue + " no es válido");
        } else {
            discount = cuponesFind.descuento;
            const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);
            const idResultP = document.getElementById("ResultPrice")
            return idResultP.innerText = "El precio con descuento es: " + precioConDescuento
        };
    };
};

//Para capturar el valor de input desde html primero se debe capturar el id del input y luego con .value se captura el valor

//Para enviar un valor a una etiqueta desde javascript a html se utiliza .innerText
