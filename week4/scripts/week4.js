import {Car} from './car.js'

let cars = []
let car1 = new Car('Toyoda', 'Tundra', 2007, 'Gold', null)
let car2 = new Car('Ford', 'F-150', 2021, '')
let car3 = new Car('Honda', 'Accord', undefined, 'Silver')

cars.push(car1)
cars.push(car2)
cars.push(car3)

cars.forEach(
    car => {
        document.querySelector('#cars').innerHTML += `<li>${car.Make} ${car.Model} </li>`
    }
)
if (localStorage.getItem('cars')) {
    cars = JSON.parse(localStorage.getItem('cars'))
}
//localStorage.setItem('cars', JSON.stringify(cars))

// let make = 'toyota'
// let model = 'Tundra'
// let year = '2007'
// let color = 'Gold'

// let car = {
//     make: 'toyota',
//     model: 'Tundra',
//     year: '2007',
//     color: 'Gold'
// }

// let cars = []
// cars.push(car)
// console.log(cars)