let student = [];
let name = ["bikash"];
let age = 28;
let address = ["udayapur"];
let phoneNumber = 9806607843
let country = ["NEPAL"]
student.push(name);// 1
//console.log(student);
size = student.length;
student.push(age);// 2
student.unshift(address);//0
student[4] = phoneNumber;//3
//console.log(student);
student[3]= country;// agin shift to no 3
console.log(student);

