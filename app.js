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
// const age = prompt("How old are you?");
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
// if(isNaN(age)||age < 0){
//     console.log("Please write a real positive number")
// } else if(age < 19){
//     console.log("You are too young.");
// } else if (age >= 20 && age < 50){
//     console.log("you can drink.");
// } else {
//     console.log("you can't drink.");
// }
//==는 자료형이 달라도 true가 될수있다. ex)0==false,1=='1' //true
//===는 자료형도 같아야 한다. ex)0===false, 1==='1'//false가 됨 자료형이 다르기 때문

// document.title = 'asdf';

//22.02.10

// const title = document.getElementById("title");
// const hellos = document.getElementsByClassName("hello");
// console.dir(title);
// console.log(hellos);

// const title = document.getElementsByTagName("h1"); 
// console.log(title)

// const h1 = document.querySelector("div.hello:first-child h1"); //css 방식으로 불러올 수 있다.
// console.dir(h1);             //여러개가 있다면 첫번째 하나만 가져옴
// //const title = document.querySelectorAll(".hello h1"); //all을 붙이면 전부 가져옴


// function handleTitleClick() {
//     console.log("title was clicked!");
//     h1.style.color = "blue";
//     h1.innerText = "클릭";
// }
// function handleMouseEnter(){
//     console.log("mouse is");
//     h1.innerText = "올라감";
// }
// function handleMouseLeave(){
//     h1.innerText = "내려감";
// }

// h1.addEventListener("click", handleTitleClick);  //클릭하면 함수 작동
// h1.addEventListener("mouseenter",handleMouseEnter);//마우스가 올라가면 함수 작동
// h1.addEventListener("mouseleave",handleMouseLeave);//마우스가 내려가면 함수 작동

// // h1.onclick = handleTitleClick;//위 클릭 이벤트와 같은 결과

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }
// window.addEventListener("resize", handleWindowResize);

//22.02.11

// const h1 = document.querySelector("div.hello:first-child h1");//1.element 를 찾아

// function handleTitleClick() {       //3.이벤트에 반응해
//     const currentColor = h1.style.color;
//     let newColor;
//     if (currentColor === "blue"){
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }
// h1.addEventListener("click",handleTitleClick); //2.event를 listen 해라
//js만으로 해줄 수 있지만 좋지않아 스타일링은 css에서 하고 html에 import하는게 좋아
////////////////////////////////////////////////////////////

// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick() {     
//     const clickedClass = "clicked" //이렇게 변수를 만들어 주지 않고 클래스 네임을
//     if(h1.className === clickedClass) { //여기에 바로 넣어줘도 되지만 실수할 수 있음
//         h1.className = "";
//     } else {
//         h1.className = clickedClass;
//     }
// }
// h1.addEventListener("click",handleTitleClick);

//classList
// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick() {     
//     const clickedClass = "clicked"
//     if(h1.classList.contains(clickedClass)) { //지정한 값이 엘리먼트 class에 있는지 확인
//         h1.classList.remove(clickedClass);//지정한 값을 제거
//     } else {
//         h1.classList.add(clickedClass);//지정한 값을 추가
//     }
// }
// h1.addEventListener("click",handleTitleClick);

//toggle = 위의 과정을 한번에 할수있다. 지정값이 있으면 제거 없으면 추가.
// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick() {     
//     const clickedClass = "clicked"
//     h1.classList.toggle(clickedClass);
// }
// h1.addEventListener("click",handleTitleClick);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", (line) => { 
    input = line.split(' ');
    rl.close();
});
rl.on('close', () => {
    console.log(input[0]-input[1]);
})