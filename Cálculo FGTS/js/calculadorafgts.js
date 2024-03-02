function verificarSelect(campo, input) {

    let aux = document.getElementById(campo);
    let aux2 = document.getElementById(input);

    console.log(aux);

    if (aux.value == "0.02") {
        aux2.value = "2%";
        aux2.setAttribute("disabled", "disabled");

    } else if (aux.value == "0.112") {
        aux2.value = "11.2%";
        aux2.setAttribute("disabled", "disabled");

    } else if (aux.value == "0.08") {
        aux2.value = "8%";
        aux2.setAttribute("disabled", "disabled");

    } else {
        aux2.value = "";
        aux2.removeAttribute("disabled", "disabled");

    }


}


function calcularFGTS() {

    //

    let aliquota;
    let salarioBruto;

    //

    let aux = document.getElementById("ivaloraliquota");
    let aux2 = document.getElementById("isalariobruto");

    //

    if (aux.value == "2%") {
        aliquota = 0.02;

    } else if (aux.value == "11.2%") {
        aliquota = 0.112;

    } else if (aux.value == "8%") {
        aliquota = 0.08;

    } else {
        aliquota = (parseFloat(aux.value) / 100);

    }

    salarioBruto = parseFloat(aux2.value);

    console.log(aliquota);
    console.log(salarioBruto);

    let fgts = (aliquota * salarioBruto);

    console.log(fgts);

    document.getElementById("iresultado").innerHTML = ("R$" + fgts.toFixed(2));


}