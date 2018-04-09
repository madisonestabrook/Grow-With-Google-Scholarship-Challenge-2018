/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 29;
var shirtLength = 34; // size L (large)
var shirtSleeve = 10.13;// size L (large)
// Small  
if (
   (shirtWidth >= 18 && // And if the variable shirtWidth is no greater than 20
   shirtWidth < 20) && 
  (shirtLength >= 28 && // If the variable shirtLength is no greater than 29
  shirtLength < 29) && 
  (shirtSleeve >= 8.13 && // And if the variable shirtSleeve is no greater than 8.38
  shirtSleeve < 8.38)
) {
  console.log("S"); // Prints "S"
} // Medium 
 else if ( // Else if 
  (shirtWidth >= 20 && // And if shirtWidth is greater than 18 (size s)
  shirtWidth < 22) &&  // And if shirtWidth is at most 22
  (shirtLength >= 29 && // And if shirtLength is greater than 28 (size s)
  shirtLength < 30) && // And if shirtLength is at most 30
  (shirtSleeve >= 8.38 && // And if shirtSleeve is greater than 8.13 (size s)
  shirtSleeve  < 8.63) // If shirtLength is no greater than 8.63
) {
  console.log("M"); // Prints "M"
} // Large 
 else if ( // Else if
  (shirtWidth >= 22 &&  // And if shirtWidth is at most 24
  shirtWidth < 24) && // And if shirtWidth is greater than 20 (size m)
  (shirtLength >= 30 && // And if shirtLength is at most 31
  shirtLength < 31) && // And if shirtLength is greater than 29 (size m)
  (shirtSleeve >= 8.63 && //  shirtSleeve is less than or equal to 8.88
  shirtSleeve < 8.88)
) {
  console.log("L"); // Prints "L"
} // Extra Large 
 else if (
  (shirtWidth >= 24 && // And if shirtWidth is at most 26
  shirtWidth < 26) && // If shirtWidth is greater than 22 (size l)
  (shirtLength >= 31 && // And if shirtLength is at most 33
  shirtLength < 33) && // And if shirtLength is greater than 31 (size l)
  (shirtSleeve >= 8.88 && // And if shirtSleeve is at most 9.63 
  shirtSleeve < 9.63) // And if shirtSleeve is greater than 8.63 (size l)
) {
  console.log("XL"); // Prints "XL"
} // 2XL 
else if (
  (shirtWidth >= 26 && // If shirtWidth is at most 28
  shirtWidth < 28) && // And if shirtWidith is greater than 26 (size xl)
  (shirtLength < 34 && // And if shirtLength is greater than 33 (size xl)
  shirtLength >= 33) && // And if shirtLength is at most 34 
  (shirtSleeve >= 9.63 && //f shirtSleeve is greater than 9.83 (size xl)
  shirtSleeve < 10.13)  //And if shirtSleeve is at most 10.13 
) {
  console.log("2XL"); // Prints "2xl"
} // 3XL 
 else if (
  shirtWidth >= 28 && // If shirtWidth is greater than or equal 28
  shirtLength >= 34 &&  // And if shirtLength is greater than or equal 34
  shirtSleeve >= 10.13 // And if shirtSleeve is greater than or equal 10.13
) {
  console.log("3XL"); // Prints "3xl" 
} // Else 
 else {
  console.log("N/A"); // Prints "N/A"
}
