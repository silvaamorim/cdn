$("#linhas").change(function() {
    let linhaatual = document.getElementById("linhas");
    let linha = linhaatual.value.substring(0, 2).trim();
    let linhacel = document.getElementById("linha");
    let consorcio = document.getElementById("scs");
    let contrato = document.getElementById("ncontrato");
    let logo = document.getElementById("logo");
    let rotulolinha = document.getElementById("llinha");
    if(linhaatual.value == "7 (Rubi)"){
        
        linhacel.style.backgroundColor = "#F62217";
        linhaatual.style.backgroundColor = "#F62217";
        linhaatual.classList.remove("text-black");
        linhaatual.classList.add("text-white");
        rotulolinha.classList.remove("text-black");
        rotulolinha.classList.add("text-white");
        contrato.value="";
        logo.src="img/Brasao.png";

    }
    else if(linhaatual.value == "10 (Turquesa)"){
        
        linhacel.style.backgroundColor = "#40E0D0";
        linhaatual.style.backgroundColor = "#40E0D0";
        linhaatual.classList.remove("text-black");
        linhaatual.classList.add("text-white");
        rotulolinha.classList.remove("text-black");
        rotulolinha.classList.add("text-white");
        contrato.value="";
        logo.src="img/Brasao.png";

    }
    else if(linhaatual.value == "11 (Coral)"){
        
        linhacel.style.backgroundColor = "#FF7F50";
        linhaatual.style.backgroundColor = "#FF7F50";
        linhaatual.classList.remove("text-black");
        linhaatual.classList.add("text-white");
        rotulolinha.classList.remove("text-black");
        rotulolinha.classList.add("text-white");
        contrato.value="";
        logo.src="img/Brasao.png";

    }
    else if(linhaatual.value == "12 (Safira)"){
        
        linhacel.style.backgroundColor = "#385f8f";
        linhaatual.style.backgroundColor = "#385f8f";
        linhaatual.classList.remove("text-black");
        linhaatual.classList.add("text-white");
        rotulolinha.classList.remove("text-black");
        rotulolinha.classList.add("text-white");
        contrato.value="";
        logo.src="img/Brasao.png";

    }

    else if(linhaatual.value == "13 (Jade)"){
        
        linhacel.style.backgroundColor = "#00a86b";
        linhaatual.style.backgroundColor = "#00a86b";
        linhaatual.classList.remove("text-black");
        linhaatual.classList.add("text-white");
        rotulolinha.classList.remove("text-black");
        rotulolinha.classList.add("text-white");
        contrato.value="";
        logo.src="img/Brasao.png";

    }
    else {
        
        linhacel.style.backgroundColor = "#FFFFFF";
        linhaatual.style.backgroundColor = "#FFFFFF";
        linhaatual.classList.remove("text-white");
        linhaatual.classList.add("text-black");
        rotulolinha.classList.remove("text-white");
        rotulolinha.classList.add("text-black");     
        contrato.value="";
        logo.src="img/Brasao.png";
         $("#fsc").empty(); 
        $("#cod").empty();                    
            

    }


    ///preencher select Consorcios
    fetch("filejson/contrato.json").then((response) => {
        response.json().then((Dados) => {
            $("#scs").empty();
            let consorcios = document.getElementById("scs");
            let texto = "";
            let valor = "";           
            consorcios.options[0] = new Option("",  "");
                       

            for (let i = 0; i < Dados.Linhas.length; i++){
                 if(linha === Dados.Linhas[i].Linha){
                texto = Dados.Linhas[i].Consorcio.toUpperCase();
                valor = Dados.Linhas[i].Consorcio.toUpperCase();
                consorcios.options[consorcios.options.length] = new Option(texto,  valor);
               
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
            let municipio =[];
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
                     testenunicpio = municipio.find((element) => element == Dados[i].Municipios)

                    if(testeestacaoinicial == undefined){                    
                        estacaoinicial.push(Dados[i].Estacoes_inicial);                       
                         
                        ///estacaoi.options[estacaoi.options.length] = new Option(Dados[i].Estacoes_inicial,  Dados[i].Estacoes_inicial);
                    }
                    if(testeestacaofinal == undefined){                    
                        estacaofinal.push(Dados[i].Estaces_Final);
                        ///estacaof.options[estacaof.options.length] = new Option(Dados[i].Estaces_Final,  Dados[i].Estaces_Final);
                    }
                    if(testenunicpio == undefined){                    
                        municipio.push(Dados[i].Municipios);
                        ///mun.options[mun.options.length] = new Option(Dados[i].Municipios,  Dados[i].Municipios);
                    }                      
                    
                }
            }
                    estacaoinicial.sort();
                     estacaofinal.sort();
                     municipio.sort();

                    for(let i = 0; i< estacaoinicial.length; i++){

                        estacaoi.options[estacaoi.options.length] = new Option(estacaoinicial[i].toUpperCase(), estacaoinicial[i].toUpperCase());
                        
                    }

                    for(let i = 0; i< estacaofinal.length; i++){

                        estacaof.options[estacaof.options.length] = new Option(estacaofinal[i].toUpperCase(), estacaofinal[i].toUpperCase());
                        
                    }

                    for(let i = 0; i< municipio.length; i++){

                        mun.options[mun.options.length] = new Option(municipio[i].toUpperCase(), municipio[i].toUpperCase());
                        
                    }
        })
    });

    fetch("filejson/Chaves.json").then((response) => {
    response.json().then((Dados) => {
        $("#chv").empty();
               
        let amvs = document.getElementById("chv");        
        //let texto = "";
        //let valor = "";
                  
        amvs.options[0] = new Option("",  "");    
                   

        for (let i = 0; i < Dados.length; i++){
             if(linha === Dados[i].LINHA){
            let option = document.createElement('option'); 
            //texto = Dados[i].CHAVE;
            //valor = Dados[i].CHAVE;
            //amvs.options[amvs.options.length] = new Option(texto,  valor); 
            option.value =Dados[i].CHAVE;
            option.innerText =Dados[i].CHAVE;
            amvs.appendChild(option);
                      
        }
        }
    })
        });
});

