

// 506. Relative Ranks
// https://leetcode.com/problems/relative-ranks/
// Given an integer array score representing the scores of different athletes,
// and an integer k representing the number of athletes, return the relative ranks of the athletes in the form of a string array.
// The relative rank of the athlete with the highest score is "Gold Medal",
// the athlete with the second highest score is "Silver Medal", the athlete with the third highest score is "Bronze Medal",
// and the rest are represented by their relative rank (1-indexed).
// The relative rank of the athlete with the highest score is "Gold Medal",
// the athlete with the second highest score is "Silver Medal", the athlete with the third highest score is "Bronze Medal",
// and the rest are represented by their relative rank (1-indexed).

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    if(score.length === 0) return  [];
    
    const sorted = score.slice();
    quickSort(sorted,0,sorted.length-1);
    const result = new Array(score.length);
    for (let i = 0;i<score.length;i++){
        const rank = sorted.length -1-sorted.indexOf(score[i]);
        if(rank===0) result[i]="Gold Medal"
            else if(rank===1) result[i]="Silver Medal"
       else  if(rank===2) result[i]="Bronze Medal"
       else result[i] = String(rank + 1);
    }
    return result;
        
    };
    
    function quickSort(arr, left, right) {
        if (left >= right) return;
        let i = left, j = right;
        const pivot = arr[Math.floor((left + right) / 2)];
    
        while (i <= j) {
            while (arr[i] < pivot) i++;
            while (arr[j] > pivot) j--;
            if (i <= j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++; j--;
            }
        }
    
        if (left < j)  quickSort(arr, left, j);
        if (i < right) quickSort(arr, i, right);
    }
    