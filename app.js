//true = O, false =X
let currentPlayer = true;
$(".current").html("O");

//new game
$(".start").click(function () {
  currentPlayer = true;
  $(".current").html("O");
  $(".block").removeClass("yellow red");
  $(".block").html("");
  $(".block").addClass("default");
  $(".block").css("pointer-events", "");
});

//click on purple blocks
$(".default").click(function (e) {
  $(this).removeClass("default");
  $(this).html(currentPlayer ? "O" : "X");
  $(this).addClass(currentPlayer ? "yellow" : "red");
  $(this).css("pointer-events", "none");
  //$(this).attr("disabled", true);
  togglePlayer();
});

function togglePlayer() {
  currentPlayer = !currentPlayer;
  $(".current").html(currentPlayer ? "O" : "X");
}
