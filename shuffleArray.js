function shuffle(arr) {
  // Create a new array to store the shuffle elements
  const shuffledArray = [];

  // Loop through original array
  for (let i = 0; i < arr.length; i++) {
    // Generate a random index between 0 and i.
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the element at the current index with the element at the random index.
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];

    // Add the element at the current index to the shuffled array.
    shuffledArray.push(arr[i]);
  }

  // Return the shuffled array.
  return shuffledArray;
}

const arr = [2, 4, 3, 7, 11, 6, 9];
console.log(shuffle(arr));

// Time Complexity (O(n))
// The time complexity of this function is O(n), where n is the length of the array.
// This is because the function loops through the array once to generate the random indices, and then loops through the array again to swap the elements.

// Space Complexity (O(n))
// The space complexity of this function is O(n), where n is the length of the array.
// This is because the function creates a new array to store the shuffled elements.
