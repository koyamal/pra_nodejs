function addNumberFactory(num){
    function addNumber(value){
        return num + value;
    }
    return addNumber;
}

const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);
const result = add5(10);
console.log(result);

const result2 = add10(15);
console.log(result2);

const result3 = add5(5);
console.log(result3);