function QuickSort(A) {
    let left = [];
    let right = [];
    let middle = [];
    if (A.length <= 1) {
        return A
    } else {
        let mid = parseInt((0 + A.length) / 2);
        for (let i = 0; i < A.length; i++) {
            if (A[i] < A[mid]) {
                left.push(A[i]);
            } else if (A[i] > A[mid]) {
                right.push(A[i]);
            } else {
                middle.push(A[i]);
            }
        }
        return QuickSort(left).concat(middle, QuickSort(right));
    }
}

function SelectSort(A) {
    for (let i = 0; i < A.length; i++) {
        let min = i;
        for (let j = i + 1; j < A.length; j++) {
            if (A[min] > A[j]) {
                min = j;
            }
        }
        [A[i], A[min]] = [A[min], A[i]];
    }
    return A;
}

function InsertSort(A) {
    for (let i = 1; i < A.length; i++) {
        let flag = A[i];
        let j = i - 1;
        for (; j >= 0 && A[j] > flag; j--) {
            A[j + 1] = A[j];
        }
        A[j + 1] = flag;
    }
    return A;
}

let A = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let result = InsertSort(A);
console.log(result);
