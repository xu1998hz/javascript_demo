// // Function scope demonstration and execution context
// var message = "in global";
// console.log("global: message = " + message);
//
// var a = function () {
//   var message = "inside a";
//   console.log("a: message = " + message);
//   function b () {
//     console.log("b: message = " + message);
//   }
//   b();
// }
// a();
//
// // ***** Equality
// var x = 4, y = 4;
// if (x == y) {
//   console.log("x=4 is equal to y=4");
// }
//
// x = "4";
// if (x == y) {
//   console.log("x='4' is equal to y=4");
// }
//
// // ***** Strict equality
// if (x === y) {
//   console.log("Strict: x='4' is equal to y=4");
// }
// else {
//   console
//   .log("Strict: x='4' is NOT equal to y=4");
// }
//
// // ***** Best practice for {} style
// // Curly brace on the same or next line...
// // Is it just a style?
// function a()
// {
//   return
//   {
//     name: "Yaakov"
//   };
// }
//
// function b() {
//   return {
//       name: "Yaakov"
//   };
// }
//
// console.log(a());
// console.log(b());
//
// // Default values
// function orderChickenWith(sideDish) {
//   sideDish = sideDish || "whatever!";
//   console.log("Chicken with " + sideDish);
// }
//
// orderChickenWith("noodles");
// orderChickenWith();
//
// // Object creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";
//
// console.log(company);
// console.log("Company CEO name is: "
//   + company.ceo.firstName);
//
// console.log(company["name"]);
// var stockPropName = "stock of company";
// company[stockPropName] = 110;
//
// console.log("Stock price is: " +
//   company[stockPropName]);
//
// // Better way: object literal
// var facebook = {
//   name: "Facebook",
//   ceo: {
//     firstName: "Mark",
//     favColor: "blue"
//   },
//   "stock of company": 110
// };
//
// console.log(facebook.ceo.firstName);
//
//
// // Function is the first class data stye
// // Function factory
// function makeMultiplier(multiplier) {
//   var myFunc = function (x) {
//     return multiplier * x;
//   };
//
//   return myFunc;
// }
//
// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));
//
//
//
// // Passing functions as arguments
// function doOperationOn(x, operation) {
//   return operation(x);
// }
//
// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(result);
//
// // Pass by reference vs by value
// function changePrimitive(primValue) {
//   console.log("in changePrimitive...");
//   console.log("before:");
//   console.log(primValue);
//
//   primValue = 5;
//   console.log("after:");
//   console.log(primValue);
// }
//
// var value = 7;
// changePrimitive(value); // primValue = value
// console.log("after changePrimitive, orig value:");
// console.log(value);
//
//
//
// function changeObject(objValue) {
//   console.log("in changeObject...");
//   console.log("before:");
//   console.log(objValue);
//
//   objValue.x = 5;
//   console.log("after:");
//   console.log(objValue);
// }
//
// value = { x: 7 };
// changeObject(value); // objValue = value
// console.log("after changeObject, orig value:");
// console.log(value);
//
//
// //Solution for Passs by value of Object ES6
// function makeAPICall(obj){
//   let ob = Object.assign({}, obj);
//   ob['name'] = "hari";
//   console.log('Obect in API call ', ob);
//   // make an API call with obj as params
// }
//
// function doTask(){
//   let mainObj = {'status' : 'new' };
//   console.log('Object before API call ', mainObj);
//   makeAPICall(mainObj);
//   console.log('Object after API call ', mainObj);
// }
//
// doTask()
//
// // advanced topics about class constructor, define a class method(prototype)
//
// // Closures
// function makeMultiplier (multiplier) {
//   // var multiplier = 2;
//   function b() {
//     console.log("Multiplier is: " + multiplier);
//   }
//   b();
//
//
//   return (
//       function (x) {
//         return multiplier * x;
//       }
//
//     );
// }
//
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10)); // its own exec env
