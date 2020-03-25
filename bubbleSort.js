const swap = (arr, p1, p2) => {
  [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
  return arr;
}

const bubbleSort = (arr) => {
  for (let i=arr.length; i>0; i--){
    for (let j=0; j<i-1; j++){
      if(arr[i-1] < arr[j]) swap(arr, j, i-1);
    }
  }
  return arr;
}

console.log(bubbleSort([5,4,7,1,6,0,2,8,9,3,4,5,6]))