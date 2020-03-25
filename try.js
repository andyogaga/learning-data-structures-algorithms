const getPower = (num, power) => {
  if (power === 1) return num;
  return num * getPower(num, power -1)
}

console.log(getPower(2, 4))