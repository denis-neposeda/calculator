let display = document.querySelector(".display");   

let buttons = Array.from(document.querySelectorAll(".btn"))




buttons.map((btn) => {
    btn.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "C":
                display.innerText = "0";
                break;
            case "=":   
                display.innerText = eval(display.innerText);
                break;
            case "-":  
                if (display.innerText[display.innerText.length - 1] === "-") {
                    display.innerText = display.innerText.pop()
                }
            case "+":
                if (display.innerText[display.innerText.length - 1] === "+") {
                    display.innerText = display.innerText.pop()
                }
            case "/":
                if (display.innerText[display.innerText.length - 1] === "/") {
                    display.innerText = display.innerText.pop()
                }
            case "*":
                if (display.innerText[display.innerText.length - 1] === "*") {
                    display.innerText = display.innerText.pop()
                }

            default:
                if (display.innerText === "0" && e.target.innerText !== ".") {
                    display.innerText = e.target.innerText;
                    
                }   else {
                    display.innerText += e.target.innerText;
                }
        }
    });
});
