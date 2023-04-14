// Caso queira ver a sequência calculada, basta descomentar (apagando as duas barras) os códigos da linha 8 e 11.
let input = 1200;

function isFibonacci(n){
    let n1 = 0;
    let n2 = 1;

//    console.log(n1);

    while(n1 < n || n2 < n){
//        console.log(n2);
        [n1, n2] = [n2, n1+n2];
    }

    if(n1 == n) console.log(`O número ${n} pertence à sequencia de Fibonacci.`);
    else console.log(`O número ${n} não pertence à sequencia de Fibonacci.`);
}

isFibonacci(input);

