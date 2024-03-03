let ingridients = document.getElementById('ingridients');
let button = document.getElementById('button');
let sugar = document.getElementById('sugar');
let iron = document.getElementById('iron');
let vitaminC = document.getElementById('vitaminC');
let calories = document.getElementById('calories');
let calcium = document.getElementById('calcium');
let analysisForm = document.getElementById('AnalysisForm');

function onBtnClick(){
  let ingridientsValue = ingridients.value;
//const API = 'https://api.edamam.com/api/nutrition-data?app_id=d7be0f59&app_key=7670b7efd74aa8278e4343bfd8644a49&nutrition-type=cooking&ingr=1%20onion'
let API = `https://api.edamam.com/api/nutrition-data?app_id=d7be0f59&app_key=7670b7efd74aa8278e4343bfd8644a49&nutrition-type=cooking&ingr=1%20${ingridientsValue}`;

let caloriesResult = fetch(API).then((res) => res.json()).then((data) => calories.textContent = Math.ceil(data.totalNutrients.ENERC_KCAL.quantity));
let sugarResult = fetch(API).then((res) => res.json()).then((data) => sugar.textContent = Math.ceil(data.totalNutrients.SUGAR.quantity));
let ironResult = fetch(API).then((res) => res.json()).then((data) => iron.textContent = Math.ceil(data.totalNutrients.FE.quantity));
let vitaminCResult = fetch(API).then((res) => res.json()).then((data) => vitaminC.textContent = Math.ceil(data.totalNutrients.VITC.quantity));
let calciumCResult = fetch(API).then((res) => res.json()).then((data) => calcium.textContent = Math.ceil(data.totalNutrients.CA.quantity));

  }


function onBtnClickCleaner(){
 
  calories.textContent = 0;
sugar.textContent = 0;
iron.textContent = 0;
vitaminC.textContent = 0;
calcium.textContent = 0;
ingridients.value = '';

}
