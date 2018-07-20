public static bool AnagramPalindrome(string str)
    {
      var dictMap = new Dictionary<char, int>();
      foreach (var letter in str)
      {
        if (dictMap.ContainsKey(letter))
        {
          dictMap[letter]++;
        }
        else
        {
          dictMap[letter] = 1;
        }
      }
      var oddCounter = 0;
      foreach (KeyValuePair<char, int> pair in dictMap)
      {
        if (pair.Value % 2 != 0)
        {
          oddCounter++;
        }
      }
      if (oddCounter == 1 && str.Length % 2 != 0)
      {
        return true;
      }
      if (oddCounter == 0 && str.Length % 2 == 0)
      {
        return true;
      }
      return false;
    }