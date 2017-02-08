function powersOfTwo(n){
  var array = [];
  for(var i = 0; i <= n; i++) {
  
  array.push(Math.pow(2,i));
  }
  
  return array;
}