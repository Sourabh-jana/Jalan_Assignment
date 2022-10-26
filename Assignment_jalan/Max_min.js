/* To Rearrange the sorted array to form max/min order */

// Time Complexity [ O(2n) ~ O(n) ] to travers the array 2 times
// Space Complexity O(1) constant memory is used in this program
// Test Cases: (1) since normal number in javascript can't contain safly over (2^53-1) or less than -(2^53-1)
//                 one of the test case will is -(2^53-1) < arr[i] < (2^53-1)
//             (2) This algorithum is only applicable on sorted non-negative integers

function rearrangeArr(arr) {
    let n = arr.length;
    let min_id = 0;
    let max_id = n - 1;
    let max_Val = arr[n - 1] + 1;

    // To combine the original array with max/min
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            arr[i] = arr[i] + (arr[max_id] % max_Val) * max_Val;
            max_id--;
        }
        else {
            arr[i] = arr[i] + (arr[min_id] % max_Val) * max_Val;
            min_id++;
        }
    }

    // Modified by separating the max/min
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(arr[i] / max_Val);
    }
}

let arr = [0, 2, 3, 5, 6, 7];

rearrangeArr(arr)

// print Modified array
arr.forEach(i => {
    console.log(i)
});