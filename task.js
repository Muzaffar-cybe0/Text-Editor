let input = document.getElementById('input');
let btn = document.getElementById('button');
let container = document.getElementById('textcont');
let warning = document.getElementById("warning");
let storage = document.getElementById('storage');
storage.innerText = localStorage.getItem('container');
btn.onclick = () =>{
    if(input.value){
        
        let delbtn = document.createElement("button");
        let list = document.createElement("li");
        list.innerHTML = input.value;
        list.style.fontSize = "25px";
        delbtn.innerText = "";
        delbtn.style.width = "100px";
        delbtn.style.height = "26px";
        delbtn.className = "fa-solid fa-trash";
        delbtn.style.color = "#E64A19"
        container.appendChild(list);
        list.appendChild(delbtn);
        delbtn.onclick = () =>{
            container.removeChild(list)
        }
        input.value = "";
        localStorage.setItem('container',container.innerText);
        storage.innerText += localStorage.getItem('container');
    }
    else{
        warning.innerText = "Please enter text";
        warning.style.color = "red"
    }
};








// let salom = 25;
// let result;
// switch(salom / 5){
//     case 1:
//     result = 'one'
//     break;
//     case 5:
//     result = 'five'
//     break;
//     default:
//         result = 'topilmadi';
//         break;    
// }
// console.log(`number is ${result}`);


// // program for a simple calculator
// let result;

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;
//     case '/':
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }


