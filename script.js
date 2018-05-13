//Select Winner
var num = 3;
var buttons = document.querySelectorAll("button");
var squares = document.querySelectorAll(".square");
var title = document.querySelector("#rbg-title");
var message = document.querySelector("#message");
var reset = document.querySelector("#new-color");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var colors;

var winner;

init();

function init(){
    colors = generate(num);
    winner = colors[Math.floor(Math.random() * (num - 1))];
    title.textContent = winner;
    setColors();
    message.textContent = "";
    reset.textContent = "New Colour";
    header.style.backgroundColor = "#7ae2d1";    
}


function generate(num){
    var list = [];
    for(var i = 0; i < num; i++){
        var rgb1 = Math.floor((Math.random() * 255));
        var rgb2 = Math.floor((Math.random() * 255));
        var rgb3 = Math.floor((Math.random() * 255));
        var value = "rgb(" + rgb1 + ", " + rgb2 + ", " + rgb3 + ")";
        list.push(value);


    }
    return list;
}

function setColors(){
    for(var i = 0; i < squares.length; i++){
        

        squares[i].style.backgroundColor = colors[i];
        squares[i].classList.remove("not-active");
        if((num == 3) && (i >= 3)){
            squares[i].classList.add("not-active");
        }
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;

            if(clickedColor == winner){

                correct(squares, winner);
                message.textContent = "Correct!";
                reset.textContent = "Play Again?";
                header.style.backgroundColor = winner;
            } else {

                this.style.backgroundColor = "#292929";
                message.textContent = "Try Again!";
            }
        });
    }
}

//Easy Mode
easy.addEventListener("click", function(){
    num = 3;
    easy.id = "clicked";
    hard.id = "unclicked";

})
//Hard mode
hard.addEventListener("click", function(){
    num = 6;
    easy.id = "unclicked";
    hard.id = "clicked";
})
//Play again
reset.addEventListener("click", function(){
    init()
})

function correct(squares, winner){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = winner;
    }
}

