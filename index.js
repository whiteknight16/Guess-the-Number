// Genertate random number 
let randomNumber = Math.floor((Math.random() * 10) + 1);
let guessedList = [];
let tries = 5;
// Game Sound Load
const errorSound = new Audio("./assests/error.mp3");
const correctSound = new Audio("./assests/correct.mp3");
const gameEnd = new Audio("./assests/end.mp3");

// Intializing Tries
$("#tries").text("Tries left:" + tries + " ");


$(".btn").click(function () {
    errorSound.pause()
    let guess = ($("input").val());
    if (guess != randomNumber) {
        errorSound.play();
        $("input").addClass("error");
        $("input").removeClass("error");
        
        tries--;
        guessedList.push(guess);
        $("#guessedNumber").text("Guessed Numbers: " + guessedList);
        $("#tries").text("Tries left:" + tries + " ");

    }
    if (tries === 0) {
        errorSound.pause()
        gameEnd.play();
        $(".foreground").css("display", "none");
        $("#loss h3").text(`The Number was:${randomNumber}`);
        $("#loss").css("display", "flex");
        
        $('.css-button-sliding-to-left--sand').click(function () {
            location.reload();
        });
    }
    if (guess == randomNumber) {
        correctSound.play();
        $(".foreground").css("display", "none");
        $("#win h3").text(`The Number was:${randomNumber}`)
        $("#win").css("display", "flex");
        $('.css-button-sliding-to-left--sand').click(function () {
            location.reload();
        });



    }


})

