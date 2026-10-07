class Solution {
    /**
     * @param {number[]}
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {

        let round = 1;

        let d: number[] = [];

        while(round < 3){

            for(let i = 0; i < nums.length; i++){
                d.push(nums[i]);
            }
            round++;
        }

        return d;

    }
}