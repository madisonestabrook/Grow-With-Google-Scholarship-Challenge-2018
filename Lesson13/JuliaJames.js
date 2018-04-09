/*
 * Programming Quiz: JuliaJames (4-1)
 */
var x = 1;
var result; 
while (x < 21) {
    result = x % 3 === 0 ? (x % 5 === 0 ? "JuliaJames": "Julia") : (x % 5 === 0 ? "James" : x)
    console.log(result)
    x = x + 1; 
}
