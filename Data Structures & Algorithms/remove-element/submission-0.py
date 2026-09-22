class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0
        for each in range(len(nums)):
            if nums[each] != val:
                
                nums[k] = nums[each]
                k+= 1
        return k


