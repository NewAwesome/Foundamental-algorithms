const longestPalindrome: (str: String) => String = function (
  str: String
): String {
  const arr = str.split(''),
   arr_rv = [...arr];
  arr_rv.reverse()
  // arr & arr_rv(reversed)

  // 两个指针
  const idx = 0,
    idx_rv = 0;
  while(idx<arr.length){
    
  }
};

/* test case */
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("dabab"));
console.log(longestPalindrome("cbbd"));