//Ex2
function ordenarArray(array) {
    
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            
            if (array[j + 1] > array[j]) {
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}


const numeros = [7, 5, 2];
console.log("Array original:", numeros);
console.log("Array ordenado:", ordenarArray(numeros));
