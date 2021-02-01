class Solution:
    def isPalindrome(self, x: int) -> bool:
        # If x is negative, return false directly
        if x < 0:
            return False
        temp = str(x)
        for i in (0, int(len(temp) / 2)):
            if temp[i] != temp[len(temp) - 1 - i]:
                return False
        return True


print(Solution().isPalindrome(123))
