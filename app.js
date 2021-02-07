import checkWinner, { checkDraw } from "./logic.js";

//true = O, false =X
let currentPlayer = true;
$(".current").html("O");

//new game
$(".start").click(function () {
  currentPlayer = true;
  $(".block").removeClass("yellow red"); //eeset colors
  $(".block").html(""); //reset values in blocks
  $(".block").addClass("default"); //add purple color
  $(".block").css("pointer-events", ""); //enable click
  $(".alert").removeClass("alert-danger alert-success");
  $(".alert").addClass("alert-warning");
  $("strong").html("Current player: <span class = current></span>");
  $(".current").html("O");
});

//click on purple blocks
$(".default").click(function () {
  $(this).removeClass("default");
  $(this).html(currentPlayer ? "O" : "X");
  $(this).addClass(currentPlayer ? "yellow" : "red");
  $(this).css("pointer-events", "none");

  if (checkWinner(currentPlayer)) {
    updateStatus(currentPlayer);
    return;
  }

  checkDraw();
  togglePlayer();
});

function togglePlayer() {
  currentPlayer = !currentPlayer;
  $(".current").html(currentPlayer ? "O" : "X");
}

//update status after victory
function updateStatus() {
  let winner = currentPlayer ? "O" : "X";
  $("strong").html("The winner is " + winner);
  $(".default").css("pointer-events", "none"); //disable click
  $(".alert").removeClass("alert-warning");
  $(".alert").addClass(currentPlayer ? "alert-success" : "alert-danger");
}
