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

let A = [2, 6, 1, 8, 4, 7, 5, 9, 10];
let result = QuickSort(A);
console.log(result);
