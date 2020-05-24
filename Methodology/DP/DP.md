## **Dynamic Programing**

---

思路类似于记忆化递归。

- 递归一般是自顶向下（逆向思考，欲求得的结果是原问题，只有它依赖的子问题完全求出，即子问题的递归返回了结果之后原问题才能求解；每次求解新的问题时，它需要递归调用进行计算它们的子问题）
  （FIXME:【待确认】偶尔也有自底向上的做法，自底向上的思路除了多个递归调用栈之外与 dp 并无区别）
- dp 仅允许自底向上（正向思考，从最小子问题开始求解，每次求解新的问题时，它的子问题已经计算出来了）

DP 解题思路

- 定义 DP 数组的含义
- 定义状态转移方程
- 初始化一些初始值

### **Example1. Fibonacci**

```java
--- Recursion ---
class Solution {
  public int Fibo(int N){
    if(n<0){
      return -1;
    }
    if(n==0){
      return 0;
    }
    if(n==1||n==2){
      return 1;
    }
    return Fibo(N-1) + Fibo(N-2);
  }
}
```

```java
--- DP ---
class Solution {
  public int DP(int N){
    if(n<0){
      return -1;
    }
    if(n==0){
      return 0;
    }
    int dp[] = new Int[N];
    dp[0] = 0;
    dp[1] = 1;
    for(int i = 0;i < N;i++){
      dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[N]
  }
}
```

```java
--- Space Optimized DP ---
class Solution {
  public int OptimizeDp(int N){
    if(n<0){
      return -1;
    }
    if(n==0){
      return 0;
    }
    int dp1 = 0;
    int dp2 = 1;
    for(int i = 0;i < N;i++){
      dp1 = dp1 + dp2;
      // exchange
      dp1 = dp1 ^ dp2;
      dp2 = dp1 ^ dp2;
      dp1 = dp1 ^ dp2;
    }
    return dp2;
  }
}
```

### **Example2. 打家劫舍**

```
Refer to : ../LeetCode/198. 打家劫舍-系列
```

### **Example3. 求二维棋盘总路线**

TODO: Here

```
Refer to : ../LeetCode/62. 不同路径
```

### **Example1. Fibonacci**

### **Example1. Fibonacci**

# 参考：

> https://zhuanlan.zhihu.com/p/130743652
> 参考
> https://zhuanlan.zhihu.com/p/91582909
