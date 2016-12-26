var array = [3,44,25,16,1,8,19,20,7,11,2]

function bubbleSort(arr){
  for (let i=arr.length-1; i>=0; i--){
    for (let j=arr.length-i; j>0; j--){
      if (arr[j]<arr[j-1]){
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp
      }
    }
  }
  return arr
}

// console.log(bubbleSort(array));

// Selection Sort
// Checks for the lowest number, takes in an array
// Sets a kings as a lowest, checks the others for the lowest
// If lowest, sets the new lowest, then swaps with the beginning
// then pushes the 1st num into a sorted array
// then checks the remainder of the shortened array

// Merge Sort
