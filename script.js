const ingridients = document.getElementById('ingridients');
const button = document.getElementById('button');
const qty = document.getElementById('qty');
const unit = document.getElementById('unit');
const food = document.getElementById('food');
const calories = document.getElementById('calories');
const weight = document.getElementById('weight');


fetch(''
, {
  method: 'GET',
  mode: 'no-cors'
})
  .then(response =>response.json())
  .then(data => console.log(data))
  .catch(error =>console.log('Error:', error));

/*
  .then(response => response.json())
  .then(data => console.log(data.ingr))
  .catch(error => console.log(error))*/