//Aplicar as estações e municipio

$("#linhas, #kmi, #kmf").change(function(){

    let linha = document.getElementById("linhas").value.substring(0,2);
    let via = "1";
    let kmi = document.getElementById("kmi").value.substring(0,2);
    let kmf = document.getElementById("kmf").value.substring(0,2);
    let pti = document.getElementById("kmi").value.substring(3,);
    let ptf = document.getElementById("kmf").value.substring(3,);
    let estacai = document.getElementById("esti");
    let estacaf = document.getElementById("estf");
    let municipio = document.getElementById("mun");
    let trechoi = linha+via+kmi+pti;
    let trechof = linha+via+kmf+ptf;

    if(linha!= "" && kmi != "" && pti !="" && kmf != "" && ptf !=""){

        fetch("filejson/estacoes.json").then((response) => {
            response.json().then((Dados) => {                                           
                                                 
                for (let i = 0; i < Dados.length; i++){
    
                    if(trechoi == Dados[i].KM_POSTE){
        
                    estacai.value =Dados[i].Estacoes_inicial.toUpperCase();
                    municipio.value =Dados[i].Municipios;                
    
                    }

                    if(trechof == Dados[i].KM_POSTE){
        
                        estacaf.value =Dados[i].Estacoes_final.toUpperCase();
                                        
        
                        }
                              
                
                }
            })
                });

    }

 });



///Número contrato, Itens de Constrato e Equipe da Contratada
 $("#scs").change(function(){
    let logo = document.getElementById("logo");
     let consorcio = document.getElementById("scs").value;
     let contrato = document.getElementById("ncontrato");
 fetch("filejson/contrato.json").then((response) => {
        response.json().then((Dados) => {          

            for (let i = 0; i < Dados.Linhas.length; i++){
                if(consorcio === Dados.Linhas[i].Consorcio.toUpperCase()){
                    contrato.value=Dados.Linhas[i].Contrato;                    
                    logo.src="img/"+Dados.Linhas[i].Logo;                    
                    break;

                }
                else{
                    contrato.value="";
                    
                    logo.src="img/Brasao.png";
                    
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
                    fiscalcconsorcio.options[fiscalcconsorcio.options.length] = new Option(Dados[i].Nome.toUpperCase(),  Dados[i].Nome.toUpperCase());
                    
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
                    itenscontrato.title=Dados[i].Descricao;
                    
                }
            }
        })
    });

 });
////------------------------

