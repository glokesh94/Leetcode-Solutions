/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let number1 = 0
    let number2 = nums.length - 1;
    while (number1 < number2) {
        const middleNumber = (number1 + number2) >> 1;
        if (nums[middleNumber] >= target) {
            number2 = middleNumber;
        } else {
            number1 = middleNumber + 1;
        }
    }
    return nums[number1] === target ? number1 : -1;
};