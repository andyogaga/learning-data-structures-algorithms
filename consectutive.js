// const findConsecutive = (str) => {
//   let amount = 1;
//   let newString = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       amount++;
//     } else {
//       newString += str[i];
//       newString += amount;
//       amount = 1;
//     }
//   }
//   return newString;
// };

// console.log(findConsecutive("aaaabcccclasjflasjflsdjfsl"));

const isPalin = (stri) => stri === stri.split("").reverse().join("");

const longestPalindrome = (str) => {
  let allPossible = [];
  for (let i = 0; i < str.length; i++) {
    const possible = str
      .split(str[i])
      .filter((splitted) => Boolean(splitted))
      .map((my) => `${str[i]}${my}${str[i]}`);
    allPossible = allPossible.concat(possible);
  }
  const newPalins = allPossible.filter((str) => Boolean(str && isPalin(str)));
  let maxIndex = 0;
  let presentMax = 0;
  for (let i = 0; i < newPalins.length; i++) {
    if (newPalins[i].length > presentMax) {
      maxIndex = i;
      presentMax = newPalins[i].length;
    }
  }
  return newPalins[maxIndex];
};
console.log(longestPalindrome("ababa"));

const getSimilar = (str) => {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = true;
  }
  return Object.keys(obj).join("");
};

const getSubstring = (arr) => {
  const newK = getSimilar(arr[1]);
  let isSubstring = true;
  for (let i = 0; i < arr[0].length; i + newK.length) {
    const substringN = arr[0].slice(i, i + newK.length);

    while (isSubstring) {
      for (let j = 0; j < newK.length; j++) {
        isSubstring = substringN.includes(newK[j]);
      }
    }
  }
};
