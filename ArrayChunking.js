let testArray = [5, 5, 6, 3, 7, 7, 3, 8, 12, 9,10,23,65];

const chunk = (arr, n) => {
  let bigArray = [];
  arr.map((num) => {
    const lastSubArray = bigArray[bigArray.length - 1];
 
    if(!lastSubArray || lastSubArray.length === n){
      let newArr = [num];
      bigArray.push(newArr);
    } else {
      lastSubArray.push(num);
    }
  });
  return bigArray;
}

const chunk = (arr, n) => {
  let bigArray = [];
  let index = 0
  while(index <= arr.length){
    let smallArray = arr.slice(index, index + n);
    bigArray.push(smallArray);
    index += n;
  }
  console.log(bigArray);
}

chunk(testArray, 2);