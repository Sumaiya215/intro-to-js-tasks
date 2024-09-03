var a = isNaN(‘11’);
console.log(a);
//ans: SyntaxError: Invalid or unexpected token
// Right syntax of the above code is isNaN("11").

var b = isNaN(2-10);
console.log(b);
//ans:false
// Output is false because (2-10) is not NaN
