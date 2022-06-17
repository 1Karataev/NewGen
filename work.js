"use strict"
 let courses = [
        { name: "Courses in England", prices: [0, 100] }, 
        { name: "Courses in Germany", prices: [500, null] }, 
        { name: "Courses in Italy", prices: [100, 200] }, 
        { name: "Courses in Russia", prices: [null, 400] },
        { name: "Courses in China", prices: [50, 250] },
        { name: "Courses in USA", prices: [200, null] },
        { name: "Courses in Kazakhstan", prices: [56, 324] },
        { name: "Courses in France", prices: [null, null] },
    ];
    let requiredRange1 = [null, 200];
    let requiredRange2 = [100, 350];
    let requiredRange3 = [200, null];

 /// Первый вариант решения с исключением всех null
function filter1(arr){
  let coursesSort = courses.map((course)=>{return {name: course.name, prices: course.prices.filter((price) => price !== null )}})
  if(arr.every((num)=> num ==null)) return courses;

  if(arr[0] == null) return coursesSort.map((course) => {return {name: course.name, prices: course.prices.filter((price) => price <=arr[1])}}).filter((cours)=> cours.prices.length !== 0 )

  if(arr[1] == null) return coursesSort.map((course) => {return {name: course.name, prices: course.prices.filter((price) => price >=arr[0])}}).filter((cours)=> cours.prices.length !== 0 )
  return coursesSort.map((course) => {return {name: course.name, prices: course.prices.filter((price) => +arr[0] <= price && price <= +arr[1])}}).filter((cours)=> cours.prices.length !== 0 )
}
/// Первый вариант решения с изменением значиния в курсах
function filter2(arr){
  let coursesSort = courses.map((course)=>{return {name: course.name, prices: course.prices.map((price,i) => i == 0 && price == null? 0:i == 1 && price == null ? Infinity: price)}})
 if(arr.every((num)=> num ==null)) return courses;

  if(arr[0] == null) return coursesSort.map((course) => {return {name: course.name, prices: course.prices.filter((price) => price <=arr[1])}}).filter((cours)=> cours.prices.length !== 0 )

  if(arr[1] == null) return coursesSort.map((course) => {return {name: course.name, prices: course.prices.filter((price) => price >=arr[0])}}).filter((cours)=> cours.prices.length !== 0 )
  return coursesSort.map((course) => {return {name: course.name, prices: course.prices.filter((price) => +arr[0] <= price && price <= +arr[1])}}).filter((cours)=> cours.prices.length !== 0 )
}
///сортировка по минимальной цене

function sortMin(){
return courses.sort((a,b)=> a.prices[0] - b.prices[0])
}
///сортировка по масимальной цене
function sortMax(){
return courses.sort((a,b)=> b.prices[0] - a.prices[0])
}


