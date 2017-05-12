function getResult(sign) {
    var num1, num2, result;

    num1 = getValue("n1");

    num2 = getValue("n2");
    
    switch (sign.innerHTML) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }


    document.getElementById("out").innerHTML = result;
}

function getValue(id){
    var el = document.getElementById(id).value;
    return parseInt(el);
}