class Solution{

  public List<List<Integer>> RecursionSolution(int numRows){
    List<List<Integer>> res = new ArrayList<>();
    if(numRows==0){
      return res;
    }
    // ending case
    if(numRows==1){
      res.add(new ArrayList<>());
      res.get(0).add(1);
      return res;
    }
    // base case
    res = RecursionSolution(numRows-1);
    List<Integer> row = new ArrayList<>();
    row.add(1);
    for(int i = 1;i < numRows - 1;i++){
      row.add(res.get(numRows-1).get(i-1)+res.get(numRows-1).get(i));
    }
    row.add(1);
    res.add(row);
    // return
    return res;
  }

  public static void main(String[] args) {
    System.out.println('hello')
  }
}