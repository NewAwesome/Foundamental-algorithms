# Q5

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

```
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

Example 2:

```
nums1 = [1, 2]
nums2 = [3, 4]
```

# Solution

## Approach 1 : Bruce Force

Reversing str to str', and find the longest common subsequence .Has a O(n^3) complexity.

```
WRONG:
Just longest common subsequence, rather than EXPECTED "palindrome substr"
```

### Rectify

```
each time we find a longest substring candicate, we reverse it and see if the reversed substr is the same as substr itself.
```

See `own.ts`. Could AC but time limit exceeded.

### Now let's optimise "find longest common subsequence".

> View details : refer Q1143.

## Approach 2 : xxxx
