const first = [1, 3, 3, 4, 6, 5, 4];
const second = [6, 3, 5, 2, 2];

const difference = () => {
    const arr = [];
    first.map(firstNumber =>{
        if (!second.includes(firstNumber)&&!arr.includes(firstNumber)){
            arr.push(firstNumber);
        }
    });
    second.map(secondNumber =>{
        if(!first.includes(secondNumber)&& !arr.includes(secondNumber)){
            arr.push(secondNumber);
        }
    });
    console.log(arr.sort())
}

difference();
// Implement a logic that finds difference between "first" and "secord" lists
// and prints the result to the console:
// [1, 2, 4]