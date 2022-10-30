// Write a program that counts from 1 to 50 in fizzbuzz fashion.

// To do so, loop from 1 to 50 (inclusive). Each time through, if the number is evenly divisible by 3, say ‘fizz’. If the number is evenly divisible by 5, say ‘buzz’. If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. Otherwise, say the number.

for (x = 1; x < 51; x++) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("fizzbuzz");
  } else if (x % 5 === 0) {
    console.log("buzz");
  } else if (x % 3 === 0) {
    console.log("fiz");
  } else {
    console.log(x);
  }
}
