// const precioOriginal = 120;
// const descuento = 18;

// console.log ({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });  
// Para comentar ctrl + k + c

function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    return (precio * porcentajePrecioConDescuento)/100; 
};


function onClickButtonPriceDiscount(){
    const idInputPrice = document.getElementById("InputPrice");
    const idInputDiscount = document.getElementById("InputDiscount");
    const priceValue = idInputPrice.value;
    const priceDiscount = idInputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, priceDiscount);

    const idResultP = document.getElementById("ResultPrice")
    return idResultP.innerText = "El precio con descuento es: " + precioConDescuento
};
