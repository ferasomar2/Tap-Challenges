function majorityElement(nums) {
  let count = 0;
  let majority = null;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
    }

    if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }

  return majority;
}

console.log(majorityElement([1,2,3,4,2,2,3,3,3]));
