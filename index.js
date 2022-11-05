




/*for (var step = 1;step <= 3; step++){
    if (step == 1){
        students.name = 'Вася',
        students.age = 14,
        students.phoneNumber = '+79647386714'
        for (idphone = 1)
        
    } else if (step == 2){
        students.name = 'Олег',
        students.age = 13,
        students.phoneNumber = '+79854601372'
    } else if(step == 3){
        students.name = 'Саня',
        students.age = 15,
        students.phoneNumber = '+79735942949'
    }
    console.log(students)
}

var phones = {
    name: '',
    model: '',
    storage: 0    
}

for (var step = 1;step <= 3; step++){
    if (step === 1){
        phones.name = 'IPhone',
        phones.model = '9',
        phones.storage = 128
    } else if (step === 2){
        phones.name = 'Realme',
        phones.model = 'C21',
        phones.storage = 64
    }else if (step === 3){
        phones.name  = 'Samsung',
        phones.model = 'J20',
        phones.storage = 256
    }
    console.log(phones)
}

var cars = {
    id: '',
    name: '',
    model: ''
}

for (var step = 1;step <= 4; step++){
    if (step === 1){
        cars.id = step,
        cars.name = 'Lada',
        cars.model = '4'
    }else if (step === 2){
        cars.id = step,
        cars.name = 'Audi',
        cars.model = 's4'
    }else if (step === 3){
        cars.id = step,
        cars.name = 'BMW',
        cars.model = 'x7'
    }else if (step === 4){
        cars.id = step,
        cars.name = 'Mercedes',
        cars.model = 'c43'
    }
    console.log(cars)
}

var a = document.querySelector('a')
var oldHref = a.getAttribute('href')

a.setAttribute('href', 'https://ya.ru')
a.setAttribute('title', 'Go to yandex')
a.textContent = 'Yandex'


var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

box1.classList.add('red')

var hasClass = box2.classList.contains('blue')
console.log(hasClass)

if (hasClass) {
  box2.classList.remove('blue')
} else {
  box2.classList.add('blue')
}

var student = {
    name: 'Вася',
    age: 14,
    phoneNumber: '+79854782313',
    phone: {
        name: 'Samsung',
        model: 'J15'
    }
}

console.log(student)

var phone = {
    name: 'Samsung',
    model: 'J15'
}

var student = {
    name: 'Вася',
    age: 14,
    phoneNumber: '+79854782313',
    phone: phone,
}



console.log(student)*/

var button = document.querySelector('button')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')

function buttonHandler() {
    console.log('clicked!')
    h1.textContent = input.value
}

h1.addEventListener('mouseenter', function() {
    this.style.color = 'red'
    this.style.backgroundColor = 'black'
})

h1.addEventListener('mouseleave', function() {
    this.style.color = 'black'
    this.style.backgroundColor = 'transparent'
})

button.addEventListener('click', buttonHandler)

