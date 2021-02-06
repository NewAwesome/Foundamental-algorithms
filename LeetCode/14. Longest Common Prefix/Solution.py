from typing import List


class Solution:
    # 思路: 取出最短的str，从第一个字符开始比较，遇到不相等的字符则直接返回[:i]
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ''
        shortest = min(strs,
                       key=len)  # 第一个参数是iterable对象 l，第二个参数是指定key=一个function f，做的事情是先对 l的每个元素执行f函数，对得到的值进行排序，最后取最小的那个
        for i, ch in enumerate(shortest):
            for other in strs:
                if other[i] != ch:
                    return shortest[:i]
        return shortest
