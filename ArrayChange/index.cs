    static int ArrayChange(int[] array)
    {
      int moves = 0;
      for (var i = 1; i < array.Length; i++)
      {
        while (array[i] <= array[i - 1])
        {
          array[i] += 1;
          moves++;
        }
      }
      return moves;
    }