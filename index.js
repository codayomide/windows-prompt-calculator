let x = prompt("First Number: "),
    y = prompt("Second Number: "),
    operator = prompt("Select operator(+, -, *, /): "),
    
    num1 = Number(x),
    num2 = Number(y);

const operation = () => {
    if (operator === "+") {
        alert(`${num1} + ${num2} = ${num1 + num2}`);
    } else if (operator === "-") {
        alert(`${num1} - ${num2} = ${num1 - num2}`);
    } else if (operator === "*") {
        alert(`${num1} * ${num2} = ${num1 * num2}`);
    } else if (operator === "/") {
        alert(`${num1} / ${num2} = ${num1 / num2}`);
    } else {
        !operator
    };
};

if (isNaN(num1) || isNaN(num2) || !operator) {
    alert("Invalid input")
} else {
    operation()
};