const partition = (arr, left = 0, right = arr.length - 1) => {
    let pivot = arr[Math.floor((left + right) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
    if (i <= j) {
        arr[i], arr[j] = arr[j], arr[i];
        i++;
        j--;
    }
}
// console.log(arr);
// console.log(pivot);
    return i;
}

// console.log(partition([24, 2, 14, 29, 35, 7, 17]));

const quicksort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        pivotIndex = partition(arr, left, right);
        quicksort(arr, left, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quicksort([24, 2, 14, 29, 35, 7, 17]));