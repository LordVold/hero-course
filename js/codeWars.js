// ~~~ #1 ~~~ 6 kyu ~~~ I need more speed! ~~~
function reverse(arr) {
  let revArr = [];
  let j = 0;
  for (let i = 1; i <= arr.length; i++) {
    revArr[j] = arr[arr.length - i];
    j++
  }
return revArr //  = arr.reverse();
}
/* function reverse(arr) {
  for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
    let elem = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = elem;
  }
  return arr;
} */
// console.log("[]", reverse([1, 2, 3, 4, 5]));
// console.log("[]", reverse(['hello', 'world', 'how', 'are', 'you', '?']));
// console.log("{}", reverse([{a: 5}, {b: 4}]));
// /|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|
// ~~~ #2 ~~~ 6 kyu ~~~ I need more speed! ~~~
