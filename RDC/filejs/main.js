$("#linhas").change(function() {
    let linhaatual = document.getElementById("linhas");
    let linha = linhaatual.value.substring(0, 2).trim();
    let linhacel = document.getElementById("linha");
    let consorcio = document.getElementById("scs");
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
                    contrato.value=Dados.Linhas[i].Contrato;
                    consorcio.value=Dados.Linhas[i].Consorcio;
                    break;

                }
                else{
                    contrato.value="";
                    consorcio.value="";
                }
            }
        })
    });

    ///Equipe Especifica do Consórcio

    fetch("filejson/equipeconsorcio.json").then((response) => {
        response.json().then((Dados) => {
            $("#fsc").empty();           
            let fiscalcconsorcio = document.getElementById("fsc");            
            let consorcio = document.getElementById("scs").value;

             fiscalcconsorcio.options[0] = new Option("",  "");

            for (let i = 0; i < Dados.length; i++){
                if(consorcio === Dados[i].Consorcio.toUpperCase()){
                    fiscalcconsorcio.options[fiscalcconsorcio.options.length] = new Option(Dados[i].Nome,  Dados[i].Nome);
                    
                }
            }
        })
    });

    ///Item Especifico do Consórcio

    fetch("filejson/itenscontrato.json").then((response) => {
        response.json().then((Dados) => {
            $("#cod").empty();           
            let itenscontrato = document.getElementById("cod");            
            let consorcio = document.getElementById("scs").value;

             itenscontrato.options[0] = new Option("",  "");

            for (let i = 0; i < Dados.length; i++){
                if(consorcio === Dados[i].Consorcio.toUpperCase()){
                    itenscontrato.options[itenscontrato.options.length] = new Option(Dados[i].Codigo_VP,  Dados[i].Codigo_VP);
                    
                }
            }
        })
    });

///Estações Inicial e Final

    fetch("filejson/estacoes.json").then((response) => {
        response.json().then((Dados) => {
            $("#esti").empty();
            $("#estf").empty();
            $("#mun").empty();

            

            let estacaoi = document.getElementById("esti");            
            let estacaof = document.getElementById("estf");
            let mun = document.getElementById("mun");
            let estacaoinicial =[];
            let estacaofinal =[];
            let nunicpio =[];
            let testeestacaoinicial = ""
            let testeestacaofinal = ""
            let testenunicpio = ""

            estacaoi.options[0] = new Option("", "");
            estacaof.options[0] = new Option("", "");
            mun.options[0] = new Option("", "");

            for (let i = 0; i < Dados.length; i++){
                if(linhaatual.value === Dados[i].Linha_Nome ){
                     testeestacaoinicial = estacaoinicial.find((element) => element == Dados[i].Estacoes_inicial)
                     testeestacaofinal = estacaofinal.find((element) => element == Dados[i].Estaces_Final)
                     testenunicpio = nunicpio.find((element) => element == Dados[i].Municipios)

                    if(testeestacaoinicial == undefined){                    
                        estacaoinicial.push(Dados[i].Estacoes_inicial);
                        estacaoi.options[estacaoi.options.length] = new Option(Dados[i].Estacoes_inicial,  Dados[i].Estacoes_inicial);
                    }
                    if(testeestacaofinal == undefined){                    
                        estacaofinal.push(Dados[i].Estaces_Final);
                        estacaof.options[estacaof.options.length] = new Option(Dados[i].Estaces_Final,  Dados[i].Estaces_Final);
                    }
                    if(testenunicpio == undefined){                    
                        nunicpio.push(Dados[i].Municipios);
                        mun.options[mun.options.length] = new Option(Dados[i].Municipios,  Dados[i].Municipios);
                    } 
                    
                }
            }
        })
    });
    
    
});

