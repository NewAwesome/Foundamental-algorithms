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

    # Sunday 算法
    # 1. 每次从 目标字符串中(haystack) 提取 待匹配字符串(target) 与 模式串(needle) 进行匹配：
    #     1.1 匹配则直接返回当前idx
    #     1.2 不匹配，则查看 target 在 haystack 中的后一位字符 c
    #         1.2.1 若 c 存在于 Pattern 中，则idx = idx + 偏移表[c]
    #         1.2.2 否则， idx = idx + len(pattern)
    # 偏移表：
    #     （解释：红框：上面一行写haystack，下面一行写needle，将needle和haystack中相同长度的字符串用给一个红框框起来，
    #                                           每次移动的时候needle随着红框移动，对比红框内的字符串是否完全匹配）
    #     理解为将 红框 从 haystack 头至尾移动，每次移动前观察 当前target的下一位的字符 c 是否在 needle 中出现：
    #         如果不出现，说明 target 不可能包含字符 c，直接将 红框 向后移动 len(needle)+1位，跨过字符c。
    #         如果出现了（有可能c在needle中多次出现），说明有可能匹配成功，需要向后移动 红框 len(needle)-[c在needle中最后一次出现的下标]位 使得 c 和 needle中最后一次出现c字符的位置 两者对齐。
    # 偏移表算法： m = len(needle); P = needle; w = 当前红框位置的下一位字符c
    #     shift[w] = m - max{i < m | P[i] = w}    if w is in P[0..m-1]
    #     shift[w] = m +1                         otherwise
    def strStr3(self, haystack: str, needle: str) -> int:
        # 偏移表计算函数
        def calShiftMap(st):
            dic = {}
            for i in range(len(st)):
                dic[st[i]] = len(st) - i
            dic["ot"] = len(st)+1
            return dic

        # 边界处理
        if not haystack or not needle:
            return 0 if not needle else -1

        # 计算偏移表
        dic = calShiftMap(needle)

        # 移动指针
        ptr = 0

        while ptr < len(haystack) - len(needle) + 1:
            # 待匹配字符串
            target = haystack[ptr:ptr + len(needle)]

            # 判断是否匹配
            if target == needle:
                return ptr
            else:
                # 边界处理
                if ptr == len(haystack) - len(needle):
                    return -1
                # 不匹配时根据下一个字符 cur_c 的偏移量移动ptr , 并重新赋值 target
                cur_c = haystack[ptr + len(needle)]
                if dic.get(cur_c):
                    ptr += dic[cur_c]
                else:
                    ptr += dic["ot"]
        return -1 if ptr >= len(haystack) - len(needle) + 1 else ptr


print(Solution().strStr3("hello", 'll'))
print(Solution().strStr3("aaaaa", 'bba'))
print(Solution().strStr3("abc", ''))
# print(Solution().strStr("a", 'a'))
