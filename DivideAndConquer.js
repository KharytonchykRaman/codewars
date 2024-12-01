function divCon(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += typeof arr[i] === 'string' ? -arr[i] : arr[i]
    }
    return sum
}