$(document).ready(function(){
    
  ///preencher select Consorcios
    fetch("filejson/consorcios.json").then((response) => {
        response.json().then((Dados) => {
            let consorcios = document.getElementById("scs");
            let texto = "";
            let valor = "";
                       

            for (let i = 0; i < Dados.length; i++){
                texto = Dados[i].Consorcio;
                valor = Dados[i].Consorcio;
                consorcios.options[consorcios.options.length] = new Option(texto,  valor);
               
            }
        })
    });

///preencher select Veículo
    fetch("filejson/veiculoconsorcio.json").then((response) => {
        response.json().then((Dados) => {
            let veiculos = document.getElementById("vcl");
            let texto = "";
            let valor = "";
                       

            for (let i = 0; i < Dados.length; i++){
                texto = Dados[i].Veiculo;
                valor = Dados[i].Veiculo;
                veiculos.options[veiculos.options.length] = new Option(texto,  valor);
               
            }
        })
    });


    ///preencher select Equipamento
    fetch("filejson/equipamentoconsorcio.json").then((response) => {
        response.json().then((Dados) => {
            let equipamentos = document.getElementById("eqp");
            let texto = "";
            let valor = "";
                       

            for (let i = 0; i < Dados.length; i++){
                texto = Dados[i].Equipamento;
                valor = Dados[i].Equipamento;
                equipamentos.options[equipamentos.options.length] = new Option(texto,  valor);
               
            }
        })
    });


    ///preencher select Material
    fetch("filejson/materialconsorcio.json").then((response) => {
        response.json().then((Dados) => {
            let materiais = document.getElementById("mtr");
            let texto = "";
            let valor = "";
                       

            for (let i = 0; i < Dados.length; i++){
                texto = Dados[i].Codigo;
                valor = Dados[i].Codigo;
                materiais.options[materiais.options.length] = new Option(texto,  valor);
               
            }
        })
    });


    ///preencher select Mão de Obras
    fetch("filejson/funcaoconsorcio.json").then((response) => {
        response.json().then((Dados) => {
            let funcoes = document.getElementById("mob");
            let texto = "";
            let valor = "";
                       

            for (let i = 0; i < Dados.length; i++){
                texto = Dados[i].Funcao;
                valor = Dados[i].Funcao;
                funcoes.options[funcoes.options.length] = new Option(texto,  valor);
               
            }
        })
    });


    
///preencher select equipe CPTM
    fetch("filejson/equipecptm.json").then((response) => {
        response.json().then((Dados) => {
            let fiscalcptm = document.getElementById("fcm");
            let supervisorcptm = document.getElementById("fsm");           
                       

            for (let i = 0; i < Dados.length; i++){
                
                fiscalcptm.options[fiscalcptm.options.length] = new Option(Dados[i].Nome,  Dados[i].Nome);
                supervisorcptm.options[supervisorcptm.options.length] = new Option(Dados[i].Nome,  Dados[i].Nome);
               
            }
        })
    });

    ///Função para adicionr novos campos para os itens Serviço, Veículo, Equipamento e Mão de Obra
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


    ///Função para remover campos para os itens Serviço, Veículo, Equipamento e Mão de Obra

    $(".dados").on("click",".delete",function(){
      if(confirm("Deseja mesmo excluir o item?")){
        let ids = $(this).closest("div")[0].parentElement.id;        
        let pai = document.getElementById("dados");        
        let filho = document.getElementById(ids)
        filho.parentNode.removeChild(filho) 
      }      
      

      
    });


    ///Função para adiconar descrição e unidade para o item Serviço

     $(".dados").on("click",".servico",function(){

         let id = this.getAttribute('id');
         let codvp = document.getElementById(id).value;

             fetch("filejson/itenscontrato.json").then((response) => {
        response.json().then((Dados) => {                 
            let descricao = document.getElementById("dsc");            
            let unidade = document.getElementById("und");             

            for (let i = 0; i < Dados.length; i++){
                if(codvp === Dados[i].Codigo_VP){
                    descricao.value= Dados[i].Codigo + "-" + Dados[i].Descricao;
                    unidade.value= Dados[i].Unid;                    
                }
            }
        })
    });




    });
  
  
  });
