class Solution:
    def isPalindrome(self, x: int) -> bool:
<<<<<<< HEAD
        # If x is negative, return false directly
        if x < 0:
            return False
=======
>>>>>>> ec3c0cf527a648c6e1e951bcb7b3485f2a2b8adc
        temp = str(x)
        for i in (0, int(len(temp) / 2)):
            if temp[i] != temp[len(temp) - 1 - i]:
                return False
        return True


print(Solution().isPalindrome(123))
