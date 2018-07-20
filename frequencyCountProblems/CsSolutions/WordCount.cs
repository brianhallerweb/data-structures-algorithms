 public static Dictionary<string, int> WordCount(string sentence)
    {
      var dictMap = new Dictionary<string, int>();
      //this regex doesn't remove extra spaces. 
      var words = Regex.Replace(sentence.ToLower(), @"[^\w ]+", "").Split(" ");

      foreach (var word in words)
      {
        if (dictMap.ContainsKey(word))
        {
          dictMap[word]++;
        }
        else
        {
          dictMap[word] = 1;
        }
      }

      return dictMap;
    }