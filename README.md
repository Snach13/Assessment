# Shuffle the array

## Time and Space Complexity

### _The given solution uses the Fisher-Yates shuffle algorithm to shuffle the elements of the input array. Let's analyze its time and space complexity:_

<br>

- The time complexity of this solution is O(n), where n is the length of the input array. This is because we iterate through the original array using a loop, and for each iteration, we perform constant-time operations such as generating a random index and swapping elements. Since the loop runs for n iterations, the time complexity is linear with respect to the size of the input array.

- The space complexity of this solution is O(n), where n is the length of the input array. This is because we create a new array, shuffledArr, to store the shuffled elements. The size of this array is the same as the input array.

- It's important to note that the time complexity of the Fisher-Yates shuffle algorithm is O(n) in the average and worst case. This is because, on each iteration, we randomly select an index from the remaining unshuffled elements and swap it with the current element. This guarantees a uniform random distribution of the shuffled elements.

- Overall, the time complexity of the given solution is O(n), and the space complexity is O(n).

## List of all possible test cases

- Empty array: The function should return an empty array.
- Array with one element: The function should return the same array.
- Array with two elements: The function should return an array with the elements in the opposite order.
- Array with three elements: The function should return an array with the elements in a random order.
- Array with four elements: The function should return an array with the elements in a random order.
- Array with five elements: The function should return an array with the elements in a random order.

### _It's important to note that since the shuffling is random, there can be multiple valid outputs for each test case. The provided outputs are just examples, and any valid shuffling that satisfies the condition a1 <= a2 >= a3 <= a4 >= ... would be considered correct._
