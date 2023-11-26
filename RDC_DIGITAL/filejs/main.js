$("#linhas").change(function() {
    let linhaatual = document.getElementById("linhas");
    let linha = linhaatual.value.substring(0, 2).trim();
    let linhacel = document.getElementById("linha");
    let consorcio = document.getElementById("cons");
    let contrato = document.getElementById("ncontrato");
    if(linhaatual.value == "7 (Rubi)"){
        
        linhacel.style.backgroundColor = "#ac184a";
        linhaatual.style.backgroundColor = "#ac184a";

    }
    else if(linhaatual.value == "10 (Turquesa)"){
        
        linhacel.style.backgroundColor = "#17839c";
        linhaatual.style.backgroundColor = "#17839c";

    }
    else if(linhaatual.value == "11 (Coral)"){
        
        linhacel.style.backgroundColor = "#eb601f";
        linhaatual.style.backgroundColor = "#eb601f";

    }
    else if(linhaatual.value == "12 (Safira)"){
        
        linhacel.style.backgroundColor = "#1c146b";
        linhaatual.style.backgroundColor = "#1c146b";

    }

    else if(linhaatual.value == "13 (Jade)"){
        
        linhacel.style.backgroundColor = "#00b352";
        linhaatual.style.backgroundColor = "#00b352";

    }
    else {
        
        linhacel.style.backgroundColor = "#FFFFFF";
        linhaatual.style.backgroundColor = "#FFFFFF";

    }

    fetch("filejson/contrato.json").then((response) => {
        response.json().then((Dados) => {

            for (let i = 0; i < Dados.Linhas.length; i++){
                if(linha === Dados.Linhas[i].Linha){
                    contrato.value=Dados.Linhas[i].Contrato;
                    consorcio.innerText=Dados.Linhas[i].Consorcio;
                    linhaatual.classList.remove("text-black")
                    linhaatual.classList.add("text-white")
                    break;
                }
                else{
                    contrato.value="NÚMERO CONTRATO";
                    consorcio.innerText="CONSÓRCIO";
                    linhaatual.classList.remove("text-white")
                    linhaatual.classList.add("text-black")
                }
            }
        })
    })
});
$("#dados").click(function () {

    fetch("filejson/dados.json")
        .then((response) => {return response.json();}).then((data) =>{console.log(data)})})

