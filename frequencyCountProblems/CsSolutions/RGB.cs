   public static int RGB(string letters)
    {
      int[] rgb = new int[] { 0, 0, 0 };
      foreach (var letter in letters)
      {
        if (letter.Equals('r'))
        {
          rgb[0]++;
        }
        else if (letter.Equals('g'))
        {
          rgb[1]++;
        }
        else if (letter.Equals('b'))
        {
          rgb[2]++;
        }
      }
      var min = rgb[0];
      foreach (var el in rgb)
      {

        if (el < min)
        {
          min = el;
        }
      }
      return min;
    }