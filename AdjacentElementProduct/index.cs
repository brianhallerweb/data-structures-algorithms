using System;

namespace playground
{

  class Program
  {
    public static int adjacentElementProduct(int[] array)
    {
      var max = array[0] * array[1];
      for (var i = 2; i < array.Length - 1; i++)
      {
        if (array[i] * array[i + 1] > max)
        {
          max = array[i] * array[i + 1];
        }
      }
      return max;
    }
    static void Main(string[] args)
    {
      int[] numbers = new int[6] { 3, 6, -20, -5, 7, 3 };
      var result = adjacentElementProduct(numbers);
      System.Console.WriteLine(result);

    }
  }
}

