

    public void fizzBuzz(n){
for (var i = 0; i < n; i++){
    if(i % 15==0){
        System.Console.WriteLine("fizzbuzz");
    } else if (i % 5 == 0){
        System.Console.WriteLine("fizz");
    } else if (i % 3 == 0){
        System.Console.WriteLine("buzz");
    } else {
        System.Console.WriteLine(n);
    }
}
    }
