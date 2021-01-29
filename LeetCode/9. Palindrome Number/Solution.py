class Solution:
    def isPalindrome(self, x: int) -> bool:
        temp = str(x)
        for i in (0, int(len(temp) / 2)):
            if temp[i] != temp[len(temp) - 1 - i]:
                return False
        return True


print(Solution().isPalindrome(123))
