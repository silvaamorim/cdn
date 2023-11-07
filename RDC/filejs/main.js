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
                    consorcio.innerText=Dados.Linhas[i].Consorcio

                }
            }
        })
    })
});

$(document).ready(function(){
  
    fetch("filejson/consorcios.json").then((response) => {
        response.json().then((Dados) => {
            let consorcios = document.getElementById("scs");
            let options = document.createElement("option");
                       

            for (let i = 0; i < Dados.length; i++){
                options.text = Dados[i].Consorcio;
                options.value = Dados[i].Consorcio;
                consorcios.add(options);
               
            }
        })
    });
  
    $(".add").click(function(){

      if(confirm("Deseja mesmo criar um novo item?")){
        let clone= this.getAttribute('data-clone');
        let caixa= this.getAttribute('data-caixa');        
        let origem = document.getElementById(clone);
        let totaldiv = document.getElementById(caixa).getElementsByTagName('div').length +1
        let clonado = origem.cloneNode(true);
        let num = "clone" + totaldiv.toString()
        clonado.id= num
        let labelclonado = clonado.getElementsByTagName("label").length

        for(let i = 0; i < labelclonado; i++){
            let labelnome = clonado.getElementsByTagName("label")[i].getAttribute("for")  + totaldiv.toString();
            let labelirmao = clonado.getElementsByTagName("label")[i].parentElement.lastElementChild.id + totaldiv.toString();

            clonado.getElementsByTagName("label")[i].setAttribute("for", labelnome);
            clonado.getElementsByTagName("label")[i].parentElement.lastElementChild.id = labelirmao;
            clonado.getElementsByTagName("label")[i].parentElement.lastElementChild.setAttribute("name", labelnome);

            
        }
        clonado.classList.add("deletar");
        clonado.getElementsByTagName("img")[0].setAttribute("class", "delete");
        document.getElementById(caixa).appendChild(clonado);

    }
      
    });

    $(".dados").on("click",".delete",function(){
      if(confirm("Deseja mesmo excluir o item?")){
        let ids = $(this).closest("div")[0].parentElement.id;        
        let pai = document.getElementById("dados");        
        let filho = document.getElementById(ids)
        filho.parentNode.removeChild(filho) 
      }      
      

      
    });
  
  
  });