    static List<string> AllLongestStrings(List<string> strs)
    {
      var longestStrings = new List<string>();
      int longestLength = 0;
      foreach (var str in strs)
      {
        if (str.Length >= longestLength)
        {
          longestLength = str.Length;
        }
      }
      foreach (var str in strs)
      {
        if (str.Length == longestLength)
        {
          longestStrings.Add(str);
        }
      }
      return longestStrings;

    }