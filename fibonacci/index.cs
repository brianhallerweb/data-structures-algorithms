static int fib(int n)
    {
      var fibList = new List<int>() { 0, 1 };
      for (var i = 2; i <= n; i++)
      {
        fibList.Add(fibList[i - 2] + fibList[i - 1]);
      }
      return fibList[n];
    }