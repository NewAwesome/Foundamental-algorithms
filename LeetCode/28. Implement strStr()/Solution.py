# find if 'needle' exists in haystack, return the begin index if exist, else return -1;
class Solution:
    # 简单的办法
    def strStr(self, haystack: str, needle: str) -> int:
        if not haystack or not needle:
            return 0 if not needle else -1
        # begin
        ptr_max = len(haystack) - len(needle)
        pace_max = len(needle) - 1
        ptr = pace = 0
        while ptr <= ptr_max:
            while haystack[ptr + pace] == needle[pace]:
                if pace == pace_max:
                    return ptr
                pace += 1
            ptr += 1
            pace = 0
        return -1

    # Discuss: elegant python
    def strStr1(self, haystack: str, needle: str) -> int:
        for i in range(len(haystack) - len(needle) + 1):
            if haystack[i:i + len(needle)] == needle:
                return i
        return -1

    # Reference to my GRE Notes to implement KMP
    def strStr2(self, haystack: str, needle: str) -> int:
        # TODO: KMP
        return 0

#
# print(Solution().strStr("hello", 'll'))
# print(Solution().strStr("aaaaa", 'bba'))
# print(Solution().strStr("abc", ''))
print(Solution().strStr("a", 'a'))
