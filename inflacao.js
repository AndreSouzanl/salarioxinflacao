import entradaDados from 'readline-sync';

let salarioMinimo = [
    {ano:2010, salario:510.00},
    {ano:2011, salario:545.00},
    {ano:2012, salario:622.00},
    {ano:2013, salario:678.00},
    {ano:2014, salario:724.00},
    {ano:2015, salario:788.00},
    {ano:2016, salario:880.00},
    {ano:2017, salario:937.00},
    {ano:2018, salario:954.00},
    {ano:2019, salario:998.00},
    {ano:2020, salario:1045.00}
    ];
    
    let inflacao =[
    {ano:2010, ipca:5.91},
    {ano:2011, ipca:6.50},
    {ano:2012, ipca:5.84},
    {ano:2013, ipca:5.91},
    {ano:2014, ipca:6.41},
    {ano:2015, ipca:10.67},
    {ano:2016, ipca:6.29},
    {ano:2017, ipca:2.95},
    {ano:2018, ipca:3.75},
    {ano:2019, ipca:4.31},
    {ano:2020, ipca:4.52}
    ];

    console.log("1 - Listar os salarios minimo de 2010 à 2020");
    console.log("2 - Lista o indice IPCA DE 2010 à 2020");
    console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");


    let escolha = entradaDados.questionInt('\nDigite um numero da escolha: ');
      
    if(escolha == "1"){

       for(let i= 0; i < salarioMinimo.length; i++){
       
       let ano = salarioMinimo[i].ano
       let salario = salarioMinimo[i].salario;

      
       let anoFormatado = ano.toString().padStart(26, '...');
       let salarioFormatado = salario.toFixed(2).replace(".", ",").toString().padStart(15, '......'); 
 
       
       
       console.log(`\nAno : ${anoFormatado} `);
       console.log(`Salário mínimo: R$ ${salarioFormatado}\n`); 
 
        
       }

    }
    else if(escolha == "2"){
       
        for(let i =0; i < inflacao.length; i++){
        
        let ano = inflacao[i].ano;
        let ipca = inflacao[i].ipca;

        let anoFormatado = ano.toString().padStart(26, '...');
        let ipcaFormatado = ipca.toFixed(2).replace('.', ',').toString().padStart(16, '...');
        

        console.log(`\nAno : ${anoFormatado}`);
        console.log(`Inflação IPCA: ${ipcaFormatado}%\n`);
        
        
       }
    }
    else if(escolha == "3"){
       for(let i = 0; i < salarioMinimo.length && i < inflacao.length; i++){

        let ano = salarioMinimo[i].ano;
        let salario = salarioMinimo[i].salario;
        let ipca = inflacao[i].ipca;

        if(i > 0){
        let salarioAnterior = salarioMinimo[i - 1].salario;

        let diferenca = salario - salarioAnterior
        let crescimentoSalarial = (diferenca/salarioAnterior) * 100;

        let anoFormatado = ano.toString().padStart(26, '...');
        let ipcaFormatado = ipca.toFixed(2).replace('.', ',').toString().padStart(16, '...');
        let salarioFormatado = salario .toFixed(2).replace(".", ",").toString().padStart(15, '......') ; 
        let crescimentoSalarialFormatado = crescimentoSalarial.toFixed(2).replace(".", ",").toString().padStart(10, '....')
         
        console.log(`\nAno: ${anoFormatado}`);
        console.log(`Salario mínimo:R$${salarioFormatado}`);
        console.log(`Crescimento Salarial:${crescimentoSalarialFormatado}%`)
        console.log(`Inflação IPCA: ${ipcaFormatado}%`);

        }
        else{

        let anoForm = ano.toString().padStart(26, '...')
        let salarioForm = salario.toFixed(2).replace(".", ",").toString().padStart(15, '......');
        let ipcaForm = ipca.toFixed(2).replace('.', ',').toString().padStart(16, '...');
            
        console.log(`\nAno: ${anoForm}`);
        console.log(`Salario minimo:R$${salarioForm }`);
        console.log(`Crecimento Salarial:.......-`);
        console.log(`Inflação IPCA: ${ipcaForm}`);
            
        }
       

    }
    }
    else{
        console.log(`Opção Inválida!`);
    }

    






