// var a = [ 3, 8, 20, 14, 12, 13, 17, 7, 6, 16, 2, 15, 4, 19, 9, 10, 5, 1, 11 ];
// var a2 = [ 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28,29,30];

// var a3 = [ 2,4,6,8,10,14,16,18 ];

var missing = function ( array ) {
  startTime = Date.now();
  sorted = array.sort(function(a,b){return a-b});
  for (i=1; i <= sorted.length; i++){
    if (sorted[i] > sorted[i-1] + 1){
      endTime = Date.now();
      console.log(endTime - startTime);
      return sorted[i-1] + 1          
    }
  } 
}

var missing2 = function ( array ) {
  var startTime = Date.now();
  sorted = array.sort(function(a,b){return a-b});
  estimatedTotal = estimateTotal( sorted[0], sorted.length);
  realTotal = getRealTotal( sorted );
  missing = getDifference( estimatedTotal, realTotal );
  var endTime = Date.now();
  console.log(endTime - startTime)
  return missing;
}

var estimateTotal = function ( startValue, length ) {
  total = 0;
  for (i = 0; i <= length; i ++){
    total = total + (startValue + i);
  }
  return total;
}

var getRealTotal = function ( array ) {
  total = 0;
  for (i=0; i < array.length; i++){
    total = total + array[i];
  }
  return total;
}

var getDifference = function ( estimatedTotal, realTotal  ) {
  result = estimatedTotal - realTotal;
  return result;
}

var missing3 = function ( array, offset ) {
  startTime = Date.now();
  sorted = array.sort(function(a,b){return a-b});
  for (i=1; i <= sorted.length; i++){
    if (sorted[i] > sorted[i-1] + offset){
      endTime = Date.now();
      console.log(endTime - startTime);
      return sorted[i-1] + offset        
    }
  } 
}


// console.log(missing3(a3,2));
