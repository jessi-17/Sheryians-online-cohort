// Find the Missing Number in a Sequence – Take a list of
// consecutive numbers (except one missing) and find the
// missing number. Example: 1, 2, 3, 5 → Missing number is 4.



function findMissingNum(arr){
    let n = arr.length + 1;
    let expected_sum = (n*(n+1))/2;
    let actual_sum = 0;
    for(let i=0;i<arr.length;i++){
        actual_sum += arr[i];
    }
    return expected_sum - actual_sum;
}

let arr = [1,2,3,5]
console.log(findMissingNum(arr));