console.log("This is console file")


let buttons = document.querySelectorAll('.buttons .btn');
console.log(buttons)
let screen = document.getElementById('Scr');
console.log(screen)

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let val = e.target.value;
        console.log(val)



        if (val === "C") {
            screen.innerHTML = '';
        }
        else if (val === "=") {
            let result = eval(screen.innerHTML);
            try {
                if (result === Infinity || result === -Infinity || isNaN(result)) {
                    screen.innerHTML = 'Error';
                }
                else {
                    screen.innerHTML = result;
                }
            } catch (e) {
                screen.innerHTML = 'Error';
            }

        }

        else if (val === "del") {
            screen.innerHTML = screen.innerHTML.slice(0, -1);
        }
        else if (val === "%") {
            screen.innerHTML = screen.innerHTML / 100;
        }
        else if (val === "+/-") {
            screen.innerHTML = -screen.innerHTML;
        }

        else {
            screen.innerHTML = screen.innerHTML + val;


        }

    })
});



