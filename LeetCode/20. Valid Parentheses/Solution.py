class Solution:
    parenthesisMapper = {
        ']': '[',
        ')': '(',
        '}': '{'
    }

    def isValid(self, s: str) -> bool:
        stack_arr = []
        for p in s:
            if self.parenthesisMapper.get(p, -1) == -1:
                # 正括号
                stack_arr.append(p)
            else:
                # 反括号
                if len(stack_arr) == 0:
                    return False
                rp = stack_arr.pop()
                if rp != self.parenthesisMapper[p]:
                    return False
        return True if len(stack_arr) == 0 else False


print(Solution().isValid('()[]{}'))
