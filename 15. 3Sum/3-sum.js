/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = [];
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let threeNumber = nums[i] + nums[left] + nums[right]
            if (threeNumber > 0) {
                right--;
            } else if (threeNumber < 0) {
                left++;
            } else {
                result.push([nums[i], nums[left], nums[right]])
                left++;
                while (nums[left] == nums[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }
    return result;
};