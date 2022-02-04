//ROUND 1:
function sequencia_operacoes(a,b,c,d,e,f){
    let operacao=a+b;
    operacao-=c;
    operacao=operacao*(d/e);
    operacao=operacao**f; //operação exponenciada por f
    return console.log(operacao);
}
sequencia_operacoes(2,3,6,4,2,3);

//ROUND 2:
function splitadora(a){
    a = a.toString(); //Transforma a em string
    let lista=[]; //criação da lista vazia
    for (let i=0;i<a.length;i++){  
        lista[i] = a[i]; /* .charAt Navega pelos caracteres de a, logo
        a cada iteração, um caractere de a, está sendo adicionado à lista*/
        }
    return console.log(lista);    
    }
        splitadora(193278);

//ROUND 3:
function revertePalavra(palavra){
    let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    // definição do array que é o banco de dados da substituição (no caso o alfabeto);
    let novapalavra = '';   // definição da string vazia que vai receber os novos caracteres;
    for (let letra of palavra){  // Looping de leitura de cada letra da palavra inserida na função;
        for(let j=0;j<26;j++){    //Looping de leitura de cada letra do alfabeto
            if(letra==alfabeto[j]){ //comparação das letras da palavra inserida com as letras do alfabeto
                novapalavra += alfabeto[j+1]; //ação principal de substituir a letra (já pareada com o índice do alfabeto) pela próxima letra (de posiçaõ j+1) do alfabeto.
            }
        }
    }
    return console.log(novapalavra);
}
revertePalavra('sdrshmf');