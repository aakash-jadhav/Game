import checkWinner, { checkDraw } from "./logic.js";

//true = O, false =X
let currentPlayer = true;
$(".current").html("O");

//new game
$(".start").click(function () {
  currentPlayer = true;
  $(".block").removeClass("yellow red");
  $(".block").html("");
  $(".block").addClass("default");
  $(".block").css("pointer-events", "");
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
  console.log("winner is ", winner);
  $(".default").css("pointer-events", "none");
}
