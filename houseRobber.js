// A house robber has a map of houses and the amount of gold in each home. The robber knows that if two adjacent homes are robbed, then the neighborhood security system will sound. Determine the total amount of gold the robber can get without setting off the alarm.
//
// Input: 	 Array of Nonnegative Integers
// Output: 	Integer
// Example
// Input: [1, 2, 3]				 =>	Output: 4
// Input: [1, 2, 4, 1, 5, 12, 5]	=>	Output: 17
//
// Explanation:
// Knowing you can't rob from two adjacent houses
// The maximum gold you can steal in each case:
//
// Example 1
// 1 + 3 = 4
//
// Example 2
// 1 + 4 + 12 = 17
//
// Constraints
// Time Complexity: O(N)
// Auxiliary Space Complexity: Intermediate O(N), Advanced O(1)

//Thoughts about the solutions: Finding the intuition for this solution was very difficult for me. I actually still don't quite understand why it works. The tricky part of the process is setting up the result array with initial values and then updating it in the for loop.

function houseRobber(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const result = [];

  result[0] = nums[0];
  result[1] = Math.max(nums[1], nums[0]);
  for (let i = 2; i < nums.length; i++) {
    result[i] = Math.max(result[i - 2] + nums[i], result[i - 1]);
  }

  return result[nums.length - 1];
}

console.log(houseRobber([5, 2, 3, 4, 5]));
