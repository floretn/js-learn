class Student {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`${this.name} say hello!`)
    }
}

class ProtoStudent {
    university = 'Mephi'
}

// const student = new Student('Ivan')
// student.greet()
const student = Reflect.construct(Student, ['Ivan'])
// console.log(student)
// console.log(student.__proto__ === Student.prototype)
//
// const studentNew = Reflect.construct(Student, ['Ivan'], ProtoStudent)
// console.log(studentNew.__proto__ === Student.prototype)
// console.log(studentNew.__proto__ === ProtoStudent.prototype)
// console.log(studentNew)
// console.log(studentNew.university)
// console.log(studentNew.__proto__.university)

Reflect.apply(student.greet, {name: 'Tester'}, [])
console.log(Reflect.ownKeys(student))
Reflect.preventExtensions(student)
if (Reflect.isExtensible(student)) {
    student.age = 25
}
console.log(student)