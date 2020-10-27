console.log("Let's play!");
const hintButton = document.querySelector('#show-hint');

hintButton.addEventListener('click', (event) => {
  const hint = document.querySelector('.hint');
  hint.classList.toggle('active');
});

// 1. Select all the tiles
const tiles = document.querySelectorAll('td');
// 2. Iterate over the tiles
tiles.forEach((tile) => {
  // 3. Add event listener to each tile
  tile.addEventListener('click',(event) => {
    // 4. Check if the empty tile is next to it
    if (canMove(event.currentTarget)){
      // console.log("I can move, yay");
      moveTile(event.currentTarget);
      checkPlayerWon();
    // 5. If yes, swap the tile with the empty tile
    };
  });
});

const canMove = (tile) => {
  const tileRow = tile.parentNode.rowIndex;
  const tileCol = tile.cellIndex;
  // console.log(tileRow);
  // console.log(tileCol);
  const emptyTile = document.querySelector('.empty');
  // console.log(emptyTile);
  const emptyRow = emptyTile.parentNode.rowIndex;
  const emptyCol = emptyTile.cellIndex;
  // console.log(emptyRow);
  // console.log(emptyCol);
  return ((emptyRow === tileRow + 1) && (emptyCol === tileCol)) ||
  ((emptyRow === tileRow - 1) && (emptyCol === tileCol)) ||
  ((emptyRow === tileRow) && (emptyCol === tileCol + 1)) ||
  ((emptyRow === tileRow) && (emptyCol === tileCol - 1));
};

const moveTile = (tile) => {
  // 1. Select the empty tile
  const emptyTile = document.querySelector('.empty');
  // 2. Fill it with the inner text of the moving tile
  emptyTile.innerText = tile.innerText;
  // 3. Remove the empty class from the ex-empty tile
  emptyTile.classList.remove('empty');
  // 4. Remove the inner text of the tile
  tile.innerText = '';
  // 5. Add empty class to the ex-tile
  tile.classList.add('empty');
};


const checkPlayerWon = () => {
  const tilesArray = Array.from(tiles);
  const values = tilesArray.map((tile) => {
    return Number.parseInt(tile.innerText);
  })
  console.log(values);
  const winningCombo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN];
  console.log(winningCombo);

   if (values.toString() === winningCombo.toString()) {
    alert("OMG! You won! You are AWESOME!");
  }
}
// 6. Check if the player won

// 7. Display: "Congrats, you won!"
