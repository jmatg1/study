const nums = [2,7,11,15];
const target = 9;
const map = {};
for(let i = 0; i < nums.length; i++) {
    debugger;
    const number = nums[i];
    const number2 = target - number;
    map[number2] = i;
    if (map[number]) {
        return [map[number], i]
    }
    console.log(number, number2)
}
console.log(map)
