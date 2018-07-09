static int Factorial(int n)
    {
      if (n < 0)
        throw new Exception("input must be a integer >= 0");

      var result = 1;
      for (var i = 1; i <= n; i++)
        result *= i;

      return result;
    }