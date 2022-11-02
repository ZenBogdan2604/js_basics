/*var div = document.getElementById('playground')
var p = document.getElementsByClassName('')
var h1 = document.getElementsByTagName
console.log(div)
console.log(p)
console.log(h1)*/

var div = document.querySelector('#playground')
var p = document.querySelectorAll('.text')
var h1 = document.querySelector
var input = document.querySelector('input')
div.innerHTML = '<h2 style="color: red;">From javascript</h2>'
h1.textContent = 'Changed from JS'
//var il = document.querySelector('div#playground ul')
console.log(input.value)
console.log(div)
console.log(p)
console.log(h1.textContent)
//console.log(ul)