// Collection of easy kata solved using HoFs.

function oddOrEven(array) {
 
  const sum = array.reduce(function(sum,current){
    return sum + current;
  }, 0);
  return sum % 2 === 0 ? 'even' : 'odd';
}
