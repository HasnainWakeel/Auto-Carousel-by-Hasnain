var elm = document.getElementById("imgTag")

var links = ["./imgs/02.jpg", "./imgs/04.jpg", "./imgs/03.PNG", "./imgs/05.jpg", "./imgs/06.jpg"]

var count = 0

function fun(value){

    if(count>4){
        count = 0
    }

    elm.setAttribute("src", links[count]);

    if(value === '-'){
        count--;
        return;
    }
    count++;
}

setInterval(fun, 2500)