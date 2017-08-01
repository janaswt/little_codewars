// Collection of easy kata solved using HoFs.

function oddOrEven(array) {
 
  const sum = array.reduce(function(sum,current){
    return sum + current;
  }, 0);
  return sum % 2 === 0 ? 'even' : 'odd';
}

// Given a string of words, find the shortest word and return its length
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(h => h.length));
}
function findShort(s){
  const words = s.split(' ');
  return s.split(' ')
          .reduce((min, w) => (min < w.length ? min : w.length), words[0]);
}
function findShort(s){
  var arr = s.split(" ");
  arr = arr.map(function(e){return e.length});
  return arr.reduce(function(min, e){return Math.min(min, e)});
}

function findShort(s){
  return s
    .split(' ')
    .map(a => a.length)
    .reduce((a, b) => Math.min(a, b))
}
function findShort(s) {
  return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
}
// Determine whether the sum of the elements in an array is even or odd

function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

// sum of multiples of 3 and 5
function solution(number){
  if (number <= 0)
    return 0;
  let arr = [...Array(number).keys()];
  let sum = arr.reduce((a, b) => {
    if (b % 3 == 0 || b % 5 == 0)
      return a + b;
    else
      return a;
  });
  return sum;
}

function solution(number){
  return number > 0?
    Array.apply(null, new Array(number - 1))
      .reduce((a, e, i) => ( (i + 1) % 5 && (i + 1) % 3)? a: a+i+1, 0):
      0;
}

// find parity outlier
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}
