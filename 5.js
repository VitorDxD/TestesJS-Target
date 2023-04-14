let input = 'Escreva o que você quiser inverter aqui';

function inverting(word){
    let flag = word.length - 1;
    let array = [];

    while(flag > 0){
        array.push(word[flag]);
        flag -= 1;
    }
    array.push(word[0]);

    console.log(array.join(''))
}

inverting(input);