///Mudar rotulo Fiscal CPTM para Colaborador CPTM, e, vice-versa

    $("#fiscalcptm").click(function(){
    
    let labelfcptm = this;

        if(labelfcptm.innerHTML == "FISCAL CPTM"){

            labelfcptm.innerHTML = "ACOMPANHAMENTO CPTM";
        }
        else{

             labelfcptm.innerHTML ="FISCAL CPTM";
        }

    

    });

///incluir link na sa, falha e osm

    $("#dat, #sa, #osm, #fal").change(function(){

    let linha  = document.getElementById("linhas").value.substring(0, 2).trim()
    let cco = "";
    let linksa = document.getElementById("linksa");
    let linkfalha = document.getElementById("linkfalha");
    let linkosm = document.getElementById("linkosm");
    let data = document.getElementById("dat").value;    
    let dia = data.substring(8,);
    let mes = data.substring(5,7);
    let anoserv = data.substring(0,4);
    let dataservico = dia +"/"+mes+"/"+anoserv
    let dadosa = document.getElementById("sa").value;
    let sa = dadosa.substring(0, dadosa.length-5);
    let ano = dadosa.substring(dadosa.length-4, dadosa.length);
    let dadoosm = document.getElementById("osm").value;
    let osm = dadoosm.substring(0, dadoosm.length-5);
    let anoosm = dadoosm.substring(dadoosm.length-4,dadoosm.length);
    let dadofalha = document.getElementById("fal").value;
    let falha = dadofalha.substring(0, dadofalha.length-5);
    let anofalha = dadofalha.substring(dadofalha.length-4,dadofalha.length);

    if(Number(linha) > 10){
        cco= "2";        
    }
    else{

        cco = "1"
    }
        
    
        ///sa
        if(dadosa != "" & dadosa != null){

            linksa.href = "https://appintranet.cptm.sp.gov.br/manutencao/sim/consultar/popCSSA.asp?valor=" + dataservico + "|" + sa + "|" + ano
            linksa.target = "_blank"
        }
        else{
            linksa.href ="#"
            linksa.target=""
        }

        ///osm

        if(osm != "" & osm != null){

            linkosm.href = "https://appintranet.cptm.sp.gov.br/Manutencao/sicom/osm/Msic_ListOsm_1.asp?parametro=5&id_osm=" + osm + "&id_ano=" + anoosm
            linkosm.target = "_blank"
        }
        else{
            linkosm.href ="#"
            linkosm.target=""
        }

         ///falha

        if(falha != "" & falha != null){

            linkfalha.href = "https://appintranet.cptm.sp.gov.br/Manutencao/sicom/OsGeral.asp?id=" + falha + "&id_anosaf=" + anofalha + "&idcco=" + cco
            linkfalha.target = "_blank"
        }
        else{
            linkfalha.href ="#"
            linkfalha.target=""
        }
            

    });

