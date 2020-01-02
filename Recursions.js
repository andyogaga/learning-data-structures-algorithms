// Power
const getPower = (num, power) => {
  if (power === 1) return num;
  return num * getPower(num, power -1);
}

// Factorial
const getFactorial = num => {
  if(num === 1) return 1;
  return num * getFactorial(num - 1);
}

// Product of array
const prodArray = (arr, i = 0) => {
  if(i === arr.length - 1) return arr[i];
  return arr[i] * prodArray(arr, i + 1);
}

// Palindrome
const isPalindrome = str => {
  
}