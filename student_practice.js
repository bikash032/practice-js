let all_student = [];
student_1 = ["student name", "one@gmail.com", "kathmandu", 987654321];
all_student.push(student_1);
let student_2 = ["student name", "two@gmail.com", "lalitpur", 9807654321];
all_student.unshift(student_2);
let student_3 = ["student name", "three@gmail.com", "bhaktapur", 9879873214];
all_student[all_student.length] = student_3;// size=all student.length
let student_4 = ["student name", "four@gmail.com", "udayapur", 9800873214];
all_student[3] = student_4
let student_5 = ["student name", "five@gmail.com", "imadol", 9800872114];
all_student[2] = student_5;
all_student.unshift(student_5);
console.log(all_student);
console.log("")// to breake line 
let first_elem =all_student.shift(); 
console.log(first_elem);
console.log(all_student);

