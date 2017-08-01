// #1 
function appendToString(str, chars){
  var newStr =str+chars
  return newStr
}

appendToString("Hello", " World!")

// #2
function prependToString(str, chars){
 let newStr 
 newStr=chars+str
 return newStr 
}
prependToString('awesome','very')

// #3
function charAt(str, number)
{
if (number <= str.length) return str[number]
else return ""
}
charAt('awesome',2)

// #4 Write a function called stringIncludes, which accepts a string and a character. 
//The function should return true if the string includes that character, otherwise it should return false.
function stringIncludes(string, char){
  if( string.indexOf(char) !== -1)
  return true
  else return false
  }
stringIncludes('awesome', 'z')

function stringIncludes1(str, char){
  for(var i = 0; i < str.length; i++){
    if(str[i] === char) return true;
  }
  return false;
}

// #5 Write a function called stringIndexOf, which accepts a string and a character.
The function should return the first index at which the character exists or -1 if the character is not found.

function stringIndexOf(string, c)
{
  for (var i=0; i<string.length; i++)
  {
  if (string[i]=== c) return i
  }
  return -1
}
stringIndexOf('awesome','e')

// #6 Write a function called repeat, 
//which accepts a string and a number and returns a new string with the string repeated the number of times.
function repeat(str, n){
  ans = ""
  while(n>0){
    ans += str
    n-=1
  }
  return ans
}

// #23 Write a function called swapKeyAndValue,
//which accepts an object and a key. The function should return a new object with the key and value flipped. 
function swapKeyAndValue(obj, key){
  var newObj ={}
for (var k in obj){
  if(k === key){
    newObj[obj[key]]= key
  }
  else{
    newObj[k]=obj[k]
  }
}
return newObj
}
var instructor = {name: "Elie", job: "Instructor"}
swapKeyAndValue(instructor, 'name')

// following code swaps ALL key value pairs 
// http://nelsonwells.net/2011/10/swap-object-key-and-values-in-javascript/
var invert = function (obj) {

  var new_obj = {};

  for (var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      new_obj[obj[prop]] = prop;
    }
  }

  return new_obj;
};

// 30 "Problem Solving 1"
function squareEvenNumbers(arr)
{
  var sum=0
  for (var ind in arr)
  {
    if(arr[ind] %2 ===0)
    {
      sum += arr[ind]*arr[ind]
    }
  }
  return sum
}


squareEvenNumbers([1,2,3,4,5])
// 31
function multiples(a, b)
{
  var result=[]
  var sum =a
  while(b>0)
  {
    result.push(sum)
    sum += a
    b-=1
  }
  return result
}
multiples(3, 4)

// 32
function pluck(arr, property)
{
  var ans =[]
  for (var i =0; i<arr.length; i++)
  {
    ans.push(arr[i][property])
  }
  return ans
}
pluck([{name:"Tim"},{name:"Matt"},{name:"Elie"}], 'name')

// 33
function twoOldestAges(ages){
  var max =ages[0]
  var lastMax = 0;
  for( var aid in ages )
    if ( ages[aid] >= max )
    {
      if(lastMax < max) lastMax = max;
      max = ages[aid];
    }
    else if ( ages[aid] >= lastMax )
    {
      lastMax = ages[aid];
    }
  console.log( lastMax, max);
  return [lastMax, max];
}
twoOldestAges( [6,1,9,10,4] )

// 34
function minMaxKeyInObject(obj)
{
  var maxKey = 0
  var minKey =100
  for (var key in obj)
  {
    if(maxKey < Number(key)) maxKey = key
    if(minKey > Number(key)) minKey =key
  }
 return [Number(minKey), Number(maxKey)]
}
minMaxKeyInObject({2:'a', 7:'b', 1:'c',10:'d',4:'e'})


// 38
function generatePairs(n)
{
  var i =0; var j=0 var result=[]
  while(i <=n)
  {
    j=0
    while(j <=n && j+i <=n){ 
    result.push([i,j+i])
    j+=1
    }
    i+=1
  }
  return result
}
generatePairs(3)

// 41 Given an array of strings, write a function that counts the total number of upper case characters.
function totalCaps(arrOfStr){
  var count =0
  for(var i in arrOfStr){
    for(var j in arrOfStr[i]){
      if (arrOfStr[i][j]=== arrOfStr[i][j].toUpperCase())
      {
        count +=1 
      }
    }
  }
  return count
}
totalCaps(["Elie", "Matt", "Tim"]) // returns 3


function totalCaps(arr){
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      if(arr[i].charCodeAt(j) >= 65 && arr[i].charCodeAt(j) <= 90){
        count++
      }
    }
  }
  return count;
}
