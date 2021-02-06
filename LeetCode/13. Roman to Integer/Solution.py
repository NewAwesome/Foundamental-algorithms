class Solution:
    romanMapper = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    coupleSubstractMapper = {
        'IV': -2,
        'IX': -2,
        'XL': -20,
        'XC': -20,
        'CD': -200,
        'CM': -200
    }

    def romanToInt(self, s: str) -> int:
        roman_rs = 0
        arr = list(s)
        for i, val in enumerate(arr):
            # 处理累加值
            roman_rs += self.romanMapper[val]
            # if遍历到最后一位，则直接累加，不执行其他操作；否则需要用i,i+1位的组合串做对比查看是否需要减去特殊值
            if i != len(arr) - 1:
                couple_str = ''.join(arr[i: i + 2])
                if self.coupleSubstractMapper.get(couple_str, -1) != -1:
                    roman_rs += self.coupleSubstractMapper[couple_str]
        return roman_rs


# test case
print(Solution().romanToInt('MCMXCIV'))
