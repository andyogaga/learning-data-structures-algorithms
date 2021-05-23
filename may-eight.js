const findIndex = (a = [], b = [], c = []) => {
  if (a.length !== b.length) return 0;
  let finalIndex = 0;
  let sameIndex = [];
  let max = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i].includes(c)) {
      sameIndex.push(i);
    }
  }
  if (sameIndex.length === 1) return a[i];
  if (sameIndex.length === 0) return "no match";
  if (sameIndex.length > 1) {
    for (let j = 0; j < sameIndex.length; j++) {
      const remaining = b[sameIndex[j]].split(c);
      if (Number(`${c}${remaining}`) > max) {
        max = Number(`${c}${remaining}`);
        finalIndex = sameIndex[j];
      }
    }
    return a[finalIndex];
  }
};

console.log(
  findIndex(
    ["Ames", "Sandy", "Squidward", "SpongeBob"],
    ["123456789", "789123456", "343456787", "115678456"],
    "5678"
  )
);
