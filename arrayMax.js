var marks = [45, 81, 63, 97, 23, 56, 88, 21];
var max = marks[0];
for(var i = 0; i<marks.length; i++)
{
    var element = marks[i];
    if(element>max)
    {
        max = element;
    }
}
console.log("Highest value is: ", max);