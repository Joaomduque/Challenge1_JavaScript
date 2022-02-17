//ROUND 1:
function sequencia_operacoes(a,b,c,d,e,f){
    let operacao=a+b;
    operacao-=c;
    operacao=operacao*(d/e);
    operacao=operacao**f; //operação exponenciada por f
    return console.log(operacao);
}
sequencia_operacoes(6,2,1,4,2,3);

//ROUND 2:
function splitadora(a){
    a = a.toString(); //Transforma a em string
    let lista=[]; //criação da lista vazia
    for (let i=0;i<a.length;i++){  
        lista[i] = a[i]; /* .charAt Navega pelos caracteres de a, logo
        a cada iteração, um caractere de a, está sendo adicionado à lista*/
        }
    return lista;    
    }
        console.log(splitadora(23));

//ROUND 3:
function revertePalavra(palavra){
    let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] // definição do array que é o banco de dados da substituição (no caso o alfabeto);
    let novapalavra = '';   // Definição da string vazia que vai receber os novos caracteres;
    for (let letra of palavra){  // Looping de leitura de cada letra da palavra inserida na função;
        for(let j=0;j<alfabeto.length;j++){    // Looping de leitura de cada letra do alfabeto
            if(letra==alfabeto[j]&&letra!='z'){ // Comparação das letras da palavra inserida com as letras do alfabeto
                novapalavra+=alfabeto[j+1];} // Ação principal de substituir a letra (já pareada com o índice do alfabeto) pela próxima letra (de posiçaõ j+1) do alfabeto.
            else if (letra=='z') { // Adição da exceção do z, que volta à primeira letra do alfabeto.
                novapalavra+='a'
                break
                }        
            }
        }   
    return novapalavra;
    }
console.log(revertePalavra('bgddrd'));

//ROUND 4:
function frequencia_letras(a, b){
    let n = 0;
    splitadora(b);
    for (let letra of b){
        if (a==letra.toLowerCase()||a==letra.toUpperCase()){
            n++};
    };    
    return console.log( 'A letra ' + a + ' aparece ' + n + ' vezes na palavra/frase: ' + b);
     //faz a leitura de todas as letras de b
};
frequencia_letras('r', 'Roupagem diferenciada');

//ROUND 5:

function merge_array (x,y){
    let z=x.concat(y);
    for (item1 of x){
        for(item2 of y){
            let indice = z.indexOf(item2);
            if(item1==item2)
                z.splice(indice,1);}
            }
    return console.log(z.sort(function compare (a,b){
        if(a>b) return 1;
        if(a<b) return -1;
        return 0}));
    }

merge_array([20,32,-4,4],[-4,5,20,33,32]);

//Round 6:
function valida_inteiro (num){
    const teste = num;
    num=parseInt(num);
    if (num===teste){
        return true;
    }
    else{
        return false;
    }
}
console.log(valida_inteiro(10.48));
