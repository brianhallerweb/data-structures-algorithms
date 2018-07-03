   static Dictionary<char, int> LetterMap(string str)
    {
      Dictionary<char, int> letterMap = new Dictionary<char, int>();
      foreach (var letter in str)
      {
        if (letterMap.ContainsKey(letter))
        {
          letterMap[letter] += 1;
        }
        else
        {
          letterMap[letter] = 1;
        }
      }

      return letterMap;

    }

    static bool Anagrams(string strA, string strB)
    {
      if (strA.Length != strB.Length)
      {
        return false;
      }
      Dictionary<char, int> mapA = LetterMap(Regex.Replace(strA.ToLower(), @"\s+", ""));
      Dictionary<char, int> mapB = LetterMap(Regex.Replace(strB.ToLower(), @"\s+", ""));
      List<char> keyList = new List<char>(mapA.Keys);
      foreach (var key in keyList)
      {
        if (mapA[key] != mapB[key])
        {
          return false;
        }
      }

      return true;
    }