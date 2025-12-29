let nums: number[] = [2, 4, 7, 8, 11, 14];
const target:number = 18;

function findTargetIndices(nums: number[], target: number) {
    let results: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) {            
                results.push([i, j]);
            }
        }
    }
    return results;
}

console.log(findTargetIndices(nums, target)); 

nums = [2, 4, 7, 8, 9, 11, 14, 9];
function findTargetIndicesOptimized(nums: number[], target: number) {
    let results: number[][] = [];
    const seenNumbers = new Map();
    for (let i = 0; i < nums.length; i++) {
           const compliment = target - nums[i] ;
            if (seenNumbers.has(compliment)) {            
                results.push([seenNumbers.get(compliment), i]);
            }
        seenNumbers.set(nums[i], i);
    }
    return results;
}

console.log(findTargetIndicesOptimized(nums, target)); 