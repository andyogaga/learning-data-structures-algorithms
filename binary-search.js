const binarySearch = (arr = [], val) => {
  let startIndex = 0;
  let endIndex = arr.length;
  let middleIndex =
    (endIndex - startIndex) % 2 === 0
      ? (endIndex - startIndex) / 2
      : (endIndex - startIndex + 1) / 2;

  while (arr[middleIndex] !== val) {
    if (arr[middleIndex] > val) {
      endIndex = arr[middleIndex];
    }
    if (arr[middleIndex] < val) {
      startIndex = arr[middleIndex];
    }
  }
};
