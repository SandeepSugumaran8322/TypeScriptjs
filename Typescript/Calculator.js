var Calculator;
(function (Calculator) {
    Calculator[Calculator["ADD"] = 0] = "ADD";
    Calculator[Calculator["SUB"] = 1] = "SUB";
    Calculator[Calculator["MUL"] = 2] = "MUL";
    Calculator[Calculator["DIV"] = 3] = "DIV";
})(Calculator || (Calculator = {}));
function calci(op1, op2, operand) {
    switch (operand) {
        case Calculator.ADD:
            console.log(op1 + op2);
            break;
        case Calculator.SUB:
            console.log(op1 - op2);
            break;
        case Calculator.MUL:
            console.log(op1 * op2);
            break;
        case Calculator.DIV:
            if (op2 == 0) {
                console.log("Divide by zero exception");
                break;
            }
            console.log(op1 / op2);
            break;
        default:
            console.log("please enter the valid operator");
            break;
    }
}
calci(5, 10, Calculator.ADD);
calci(5, 10, Calculator.SUB);
calci(5, 10, Calculator.MUL);
calci(5, 0, Calculator.DIV);
