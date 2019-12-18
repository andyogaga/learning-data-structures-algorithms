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
const checkAnagram2 = (str1, str2) => {
  let strMap1 = getMap2(str1);
  let strMap2 = getMap2(str2);
  if(Object.keys(strMap1).length !== Object.keys(strMap2).length){
    return false;
  }
  // This is better because it does not finish the Object.keys loop before it returns as false if wrong
  for (const key in strMap1) {
      if(strMap1[key] !== strMap2[key]){
        return false
      }
  }
  return true;
}

const getMap2 = str => {
  let obj = {};
  let cleanString = str.replace(/[^A-Z]/ig, '').toLowerCase();
  cleanString.split('').map(char => {
    obj[char] = obj[char] + 1 || 1
  });
  return obj;
}

let isAnagram2 = checkAnagram2('tEs ts  $t', 'stS^Tet');
console.log(isAnagram2);