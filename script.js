const ingridients = document.getElementById('ingridients').value;
const button = document.getElementById('button');
const qty = document.getElementById('qty');
const unit = document.getElementById('unit');
const food = document.getElementById('food');
let calories = document.getElementById('calories');
const weight = document.getElementById('weight');

/*function onBtnClick(){
fetch('https://api.edamam.com/api/nutrition-data?app_id=d7be0f59&app_key=7670b7efd74aa8278e4343bfd8644a49&nutrition-type=cooking&ingr=1%20apple')
  .then(response => response.json())
  .then(data => calories.textContent = data.calories,
    weight.textContent = data.totalWeight)
}*/
function onBtnClick(){
const API = `https://api.edamam.com/api/nutrition-data?app_id=d7be0f59&app_key=7670b7efd74aa8278e4343bfd8644a49&nutrition-type=cooking&ingr=1%20${ingridients}`
const fetchResult = fetch(API).then((res) => res.json()).then((data) => {calories.textContent = data.calories});
}
/*
  .then(response => response.json())
  .then(data => console.log(data.ingr))
  .catch(error => console.log(error))
  information?apiKey=618b54d6b79d47e8a682a33d950e7d44*/