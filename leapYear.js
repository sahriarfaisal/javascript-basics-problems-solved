function isLeapYear(year)//function declearation.
{
    const remainder = year;
    if((remainder % 4 == 0) || (remainder % 400 == 0) && (remainder % 100 != 0))
    {
        return true;
    }
    else
    {
        return false;
    }
}
const checkYear = isLeapYear(2021);//passing value parametter.
if(checkYear==true)//check return value.
{
    console.log("This is a leap year");
}
else 
{
    console.log("This is not a leap year");
}