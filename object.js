/*
// Object and get object property.
var student = {name:"S.M Faisal", id:224, department:"CSE", phone:8954};
console.log(student);//print abject all property.
//First way to acess object property.
var studntPhoneNumber = student.phone;//acess.
console.log(studntPhoneNumber);//print.
//Second way to acess object property.
var studentName = student["name"];//acess.
console.log(studentName);//print.
//Third way to acess object property.
var studentDepartment = "department";//store
var department = student[studentDepartment];//acess.
console.log(department);//print.
*/
var teacher = {name:"Mahbub", email:"demo@gmail.com", phone:54358, department:"CSE"};
console.log(teacher);//print all object property.
//Three way to change/update object property.
//First way to change/update object property.
teacher.name = "Anisul Islam";//Change/Update object name property value.
console.log(teacher);//Again print all object property.
//Second way to change/update object property.
teacher["email"] = "anisul@gmail.com";//Change/Update object email property value.
console.log(teacher);//Again print all object property.
//Third way to change/update object proprty.
var phonePro = "phone";//store
teacher[phonePro] = 47856;//Change/update object phone property value.
console.log(teacher);//Again print all object property.
//Add new property using Same three way.
//First way to add new property.
teacher.position = "Lecturer";
console.log(teacher);



