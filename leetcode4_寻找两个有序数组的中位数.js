给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
=========>

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let left = (m+n+1)/2;
    let right = (m+n+2)/2;
    //step1 : concat array
    let array  = nums1.concat(nums2);
    //judge limit case
    if(array.length === 0){
        return null;
    }else{
        //step2 : sort array from small to big
        let sort_array = array.sort((a,b) => a-b);
        let length =sort_array.length;
        console.log(length)
        //step3 : get middle number in array
        let median =0;
        if(length %2 ===0 ){
            //偶数
            let left = length/2 -1;
            let right = length/2 ;
            median = (sort_array[left] + sort_array[right])/2
        }else{
            //奇数
            let middle_length =(sort_array.length+1)/2
            median = sort_array[middle_length-1];
        }
        return median;
    }
};
