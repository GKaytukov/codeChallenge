let studentArr =[{
    firstName: 'Adi',
    lastName: 'Fisher',
}, 
{
    firstName: 'Emily',
    lastName: 'Labelle',
}, 
{
    firstName: 'Cari', 
    lastName: 'Licor', 
}, 
{
    firstName: 'Fanessa', 
    lastName: 'Hilaire', 
},]
function studentsLastName(studentArr) {
    for (let i = 0; i < studentArr.length; i++) {
        const student = studentArr[i]
        console.log(student.lastName)
    }

}
studentsLastNameFinder(studentArr)