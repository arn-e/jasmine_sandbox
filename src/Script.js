// Your JavaScript code here
function factorial ( n ){
  if (n === 1) { return n }
  if (n === 0) { return n }
  return n * factorial( n - 1);
}

console.log( factorial ( 5 ) );
console.log( factorial ( 11 ) );
console.log( factorial ( 0 ) );
