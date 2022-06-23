//GRUPO: Maria Eduarda, Nicolle, Luiza - 2MIB
//Abra o cmd
//Navegue até o local aonde está o arquivo no meu caso (cd Desktop)
//Dentro do local onde o arquivo está: node Ac-1_RCS.js
//Vai te devolver um valor de mensagem criptografada
//Cole esse valor em Dkrypt("") na linha 54
//Para alterar a frase que está sendo criptografada: krypto("ac") linha 35

let Alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var krypto = krypto
var Dkrypt = Dkrypt
    
    function krypto(pharse){
        let frase = '';
    
        pharse.toLowerCase();
       for(let i = 0; i < pharse.length; i++){
           let x = pharse.charCodeAt([i]);
           let m = String.fromCharCode(x);
    
           if(m.toLowerCase() === m){
               if(pharse == ''){
                   return m.trim();
               }
               if(/[\d\s\.]+/.test(m)){
                    frase += m;
               }
               else{
                   x = (x - 97 + 4) % 26;
                   frase += Alpha[x];
               }       
           }        
      }
       return console.log('Mensagem criptografada:', frase)
    }
    krypto("ac");
    
    function Dkrypt(pharse){
        let frase = ''
        pharse.toLowerCase();
        for(let i = 0; i < pharse.length; i++){
            let x = pharse.charCodeAt([i]);
            let m = String.fromCharCode(x);
    
                if(/[\d\s\.]+/.test(m)){
                    frase += m
                }
                else{
                   x = (x - 23) % 26;
                   frase += Alpha[x];
                }    
            }        
        return console.log('Mensagem descriptografada:', frase)
     }
     
    Dkrypt("")