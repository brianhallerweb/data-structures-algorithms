public static List<int> MissingNumber(int n, List<int> numbers)
    {
      var missingNumbers = new List<int>();
      numbers.Sort();
      if (numbers[0] != 1)
      {
        missingNumbers.Add(1);
      }
      var i = 0;
      while (i < n - 2)
      {
        if (numbers[i] + 1 != numbers[i + 1])
        {
          numbers.Insert(i + 1, numbers[i] + 1);
          missingNumbers.Add(numbers[i] + 1);
          i++;
        }
        else
        {
          i++;
        }
      }
      if (numbers[numbers.Count - 1] != n)
      {
        missingNumbers.Add(n);
      }
      return missingNumbers;
    }