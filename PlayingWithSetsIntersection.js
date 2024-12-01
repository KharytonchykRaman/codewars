function inter(set1, set2) {
    let intersection = new Set();

    for (let elem of set1) {
        if (set2.has(elem)) {
            intersection.add(elem);
        }
    }

    return intersection;
}