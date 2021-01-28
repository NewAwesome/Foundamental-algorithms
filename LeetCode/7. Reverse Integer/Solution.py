class Solution:
    def reverse(self, x: int) -> int:
        if x < 0:
            return -1 * self.reverseUtil(-x)
        return self.reverseUtil(x)

    def reverseUtil(self, x: int) -> int:
        result = 0
        while x != 0:
            digit = x % 10
            result = result * 10 + digit
            x = int(x / 10)
        return 0 if result > 2 ** 31 - 1 or result < -2 ** 31 else result

    # Own.
    # Python trick: string '1234' , str[::-1] -> 4321 , to a integer 4321
    def reverse1(self, x: int) -> int:
        result = 0
        if x < 0:
            result = self.util(-x)
            result = -result
        else:
            result = self.util(x)
        return result

    def util1(self, x: int) -> int:
        temp_str = str(x)
        return temp_str[::-1]


print(Solution().reverse(7463847412))  # max example
print(Solution().reverse(8463847412))  # overflow -> 0
