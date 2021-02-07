//wining logic

let combinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

export default function checkWinner(currentPlayer) {
  let className = currentPlayer ? "yellow" : "red";
  return combinations.some((combination) => {
    return combination.every((index) => {
      return $(`#${index}`).hasClass(className);
    });
  });
}

export function checkDraw() {
  if ($(".block").hasClass("default")) return;
  $(".alert").html("<strong>The game is draw</strong>");
}
