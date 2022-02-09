// const a = 5;
// const b = 2;
// const verylongvariablename = 0; //변수이름에 띄어쓰기를 하고싶다면 _나 대문자를 쓴다
// const c = 'asdf';
// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(c);
// let d;
// console.log(d); //undefined 출력
// const e = null;
// console.log(e);
// const f = true; //booleans


// //22.02.09

// //array 배열///////////////////////
// const daysOfWeek = ['mon','tue','wed','thu','fri','sat'];
// const nonsenst = [1,2,"hello",false,null,true,undefined,'skj'];
// console.log(daysOfWeek);
// console.log(nonsenst);

// nonsenst[1] = 3;
// console.log(nonsenst);  //이 경우는 

// daysOfWeek.push("sun");     //push로 배열 요소 추가
// console.log(daysOfWeek);

// //Objects////////////////////
// const info = {
//     name: 'kj',
//     age: 26,
//     man: true
// };
// console.log(info);
// console.log(info.name);
// info.name = 'skj';    //변경 가능
// console.log(info.name);
// info.weight = 67;     //추가 가능
// console.log(info);    

// //functions///////////////
// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is "+ nameOfPerson);
// }
// sayHello('skj', 26);
// sayHello('dal', 25);
// sayHello('ned', 24);

// function plus(a,b){
//     console.log(a+b);
// }
// plus();     //NaN이 출력됨. NaN은 Not a Number 숫자가 아니다라는 뜻
// plus(5);    //NaN이 출력됨. NaN은 Not a Number 숫자가 아니다라는 뜻
// plus(5,3);

// function divide(a, b) {
//     console.log(a/b);
// }
// divide(30,12);

// //오브젝트 안의 function///////////////
// const player = {
//     name: "skj",
//     sayHello: function(otherPersonsName){
//         console.log("hello " + otherPersonsName);
//     }
// }
// console.log(player.name);
// player.sayHello('ned');

// const calculator = {
//     add: function(a, b){
//         console.log(a+b);
//     },
//     minus: function(a, b){
//         console.log(a-b);
//     },
//     div: function(a, b){
//         console.log(a/b);
//     },
//     multi: function(a, b){
//         console.log(a*b);
//     },
//     power: function(a, b){
//         console.log(a**b);
//     }
// } 
// calculator.add(5,2);
// calculator.minus(5,2);
// calculator.div(5,2);
// calculator.multi(5,2);
// calculator.power(5,2);

// //return/////////////
// const age = 26;
// function calculatorKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }
// const krAge = calculatorKrAge(age); 
// console.log(krAge);
// console.log(calculatorKrAge(age));


// //typeof a 타입 확인, parseInt 자료형 변환///
const age = prompt("How old are you?");
// console.log(age, typeof age, typeof parseInt(age));

// const a = 1;
// const b = '26';
// console.log(typeof a);
// console.log(b);
// console.log(typeof b);
// console.log(1+b);

// parseInt(b);    //parseInt는 형변환을 해준다. 선언한 코드 줄에서만 변환 된것이지 계속해서 
// console.log(b); //변환된 상태인 것은 아니다.
// console.log(typeof b);  //위에서 형 변환을 해줬지만 여전히 string 상태
// console.log(1+parseInt(b)); 

//conditionals 조건문//////////////////
//console.log(isNaN(age)); //isNaN()숫자인지 아닌지 booleans값으로 알려준다. 숫자면 false
if(isNaN(age)||age < 0){
    console.log("Please write a real positive number")
} else if(age < 19){
    console.log("You are too young.");
} else if (age >= 20 && age < 50){
    console.log("you can drink.");
} else {
    console.log("you can't drink.");
}
//==는 자료형이 달라도 true가 될수있다. ex)0==false,1=='1' //true
//===는 자료형도 같아야 한다. ex)0===false, 1==='1'//false가 됨 자료형이 다르기 때문