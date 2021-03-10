exports.min = function min(array) {
    let min = array && array.length ? array[0] : 0;
    if (array) {
        for (let index = 1; index < array.length; index++) {
            if (min > array[index]) {
                min = array[index];
            }
        }
    }
    return min;
};

exports.max = function max(array) {
    let max = array && array.length ? array[0] : 0;
    if (array) {
        for (let index = 1; index < array.length; index++) {
            if (max < array[index]) {
                max = array[index];
            }
        }
    }
    return max;
};

exports.avg = function avg(array) {
    let avg = 0;
    if (array && array.length) {
        let sum = 0;
        for (let index = 0; index < array.length; index++) {
            sum += array[index];
        }
        avg = sum / array.length;
    }
    return avg;
};
