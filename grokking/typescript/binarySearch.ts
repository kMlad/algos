function binarySearch(sortedNums: number[], target: number): number {
    let start: number = 0;
    let end: number = sortedNums.length - 1;
  
    while (start <= end) {
      let mid: number = Math.floor((start + end) / 2);
      if (sortedNums[mid] === target) {
        return mid; 
      } else if (sortedNums[mid] < target) {
        start = mid + 1; 
      } else {
        end = mid - 1;
      }
    }
  
    return -1;
  }