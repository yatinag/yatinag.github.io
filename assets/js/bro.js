function magic() {
    if (localStorage.count){    
        if (localStorage.count == 24) {
            noblast();
        }
        randomNumber = Math.floor(Math.random() * 4)+1;
        if (randomNumber == 1) {
            document.body.style.backgroundColor = "#b66770";   
        } else if (randomNumber == 2) {
            document.body.style.backgroundColor = "#6770b6";
        } else if (randomNumber == 3) {
            document.body.style.backgroundColor = "#67b6ad";
        } else{
            document.body.style.backgroundColor = "#70b667";
        }
        localStorage.count = Number(localStorage.count) + 1;
        document.querySelector("#numbercounter").innerHTML = localStorage.count;
        if (localStorage.count == 23) {
            blast();
        }
    } else {
        localStorage.count = 0;                                           document.querySelector("#numbercounter").innerHTML = localStorage.count;
    }
}

function smaller() {
    document.querySelector("#bro").style.height = "85%";
    randomNumber2 = Math.floor(Math.random() * 3)+2;
    document.querySelector("#bro").setAttribute("src", "assets/img/"+String(randomNumber2)+".png");
}

function larger() {
    document.querySelector("#bro").style.height = "90%";
    document.querySelector("#bro").setAttribute("src", "assets/img/1.png");
}

function blast() {
    document.querySelector(".boom").style.display = "block";
}

function noblast() {
    document.querySelector(".boom").style.display = "none";
}
if (typeof(Storage) !== "undefined") {
    document.querySelector("#numbercounter").innerHTML = localStorage.count;
    console.log(10);
}