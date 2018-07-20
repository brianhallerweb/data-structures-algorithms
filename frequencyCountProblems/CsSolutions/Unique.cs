public static List<int> Unique(List<int> numbers)
    {
      var hash = new Dictionary<int, int>();

      for (var i = 0; i < numbers.Count; i++)
      {
        if (!hash.ContainsKey(numbers[i]))
        {
          hash[numbers[i]] = 1;
        }
      }
      var uniqueNumbers = new List<int>();
      foreach (KeyValuePair<int, int> pair in hash)
      {
        uniqueNumbers.Add(pair.Key);
      }
      return uniqueNumbers;

    }