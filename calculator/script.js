let keys = document.querySelectorAll(".key");
let clearKey = document.querySelector(".clearKey");
let backSpace = document.querySelectorAll(".clearKey")[1];
let keysArr = [];
let screen = document.querySelectorAll(".screen td")[0];

let lastOperator;
let lastOperation;
let result;

let lastCalc = 0;
let repeatCalc;



function repeatLast() {
    if (result.includes("/") || result.includes("*") || result.includes("-") || result.includes("+")) {
            operator1 = result.lastIndexOf("/");
            operator2 = result.lastIndexOf("*");
            operator3 = result.lastIndexOf("-");
            operator4 = result.lastIndexOf("+");

            last = Math.max(operator1, operator2, operator3, operator4);
            lastOperator = result[last]
            lastOperation = result.substring(last, result.length);
            lastCalc = 1;
            repeatCalc = result.concat(lastOperation);
    }
}
//lisa sulud
for (let i = 0; i<keys.length; i++) {
    keysArr.push(keys[i]);
    keysArr[i].onclick = (function() {
        let lastChar = screen.textContent.length-1;
        let ls = screen.textContent[lastChar];
        let lk = keysArr[i].textContent;
        // number keys
        if (i == 0 || i == 1 || i == 2 || i == 4 || i == 5 || i == 6 || i == 8 || i == 9 || i == 10 || i == 12) {
            if(screen.textContent=="0") {
                let currentText = screen.textContent.slice(0, -1);
                let newValue = currentText.concat(lk);
                screen.textContent = "";
                screen.append(newValue);
            } else if (screen.textContent=="Infinity" || screen.textContent=="NaN") {
                screen.textContent="";
                screen.append(keysArr[i].textContent.replace(/[^0-9%^*\/()\-+.]/g, ''));
            } else {
                screen.append(keysArr[i].textContent.replace(/[^0-9%^*\/()\-+.]/g, ''));
            }            
            return lastCalc = 0;
        //-------------------------//
        // operator keys and comma //
        //-------------------------//               
        // return false if text onscreen
        } else if ((i == 3 || i == 7 || i == 11 || i == 14) && (screen.textContent == "NaN" || screen.textContent == "Infinity")) {
        return false;
        //if no operators are on screen, then apply operator
        } else if ( (i == 3 || i == 7 || i == 11 || i == 14) && (ls != "." && ls != "/" && ls != "*" && ls != "+" && ls != "-" ) )  {
            screen.append(keysArr[i].textContent.replace(/[^0-9%^*\/()\-+.]/g, ''));
        //if operators or commas are on screen, replace last operator
        } else if ((i == 3 || i == 7 || i == 11 || i == 14) && ( ls == "/" || ls == "*" || ls == "+" || ls == "-" )) {
            if(screen.textContent.lastIndexOf(ls) === lastChar) {
                let currentText = screen.textContent.slice(0, -1);
                let newValue = currentText.concat(lk);
                screen.textContent = "";
                screen.append(newValue);
            } else {
                return false;
            }            
        // comma key
        // if no commas are on screen and the last character is not comma, and comma value is less than operator value, apply comma
        } else if ( (i == 13 && ls != "+" && ls != "." && ls != "/" && ls != "*" && ls != "-") ) {
            let lastComma = screen.textContent.lastIndexOf(".");
            if ( (lastComma < screen.textContent.lastIndexOf("+") || 
            lastComma < screen.textContent.lastIndexOf("-") || 
            lastComma < screen.textContent.lastIndexOf("*") || 
            lastComma < screen.textContent.lastIndexOf("/") ) || 
            (!screen.textContent.includes("/") &&
            !screen.textContent.includes("*") &&
            !screen.textContent.includes("-") &&
            !screen.textContent.includes("+") &&
            !screen.textContent.includes(".") &&
            screen.textContent != "")
            ) {
                screen.append(keysArr[i].textContent.replace(/[^0-9%^*\/()\-+.]/g, ''))
            } else {
                return false;
            }        
        } else if (i == 13 && ls == "+" || ls == "." || ls == "/" || ls == "*" || ls == "-") {
            return false;
            
        // enter key
        } else {
            // redo last calc/repeat press of equals 
            if( (screen.textContent != "") && (result != "" || result != undefined) && (lastCalc === 1) ) {
                let result = screen.textContent;
                screen.textContent = "";
                let repeatCalc = result.concat(lastOperation);
                screen.append(eval(repeatCalc));
            // do this when no previous calculations are in memory
            } else {
                if((screen.textContent != "") && (ls != "+" && ls != "." && ls != "/" && ls != "*" && ls != "-")) {
                    result = screen.textContent;
                    screen.textContent = "";
                    screen.append(eval(result));
                    repeatLast();
                } else  {
                    return false;
                }
            }
        }
    });
}

