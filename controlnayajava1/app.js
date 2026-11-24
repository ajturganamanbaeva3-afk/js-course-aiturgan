const text = "Написать программу которая считает количество гласных букв в тексте. Результатом должен быть объект, где ключом будет буква, а значением количество её вхождений в тексте.";
const vowels = "аеёиоуыэюя";
const result = {};



for (const char of text) {
    if (vowels.includes(char)) {
        if (result[char]) {
            result[char]++;
} else {
    result[char] = 1;
}
}
}

console.log(result);


//задание 2
const numbers = [13, 56, 67, 78, 45, 89, 98, 34, 12, 15, 95, 44, 22, 41]; 
let maxNumber = numbers[0];

for( const number of numbers ) {
    if (number > maxNumber) {
        maxNumber = number;
    }
}
console.log( maxNumber) ;