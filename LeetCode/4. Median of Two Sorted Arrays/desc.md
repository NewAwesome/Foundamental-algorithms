# Q4
There are two sorted arrays A and B of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume A and B cannot be both empty.

Example 1:
```
A = [1, 3]
B = [2]

The median is 2.0
```
Example 2:
```
A = [1, 2]
B = [3, 4]

The median is (2 + 3)/2 = 2.5 
```
# Solution
## Approach 1: Recursive & binary search
> https://medium.com/@hazemu/finding-the-median-of-2-sorted-arrays-in-logarithmic-time-1d3f2ecbeb46
The core is to find the number of values A will contribute, because we know the total number of A+B, so we can compute the number of B will contribute. And then we could get the median number by compare the last value of A and B respectly contribute, the bigger one is it.

How to find the number of values A will contribute? 

- Firstly, computing the number range of values A could contribute
- Secondly, Using 'binary search' to split the A's number range, for each value, do the Step.3
- Third, in step.2 we could get numbers of values both A and B contribute, calling it aCount & bCount. Calling the value x= A[aCount-1],y=B[bCount-1]
  - Getting the greater one in x & y, for example the greater is x.
  - We need to compare x with the successor of y in case the x will be push to out of the left part of the sorted arrays. （ For example, `A[4,20,(32),50,55,61]` `B[1,15,(22),30,70]` `sorted arrays[1,4,15,20,22,(30),32,50,55,61,70]` , obviously, the 32 greater than 22, but meanwhile 32 also greater than 30 (the successor of 22), so the 32 has been pushed out of the left part of sorted array(which ends up with 30). In case of this, the 32 is not the median but the 30 is, so we should decrease the number of values that A will contribute, and increase the number of values that B will contribute ）
  - if x greater than the successor of y, then we should decrease the aCount and increase the bCount, instead of decreasing&increasing one by one ,we using the binary search, assigning aCount to be the center of the left part of A's number range if aCount should be decreasing.
  - Until the x( notice that in the program the greater value could be changed) is smaller than the successor of y, that the x is finally the median which we want.

Because we find the number of values A will contribute by binary search, so the time complexity equals O(log(m+n)) 

# Summary
## Javascript
```
1. （So shit）
3/2 = 1.5 ;
parseInt((3/2).toString()) = 1 ;
3/2.0 = 1.5 ;

2. 4>null === true

3. edge case
  [] empty array
  [1,3] [2,4] even
  [1,2] [3,4] even & medians respectively located at two arrays
```