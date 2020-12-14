# Q118. Pascal's Triangle
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example 1:
```
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```
# Solution
## Approach 1 : Recursion
Java解法，思路分析:
- 1、 End case
     - Because every element of pascal's triangle equals to its upper level's two elements' sum. So 递进顺序是0-numRows, 回归顺序是numRows-0
     - end case是`numRows==0` 
     - 直接返回`[1]`
- 2、 Return
     - 返回二维数组(在递归全流程中传递)
- 3、 Base case
     - Base case是三个元素组成的倒树，分析流程
     1. recursion递归调用，将当前层以上的层中的treeNode都计算出来(只关注它的功能不要关注具体的实现)
     2. 本次递归处理: 遍历本行所有treeNode,每个treeNode都根据其双亲treeNode(已知)计算得出。
## Approach 2 : DP