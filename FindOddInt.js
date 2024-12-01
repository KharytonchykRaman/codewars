function findOdd(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        count = arr.filter(num => num === arr[i]).length;
        if (count % 2 === 1) {
            return arr[i]
        }
    }
  }