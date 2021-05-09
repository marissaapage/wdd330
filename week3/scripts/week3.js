let students = []

let student1 = {
    firstName: 'Tim',
    lastName: 'Thayne',
    iNumber: '112223333'
}

let student2 = {
    firstName: 'Bill',
    lastName: 'Squires',
    iNumber: '445556666'
}

let student3 = {
    firstName: 'Steve',
    lastName: 'Miller',
    iNumber: '778889999'
}

students = [
    student1,
    student2,
    student3
]

let student4 = {
    firstName: 'Mike',
    lastName: 'Nelson',
    iNumber: '001112222'
}

students.push(student4)

console.log(students)
console.log(students.length)

let tbody = document.querySelector('tbody')

//good
//var i;
// for (i = 0; i < students.length; i++) {
//     tbody.innerhtml += student[i] + "<br>";
//   }

//better
students.forEach(student => {
    tbody.innerHTML +=
    `<tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.iNumber}</td>
    </tr>`
})



// //best
// let studentsUpper = students.map(student =>{
//    return student.lastName.toUpperCase()
// })

// console.log(studentsUpper)