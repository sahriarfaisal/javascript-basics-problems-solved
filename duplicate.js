var studentId = [2, 6, 8, 10, 11, 56, 18, 1, 10, 25, 84];
var uniqeId = [];
for(var i = 0; i<studentId.length; i++)
{
    var element = studentId[i];
    var index = uniqeId.indexOf(element);
    if(index == -1)
    {
        uniqeId.push(element);
    }
}
console.log(uniqeId);