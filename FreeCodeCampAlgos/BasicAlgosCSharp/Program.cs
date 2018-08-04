using System;
using System.Collections.Generic;

namespace BasicAlgosCSharp
{
  class Program
  {
    // convert celsius to fahrenheit
    // farenheit = celsius * 9/5 + 32
    static double ConvertCtoF(double c)
    {
      return (c * 9) / 5 + 32;
    }

    //Reverse a string
    static string ReverseString(string str)
    {
      char[] letters = str.ToCharArray();
      Array.Reverse(letters);
      return new String(letters);
    }

    //Factorial
    static int Factorialize(int num)
    {
      var factorial = 1;
      for (var i = 2; i <= num; i++)
      {
        factorial *= i;
      }
      return factorial;
    }

    // Find the longest word
    // Return the length of the longest word in the provided sentence.
    static int findLongestWordLength(string str)
    {
      var words = str.Replace(@".", "").Replace(@",", "").Split(" ");
      var longest = words[0].Length;
      for (var i = 1; i < words.Length; i++)
      {
        if (words[i].Length > longest)
        {
          longest = words[i].Length;
        }
      }
      return longest;
    }

    //Return an array consisting of the largest number from each provided
    // sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
    static List<double> largestOfFour(List<List<double>> list)
    {
      var largests = new List<double>();
      for (var i = 0; i < list.Count; i++)
      {
        var largest = list[i][0];
        for (var j = 1; j < list[i].Count; j++)
        {
          if (list[i][j] > largest)
          {
            largest = list[i][j];
          }
        }
        largests.Add(largest);
      }
      return largests;
    }

    //Check if a string (first argument, str) ends with the given target
    //string (second argument, target) without using String.prototype.endsWith()
    static bool confirmEnding(string str, string target)
    {
      var ending = str.Substring(str.Length - target.Length);
      return ending == target;
    }

    // Repeat a given string str (first argument) for num times (second argument).
    // Return an empty string if num is not a positive number.
    // Do not use String.prototype.repeat()
    static string repeatStringNumTimes(string str, int num)
    {
      var repeats = new List<string>();
      for (var i = 1; i <= num; i++)
      {
        repeats.Add(str);
      }
      return String.Join("", repeats);
    }

    // Truncate a string (first argument) if it is longer than the given maximum
    // string length (second argument). Return the truncated string with a ... ending.
    static string truncateString(string str, int num)
    {
      if (str.Length <= num)
      {
        return str;
      }
      return str.Substring(0, num) + "...";
    }

    // Create a function that looks through an array (first argument) and returns
    // the first element in the array that passes a truth test (second argument).
    // If no element passes the test, return undefined.
    static void findElement()
    {
      //I don't believe this can be done in C# because arguments can't be functions
    }

    // Check if a value is classified as a boolean primitive. Return true or false.
    static void booWho()
    {
      // This doesn't make sense in C# because it has static typing
    }

    // Return the provided string with the first letter of each word capitalized.
    // Make sure the rest of the word is in lower case.
    static string titleCase(string str)
    {
      var lowerCaseWords = str.ToLower().Split(" ");
      var titleCaseWords = new List<string>();
      foreach (var word in lowerCaseWords)
      {
        titleCaseWords.Add(new String(Char.ToUpper(word[0]) + word.Substring(1)));
      }
      return String.Join(" ", titleCaseWords);
    }

    // You are given two arrays and an index.
    // Use the array methods slice and splice to copy each element of the first
    // array into the second array, in order.
    // Begin inserting elements at index n of the second array.
    static List<int> frankenSplice(List<int> list1, List<int> list2, int n)
    {
      var frankenArr = new List<int>();
      var start = new List<int>();
      for (var i = 0; i < n; i++)
      {
        start.Add(list2[i]);
      }

      var middle = list1;

      var end = new List<int>();
      for (var i = n; i < list2.Count; i++)
      {
        end.Add(list2[i]);
      }
      frankenArr.AddRange(start);
      frankenArr.AddRange(middle);
      frankenArr.AddRange(end);
      return frankenArr;
    }

    // Remove all falsy values from an array.
    static void Bouncer(int[] arr)
    {
      // I don't think this works in C# either because an array can only hold one type.  
    }

    // Return the lowest index at which a value (second argument) should be inserted
    // into an array (first argument) once it has been sorted. The returned value
    // should be a number.
    static int getIndexToIns(int[] arr, int num)
    {
      var index = 0;
      for (var i = 0; i < arr.Length; i++)
      {
        if (arr[i] < num)
        {
          index++;
        }
      }
      return index;
    }

    // Return true if the string in the first element of the array contains all of
    // the letters of the string in the second element of the array.
    static bool mutation(string[] arr)
    {
      var str1 = arr[0].ToLower();
      var str2 = arr[1].ToLower();
      for (var i = 0; i < str2.Length; i++)
      {
        if (str1.IndexOf(str2[i]) < 0) return false;
      }
      return true;
    }

    // Write a function that splits an array (first argument) into groups the length
    // of size (second argument) and returns them as a two-dimensional array.
    static List<List<int>> chunkArrayInGroups(int[] arr, int size)
    {
      var chunkedArr = new List<List<int>>();
      for (var i = 0; i < arr.Length; i += size)
      {
        var chunk = new List<int>();
        for (var j = i; j < i + size; j++)
        {
          chunk.Add(arr[j]);
        }
        chunkedArr.Add(chunk);
      }
      return chunkedArr;
    }
    static void Main(string[] args)
    {

    }
  }
}

