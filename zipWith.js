function zipWith(fn, array1, array2) {
    const minLength = Math.min(array1.length, array2.length);
    const result = [];

    for (let i = 0; i < minLength; i++) {
        result.push(fn(array1[i], array2[i]));
    }

    return result;
}