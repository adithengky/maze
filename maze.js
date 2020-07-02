function getMaze(s) {
  let check = ((parseInt(s) + 1) / 4);
  let size = (check % 2 !== 0) ? parseInt(s) + 1 : parseInt(s);
  let arrA = [1];
  let arrB = [0];
  let content = '';
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if (x % 2 === 0) {
        arrA = removeIndex(arrA, size, x);
        content += arrA.indexOf(y) !== -1 ? ' ' : '@';
      } else {
        arrB = removeIndex(arrB, size, x);
        content += arrB.indexOf(y) !== -1 ? '@' : ' ';   
      }
    }
    content += '\n';
    if (x % 2 === 0 && x < Math.floor(size / 2)) {
      let numA1 = x + 1 + 2;
      let numA2 = size - x - 2;
      let numB1 = x + 2;
      let numB2 = size - x -1;
      if (arrA.indexOf(numA1) === -1) {
          arrA.push(numA1);
      }

      if (arrA.indexOf(numA2) === -1) {
          arrA.push(numA2);
      }

      if (arrB.indexOf(numB1) === -1) {
          arrB.push(numB1);
      }

      if (arrB.indexOf(numB2) === -1) {
          arrB.push(numB2);
      }
    } 
  }
  return content;
}

function removeIndex(arr, size, num) {
  if (num > Math.floor(size / 2)) {
    const idx = arr.indexOf(size - num);
    if (idx > -1) {
      arr.splice(idx, 1);
    }
    if (size - num  !== Math.floor(size / 2)) {
      const idx2 = arr.indexOf(num-1);
      if (idx2 > -1) {
        arr.splice(idx2, 1);
      }
    }
  }
  return arr;
}

const input = process.stdin;
console.log("Please input number of maze size:");

input.on('data', function (data) {
    console.log('maze with size', parseInt(data));
    let maze = getMaze(data);
    console.log(maze);
});