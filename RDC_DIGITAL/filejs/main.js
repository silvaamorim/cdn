$("#linhas").change(function() {
    let linhaatual = document.getElementById("linhas");
    let linha = linhaatual.value.substring(0, 2).trim();
    let linhacel = document.getElementById("linha");
    let consorcio = document.getElementById("cons");
    let contrato = document.getElementById("ncontrato");
    if(linhaatual.value == "7 (Rubi)"){
        
        linhacel.style.backgroundColor = "#F62217";
        linhaatual.style.backgroundColor = "#F62217";

    }
    else if(linhaatual.value == "10 (Turquesa)"){
        
        linhacel.style.backgroundColor = "#40E0D0";
        linhaatual.style.backgroundColor = "#40E0D0";

    }
    else if(linhaatual.value == "11 (Coral)"){
        
        linhacel.style.backgroundColor = "#FF7F50";
        linhaatual.style.backgroundColor = "#FF7F50";

    }
    else if(linhaatual.value == "12 (Safira)"){
        
        linhacel.style.backgroundColor = "#385f8f";
        linhaatual.style.backgroundColor = "#385f8f";

    }

    else if(linhaatual.value == "13 (Jade)"){
        
        linhacel.style.backgroundColor = "#00a86b";
        linhaatual.style.backgroundColor = "#00a86b";

    }
    else {
        
        linhacel.style.backgroundColor = "#FFFFFF";
        linhaatual.style.backgroundColor = "#FFFFFF";

    }

    fetch("filejson/contrato.json").then((response) => {
        response.json().then((Dados) => {

            for (let i = 0; i < Dados.Linhas.length; i++){
                if(linha === Dados.Linhas[i].Linha){
                    contrato.value=Dados.Linhas[i].Contrato
                    consorcio..innerText=Dados.Linhas[i].Consorcio

                }
            }
        })
    })
});
