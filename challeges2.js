function arrayManipulation(arr, target) {
    let startIndex = 0;
    let currentSum = 0;

    for (let endIndex = 0; endIndex < arr.length; endIndex++) {
        currentSum += arr[endIndex];

        while (currentSum > target && startIndex <= endIndex) {
            currentSum -= arr[startIndex];
            startIndex++;
        }

        if (currentSum === target) {
            return true;
        }
    }
    return false;
}

const arr = [5, 2, 3, 4, 8, 7];
const target = 14;
console.log(arrayManipulation(arr, target));

