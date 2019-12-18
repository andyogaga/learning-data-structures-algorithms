// My attempt
const checkAnagram = (str1, str2) => {
  let strMap1 = getMap(str1);
  let strMap2 = getMap(str2);
  let test = true;
  if(Object.keys(strMap1).length !== Object.keys(strMap2).length){
    test = false;
    return test;
  }
  Object.keys(strMap1).map(key => {
    if(strMap1[key] !== strMap2[key]){
      test = false;
    }
  });
  return test;
}

const getMap = str => {
  let obj = {};
  let cleanString = str.replace(/[^A-Z]/ig, '').toLowerCase();
  cleanString.split('').map(char => {
    obj[char] = obj[char] + 1 || 1
  });
  return obj;
}

let isAnagram = checkAnagram('tEs  $t', 'stet');
console.log(isAnagram);

// Their 1st Answer
