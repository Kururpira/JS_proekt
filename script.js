let ingridients = document.getElementById('ingridients').value;
let button = document.getElementById('button');
let sugar = document.getElementById('sugar');
let iron = document.getElementById('iron');
let vitaminC = document.getElementById('vitaminC');
let calories = document.getElementById('calories');
let calcium = document.getElementById('calcium');
let analysisForm = document.getElementById('AnalysisForm');

function onBtnClick(){
const API = `https://api.edamam.com/api/nutrition-data?app_id=d7be0f59&app_key=7670b7efd74aa8278e4343bfd8644a49&nutrition-type=cooking&ingr=1%20${ingridients}`
const caloriesResult = fetch(API).then((res) => res.json()).then((data) => {calories.textContent =Math.ceil(data.totalNutrients.ENERC_KCAL.quantity)});
const sugarResult = fetch(API).then((res) => res.json()).then((data) => {sugar.textContent = Math.ceil(data.totalNutrients.SUGAR.quantity)});
const ironResult = fetch(API).then((res) => res.json()).then((data) => {iron.textContent = Math.ceil(data.totalNutrients.FE.quantity)});
const vitaminCResult = fetch(API).then((res) => res.json()).then((data) => {vitaminC.textContent = Math.ceil(data.totalNutrients.VITC.quantity)});
const calciumCResult = fetch(API).then((res) => res.json()).then((data) => {calcium.textContent = Math.ceil(data.totalNutrients.CA.quantity)});
}


function onBtnClickCleaner(){
  const API = `https://api.edamam.com/api/nutrition-data?app_id=d7be0f59&app_key=7670b7efd74aa8278e4343bfd8644a49&nutrition-type=cooking&ingr=1%20${ingridients}`
  const caloriesResult = fetch(API).then((res) => res.json()).then((data) => {calories.textContent =0});
const sugarResult = fetch(API).then((res) => res.json()).then((data) => {sugar.textContent = 0});
const ironResult = fetch(API).then((res) => res.json()).then((data) => {iron.textContent = 0});
const vitaminCResult = fetch(API).then((res) => res.json()).then((data) => {vitaminC.textContent = 0});
const calciumCResult = fetch(API).then((res) => res.json()).then((data) => {calcium.textContent = 0});
  analysisForm.reset();
}
