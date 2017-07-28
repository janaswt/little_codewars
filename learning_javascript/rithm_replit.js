// #1
function appendToString(str, chars)
{
  var newStr =str+chars
  return newStr
}

appendToString("Hello", " World!")

// #2
function prependToString(str, chars)
{
 let newStr 
 newStr=chars+str
 return newStr 
}
prependToString('awesome','very')
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
