function findOutlier(integers) {
    const isEven = (num) => num % 2 === 0;
    let firstThree = integers.slice(0, 3);
    let majorityEven = (isEven(firstThree[0]) + isEven(firstThree[1]) + isEven(firstThree[2])) >= 2;

    for (let num of integers) {
        if (isEven(num) !== majorityEven) {
            return num;
        }
    }
}