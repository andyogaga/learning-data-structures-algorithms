// My attempt
const capitalize = str => {
  let wordArray = str.toLowerCase().split(" ");
  let newArr = [];
  for (const word of wordArray) {
    let cleanWord = word.replace(/[^a-z0-9]/ig, '');
    newArr.push(`${cleanWord[0].toUpperCase()}${cleanWord.slice(1)}`);
  }
  return newArr.join(' ');
};

console.log(capitalize('the@m is a frie@nd 1*'));

// Another Approach
const capitalize2 = str => {
  // Create a string with first letter uppercase of given string
  // Loop through the remaining and only change Character to upper case if the character before it is a space
  let result = str[0].toUpperCase();
  for(let i=1; i<str.length; i++){
    str[i-1] == ' ' ? result += str[i].toUpperCase() : result += str[i]; 
  }
  return result
}

console.log(capitalize2('the@m is a frie@nd 1*'));