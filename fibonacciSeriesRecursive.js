function fibonacci(num)
{
    if (num == 0)
    {
        return [0];
    }
    else if(num == 1)
    {
        return [0, 1];
    }
    else{
        //Calculate array nth element
        var fibo = fibonacci(num-1);
        var nextElement = fibo[num-1] + fibo[num-2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacci(15);
console.log(result);