// clear key
clearKey.onclick = function() {
    lastCalc = 0;
    screen.textContent = "0";
    result = "",
    repeatCalc = "";
    lastOperation = "";
    lastOperator = "";
}

// backspace key 
backSpace.onclick = function() {
    newValue =  screen.textContent.slice(0, -1);
    screen.textContent = newValue;
    if(screen.textContent == "") {
        screen.append("0");
    }
}


//keyboard keys
//UNFINISHED

let operatorArr = ["/", "*", "-", "+", "."];
document.onkeydown = (function checkKey(e) {
    let lastChar = screen.textContent.length-1;
    let ls = screen.textContent[lastChar];
    let lk = e.key;
    
    //number keys
    let numberKey = Number(lk);
    if (numberKey) {
       // console.log(numberKey)          
        if (screen.textContent=="0") {
            let currentText = screen.textContent.slice(0, -1);
            let newValue = currentText.concat(lk);
            screen.textContent = "";
            screen.append(newValue);
        } else if (screen.textContent=="Infinity" || screen.textContent=="NaN") {
            screen.textContent=""
            screen.append(numberKey);
        } else {
            screen.append(numberKey);
        }
        return lastCalc = 0; 
    } else if(lk == "0" && screen.textContent != "0") {
        screen.append("0");
    //operator keys
    } else if (operatorArr.includes(lk) && !operatorArr.includes(ls)) {
        screen.append(lk.replace(/[^0-9%^*\/()\-+.]/g, '')); 
    //replace last operator
    } else if (operatorArr.includes(lk) && operatorArr.includes(ls)) {
        if(screen.textContent.lastIndexOf(ls) === lastChar) {
            let currentText = screen.textContent.slice(0, -1);
            let newValue = currentText.concat(lk);
            screen.textContent = "";
            screen.append(newValue);
        } else {
            return false;
        }  
    //comma key
    } else if ((screen.textContent == "NaN" || screen.textContent == "Infinity") && (lk == "." || lk == ",")) {
        console.log(lk)
        return false;
    } else if ((lk == "," || lk == ".") && (!operatorArr.includes(ls) && ls != "." && ls != ",")) {
        let lastComma = screen.textContent.lastIndexOf(".");
        if ( (lastComma < screen.textContent.lastIndexOf("+") || 
        lastComma < screen.textContent.lastIndexOf("-") || 
        lastComma < screen.textContent.lastIndexOf("*") || 
        lastComma < screen.textContent.lastIndexOf("/") ) || 
        (!screen.textContent.includes("/") &&
        !screen.textContent.includes("*") &&
        !screen.textContent.includes("-") &&
        !screen.textContent.includes("+") &&
        !screen.textContent.includes(".") &&
        screen.textContent != "")) {
            screen.append(".")
        } else {
            return false;
        } 
    //enter key
    } else if (lk == "Enter") {
        // redo last calc/repeat press of equals 
        if( (screen.textContent != "") && (result != "" || result != undefined) && (lastCalc === 1) ) {
            let result = screen.textContent;
            screen.textContent = "";
            let repeatCalc = result.concat(lastOperation);
            screen.append(eval(repeatCalc));
        // do this when no previous calculations are in memory
        } else {
            if((screen.textContent != "") && (ls != "+" && ls != "." && ls != "/" && ls != "*" && ls != "-")) {
                result = screen.textContent;
                screen.textContent = "";
                screen.append(eval(result));
                repeatLast();
            } else  {

                return false;
            }
        }
    // backspace key
    } else if(lk == "Backspace") {
        newValue = screen.textContent.slice(0, -1);
        screen.textContent = newValue;
    } else if(lk == "Escape") {
        screen.textContent = "0";
        return lastCalc = 0;
    } 
})
