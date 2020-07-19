function largestGetNumber(numbers)
{
    for(var i = 0; i< numbers.length; i++)
    {
        var larger = numbers[0];
        var elemement = numbers[i];
        if(elemement>larger)
        {
            larger = elemement;
        }
    }
    return larger;
}
var numbers22 = [12, 45, 86, 98, 78, 54, 69, 73]
//var output = largestGetNumber([45, 89, 70]);
var output = largestGetNumber(numbers22);
console.log("output",output);