/*var message = 'Hello world!'
var Message = ''
var helloMessage = 'Hello again'

var $ = 'Dollar'

var message2 = 'Hello world message 2'
var message3 = "Hello world message 3"

var сообщение = 'Сообщение!'

console.log(message)*/

/*
    Number
    String
    Boolen
    Object
    Null
    Undefind
*/

/*var number = 42
var string = 'Message'
var isTrue = true // false
var obj = {a: 1}
var nothing = null
var undef = undefined

console.log(typeof number)*/

/*var num1 = 12
var num2 = 8

console.log('+:', num1 + num2)
console.log('-:', num1 - num2)
console.log('*:', num1 * num2)
console.log('/:', num1 / num2)

var str1 = 'ZA'
var str2 = 'WARUDO!'

console.log('+:', str1 + ' ' + str2)

console.log('1 + 2:', 1 + '2')
console.log('str1 + num1:', str1 + num1)

console.log('Bollean + string:', true + str2)

console.log('True + 1:', true + 1)
console.log('False + 1:', false + 1)*/

/*var result = 12 - 6 / 3
var result2 = 3 + 4 * 2

var isGreater = 20 - 6 * 3 >= 4
var isGreater2 = 20 - 6 * 3 >= 1

console.log('12 - 6 / 3', result)
console.log('3 + 4 * 2', result2)
console.log('20 - 6 * 3 >= 4', isGreater)
console.log('20 - 6 * 3 >= 1', isGreater2)*/


/*console.log('5 % 2', 5 % 2)
console.log('8 % 3', 8 % 3)
console.log('15 % 5', 15 % 5)

var i = 1
i = i + 1
i++
console.log('i', i)

console.log('i', i++)*/

/*console.log('5 > 3', 5 > 3)
console.log('3 < 2', 3 < 2)

console.log('8 >= 7', 8 >= 7)
console.log('12 <= 12', 12 <= 12)

console.log('4 == 4', 4 == 4)
console.log('5 == 4', 5 == 4)

console.log('4 != 4', 4 != 4)
console.log('5 != 4', 5 != 4)

console.log('4 === 4', 4 === 4)
console.log('5 === 4', 5 === 4)

console.log('4 === 4', 4 === '4') // false
console.log('4 == 4', 4 == '4') // true*/

/*console.log(true && true)
console.log(true && false)

console.log(true || false)
console.log(false || false)

console.log(!false)
console.log(!!true) // !!true = !false => true

console.log((false && true) || (true || false) || !true)
// false || true || false => true*/

/*var currentYear = 2018
var carName = 'Ford'
var carYear = 2008
var carAge = carrentYear - carYear

if (carAge < 5) {
    console.log(carName + ' младше 5 лет')
} else if (carAge >= 5 && carAge <= 10) {
    console.log(carName + ' больше или равен 5 годам или меньше или равен 10 годам')
} else {
    console.log('Возраст ' + carName + ' равняется ' + carAge + ' годам')
}

//

var empty = 'Hello'

if (Nan) {
    console.log('Значение true')
} else {
    console.log('Значение false')
}*/

var carColor = 'green'

switch (carColor) {
    case 'green':
        console.log('Цыет зелёный')
        break
    case 'yellow':
        console.log('Цвет жёлтый')
        break
    case 'red':
        console.log('Цвет красный')
        break
    default:
        console.log('Цвет неопределён')
    }
