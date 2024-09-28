export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (!flowerbed.length) {
    return false;
  }
  if (flowerbed.length === 1) {
    if (flowerbed[0] === 0 && n <= 1) {
      return true;
    }
    if (flowerbed[0] === 1) {
      switch (n) {
        case 0:
          return true;
        case 1:
          return false;
        default:
          return false;
      }
    }
  }

  const flowerbedCopy = [...flowerbed];
  let availablePlaces = 0;

  for (let i = 0; i < flowerbedCopy.length; i++) {
    if (i === 0 && flowerbedCopy[i] === 0) {
      if (flowerbedCopy[1] === 0) {
        flowerbedCopy[i] = -1;
        availablePlaces++;
      }
    } else if (i === flowerbedCopy.length - 1 && flowerbedCopy[i] === 0) {
      if (flowerbedCopy[flowerbedCopy.length - 2] === 0) {
        flowerbedCopy[i] = -1;
        availablePlaces++;
      }
    } else {
      switch (flowerbedCopy[i]) {
        case 1:
          continue;
        case -1:
          continue;
        case 0: {
          if (flowerbedCopy[i - 1] === 0 && flowerbedCopy[i + 1] === 0) {
            flowerbedCopy[i] = -1;
            availablePlaces++;
          }
        }
      }
    }
  }

  console.log(availablePlaces);
  console.log(flowerbedCopy);

  return n <= availablePlaces;
}
