var gridSize = 16;

$(document).ready(function() { 
//Sets the initial 16x16 grid
  makeGrid(gridSize);
//button removes the previous and promts dimensions for new
  $("#newGrid").on("click", function() {
    $(".square").remove();
    gridSize = prompt("Please select the size of your new grid");
    makeGrid(gridSize);
    squareSize(gridSize);
//changes color of square with mouse hover
    $('.square').hover(function() {
    $(this).css("background-color", "black");
  });
});
//makes the grid and takes a number as an argument
  function makeGrid(gridSize) {
    for(var i = 0; i < gridSize; i++) {
        for(var j = 0; j < gridSize; j++) {
            var square = $("<div class='square'></div>");
            square.appendTo('#wrapper');
        };
    };
  };
//sets the size of each square according to a 480px grid
  function squareSize (gridSize) {
    var size = (480/gridSize);
    $(".square").height(size);
    $(".square").width(size);
  };

  squareSize(gridSize);

  makeGrid(gridSize);

  $('.square').hover(function() {
    $(this).css("background-color", "black");
  });

  $("#reset").click(function() {
    location.reload();
  });
});
