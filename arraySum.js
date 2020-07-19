
function getArraySum(numbers)
{
    var sum = 0;
    for(var i = 0; i <numbers.length; i++)
    {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 65, 20, 19, 78];
var result = getArraySum(numbers);
console.log("Total of the numbers: ", result);

var total = getArraySum([12,50,98,45]);
console.log("Total of the numbers: ", total);