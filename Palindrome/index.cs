public static bool isPalindrome(string str)
    {
      char[] arr = str.ToCharArray();
      char[] revArr = str.ToCharArray();
      Array.Reverse(revArr);
      for (var i = 0; i < arr.Length; i++)
      {
        if (arr[i] != revArr[i])
        {
          return false;
        }
      }
      return true;
    }