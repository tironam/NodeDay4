// function Person (name, age, email, address) {
//     this.name = name
//     this.age = age
//     this.email = email
//     this.address = address 
//     this.printInfo = () => {
//         console.log(`
//         Name: ${this.name}
//         Age: ${this.age}
//         Email: ${this.email}
//         Address: ${this.address}
//         `)
//     }
// }

// let John = new Person('John', '23', 'johnd@gmail.com', 'johnjacob', '1234', '123 your way ln', '949-867-5309', '123-45-6789')

// John.printInfo()

// function Teacher (name, age, email, address, subject) {
//     Person.call(this, name, age, email, address)
//     this.subject = subject
// }

// let teacher1 = new Teacher ('Mr Johnson', 54, 'jjohnson@aol.com', '123 yourway ln', 'math')

// console.log(teacher1)

// function Student (name, age, email, address, gpa, grade, subject) {
//     Person.call(this, name, age, email, address)
//     this.gpa = gpa
//     this.grade = grade
//     this.subject = subject
//     this.printInfo = () => {
//         console.log(`
//         Name: ${this.name}
//         Age: ${this.age}
//         Email: ${this.email}
//         Address: ${this.address}
//         GPA: ${this.gpa}
//         Grade: ${this.grade}
//         Favorite Subject: ${this.subject}
//         `)
//     }
// }

// let student1 = new Student('Michael', 29, 'tironamichael@gmail.com', '47 address way', '3.5', 'Senior', 'Web Development')

// student1.printInfo()

// class Animal {
//     constructor(type, sound) {
//         this.type = type
//         this.sound = sound
//         this.makeSound =() => {
//             console.log(this.sound)
//         }
//     }
// }

// let dog = new Animal('dog', 'bark')

// dog.makeSound()

// class Reptile extends Animal{
//     constructor (type, sound, scales){
//         super(type, sound)
//         this.scale = scales
//     }
// }

// let Lizard = new Reptile('Lizard', 'hiss', 100)

// console.log(Lizard)

class Person {
    constructor(name, age, email, address) {
        this.name = name
        this.age = age
        this.address = address
    }
}


class Student extends Person{
    constructor(name, age, email, address, gpa, grade, favoriteSubject) {
        super(name, age, email, address)
        this.gpa = gpa
        this.grade = grade
        this.favoriteSubject = favoriteSubject 
    }
}

let student1 = new Student('Ricky', '21', 'rickytickytavi@hotmail.com', '123 myhome ln', '3.6', 'junior', 'computer science')

console.log(student1)

const Animal = (type, sound) => ({ type, sound })

let dog = Animal('dog', 'bark')

const Reptile = (type, sound, scale) => ({
    ...Animal(type, sound), scale
})


let lizard = Reptile('lizard', 'hiss', 100)

console.log(lizard)