$(document).ready(function(){
    
  

///preencher select Veículo
    fetch("filejson/veiculoconsorcio.json").then((response) => {
        response.json().then((Dados) => {
            let veiculos = document.getElementById("vcl");
            let texto = "";
            let valor = "";
                       

            for (let i = 0; i < Dados.length; i++){
                texto = Dados[i].Veiculo.toUpperCase();
                valor = Dados[i].Veiculo.toUpperCase();
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
                texto = Dados[i].Equipamento.toUpperCase();
                valor = Dados[i].Equipamento.toUpperCase();
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
                texto = Dados[i].Funcao.toUpperCase();
                valor = Dados[i].Funcao.toUpperCase();
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
                
                fiscalcptm.options[fiscalcptm.options.length] = new Option(Dados[i].Nome.toUpperCase(),  Dados[i].Nome.toUpperCase());
                supervisorcptm.options[supervisorcptm.options.length] = new Option(Dados[i].Nome.toUpperCase(),  Dados[i].Nome.toUpperCase());
               
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
        
        $('div#'+num).find('textarea').val('');
        $('div#'+num).find('input').val('');

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

     $(".dados").on("change",".servico",function(){

         let id = this.getAttribute('id');
         let iddesc = this.form[2].id + id.substring(3, );
         let idund = this.form[3].id + id.substring(3, );
         let codvp = document.getElementById(id).value;

             fetch("filejson/itenscontrato.json").then((response) => {
        response.json().then((Dados) => {                 
            let descricao = document.getElementById(iddesc);            
            let unidade = document.getElementById(idund);             

            for (let i = 0; i < Dados.length; i++){
                if(codvp === Dados[i].Codigo_VP){
                    descricao.value= Dados[i].Codigo + "-" + Dados[i].Descricao.toUpperCase();
                    unidade.value= Dados[i].Unid;                    
                }
            }
        })
    });

    });

     ///Função para adiconar descrição e unidade para o item Material

     $(".dados").on("change",".material",function(){

         let id = this.getAttribute('id');
         let iddesc = this.form[2].id + id.substring(3, );
         let idund = this.form[3].id + id.substring(3, );
         let codmat = document.getElementById(id).value;

             fetch("filejson/materialconsorcio.json").then((response) => {
        response.json().then((Dados) => {                 
            let descricao = document.getElementById(iddesc);            
            let unidade = document.getElementById(idund);             

            for (let i = 0; i < Dados.length; i++){
                if(codmat === Dados[i].Codigo){
                    descricao.value= Dados[i].Material.toUpperCase();
                    unidade.value= Dados[i].Un;                    
                }
            }
        })
    });

    });

    ///Função para o total de tempo de uso do equipamento/mão de obra

$(".dados").on("change",".tempo",function(){
    
    let id = this.getAttribute('id');
    let idqtd = ""
    let idtotalh="";
    let hrt = ""
    let mtt = ""

    if("eqh" == id.substring(0,3)) {
        idqtd = this.form[3].id + id.substring(3, );
        idtotalh = "eqt" + id.substring(3, );        
    }
    else{
        idqtd = this.form[2].id + id.substring(3, );
        idtotalh = "mot" + id.substring(3, );
    }
    
    let qtdeqp = document.getElementById(idqtd).value;
    let qtdth = document.getElementById(idtotalh);
    let heqp = document.getElementById(id).value;
    let tm = ((Number(heqp.substring(0,2))*60) + Number(heqp.substring(3,)))* Number(qtdeqp);
    let hr = Math.trunc(tm/60);
    let mt = Math.trunc(((tm/60)-hr)*60)

    if(hr < 10){
        hrt = "0" + hr.toString();
    }
    else
    {
        hrt = hr.toString();
    };

     if(mt < 10){
        mtt = "0" + mt.toString();
    }
    else
    {
        mtt = mt.toString();
    };
    qtdth.value=hrt + ":" + mtt;    

    });



    ///Função para carregar documento/matricula Fiscal Contratada

$("#fcls").on("change","#fsc",function(){
    
    let FiscalContratada = this.value;
    let MatriculaContratada = document.getElementById("mfcs");
    let consorcio = document.getElementById("scs").value;

    fetch("filejson/equipeconsorcio.json").then((response) => {
        response.json().then((Dados) => {               
                       
            for (let i = 0; i < Dados.length; i++){
                if(consorcio === Dados[i].Consorcio.toUpperCase() & FiscalContratada === Dados[i].Nome){
                    MatriculaContratada.value= Dados[i].Matricula;
                    
                }
            }
        });
     });

    });
    
///Função para carregar documento/matricula Fiscal CPTM

$("#fcls").on("change","#fcm",function(){
    
    let FiscalCPTM = this.value;
    let MatriculaCPTM = document.getElementById("mfc");   

    fetch("filejson/equipecptm.json").then((response) => {
        response.json().then((Dados) => {               
                       
            for (let i = 0; i < Dados.length; i++){
                if(FiscalCPTM === Dados[i].Nome){
                    MatriculaCPTM.value= Dados[i].Matricula;
                    
                }
            }
        });
     });

    });

    ///Função para carregar documento/matricula Supervisor CPTM

$("#fcls").on("change","#fsm",function(){
    
    let SupervisorCPTM = this.value;
    let MatriculaCPTM = document.getElementById("msc");   

    fetch("filejson/equipecptm.json").then((response) => {
        response.json().then((Dados) => {               
                       
            for (let i = 0; i < Dados.length; i++){
                if(SupervisorCPTM === Dados[i].Nome){
                    MatriculaCPTM.value= Dados[i].Matricula;
                    
                }
            }
        });
     });

    });   

  
  
  });

 /*imprimir PDF

    const btnpdf = document.querySelector("#logo");

  btnpdf.addEventListener("click", () => {

    const conteudo = document.querySelector("#conteudopdf");

    const opt = {
        
        margin:2,
        filename:"teste.pdf",
        html2canvas: {scale: 2},
        jsPDF: {unit: "mm", format: "a3", orientation: "portrait"}

    }

    html2pdf().set(opt).from(conteudo).save();

  });*/
