const transpose = function(matrix) {
  const newMatr = [];
  for (let x = 0; x < matrix[0].length; x++) {
    newMatr.push([]);
    for (let y = 0; y < matrix.length; y++) {
      newMatr[x].push(matrix[y][x]);
      
    }
  }
  return newMatr;
};
  
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    let reversedL = l.split("").reverse().join("");
    if (l.includes(word) || reversedL.includes(word)) return true;
  }
  const verticalJoin = transpose(letters).map(lv => lv.join(''));
  for (let v of verticalJoin) {
    let reversedV = v.split("").reverse().join("");
    if (v.includes(word)  || reversedV.includes(word)) return true;
  }
  
  return false;
};
  
  
  
const diagonals = (letters) => {
  let length = letters.length;
  let diagonalLines = (length + length) - 1;
  let midPoint = (diagonalLines / 2) + 1;
  let items = [];
  let itemsInDiagonal = 0;
  
  for (let i = 1; i <= diagonalLines; i++) {
    let rowIndex;
    let columnIndex;
    let itemSubarray = [];
        
  
    if (i <= midPoint) {
      itemsInDiagonal++;
      for (let j = 0; j < itemsInDiagonal; j++) {
        rowIndex = (i - j) - 1;
        columnIndex = j;
        itemSubarray.push(letters[rowIndex][columnIndex]);
      }
    } else {
      itemsInDiagonal--;
      for (let j = 0; j < itemsInDiagonal; j++) {
        rowIndex = (length - 1) - j;
        columnIndex = (i - length) + j;
        itemSubarray.push(letters[rowIndex][columnIndex]);
      }
    }
    items.push(itemSubarray);
  }
  console.log(items);
};
 
module.exports = wordSearch;

//peer programmed with Gulam Murtaza
  
  