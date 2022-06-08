main
var numbers = ['one', 'two', 'three', 'four', 'five'];
alert(numbers.toString());
alert(numbers);

var 
var
let
for 
//while 
//break
array.forEach(element => {

});

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
} 
for (const iterator of object) {
    
}
forEach
for

if (condition) {
    
} else {
    
}

String.toString

function cal(){
    return a
}
var a = cal()
console.log(a)

var a = function(){}

a = {
    b:function(){}

}

var a = new Array();
a.push(1)
console.log(a)

var b = new Array()
var d = new Array()


function cal(mode){
    var funcs = {
        'plus' : function(left,right){
            return left+right},
        'mul' : function(left,right){
            return left*right}
    }
    return funcs[mode];
}

console.log(cal('plus')(2,1))
console.log(cal('mul')(2,3))

var numbers = [20, 10 ,3, 5, 2]
console.log(numbers.sort()); //문자로 순서 정함
var sortfunc = function(a,b){
    return b-a;
}
console.log(numbers.sort(sortfunc))

//외부함수 내부함수
function outter(){
    function inner(){
        var title = 'hello world';
        console.log(title);
    }
    inner();
}
outter();

//클로저

function outter(){
    var title = 'hello world';
    return function(){
        console.log(title);
    }
}
inner = outter();
inner();

//클로저 활용   , 비공개 변수 title 만듬
//변수에 대한 접근이 어렵게 보호차원에서 
function factory(title){
    return {
        set : function(){
            return title;
        },
        get : function(_title){
            title = _title;
        }
    }
} 


var movie1 = factory('스프링')
var movie2 = factory('윈터')

console.log(movie1.set());
console.log(movie2.set());

 
var arr = []
for (var i = 0;  i < 5; i++) {
    arr[i] = function(id){
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr){
    console.log(arr[index]());
}

//date
var d = new Date(); //현재시간
var d = new Date(milliseconds);
var d = new Date(dateString);
var d = new Date(year, month, day, hours[, minutes, seconds, milliseconds]);

var d = new Date(30*365*24*60*60*1000); 
// 30년 * 365일 * 24시간 * 60분 * 60초 * 1000밀리세컨드 
//= 1970부터 30년 후에 시간
// Sat Dec 25 1999 09:00:00 GMT+0900
var d = new Date("january 01, 2000 00:00:00");
// Sat Jan 01 2000 00:00:00 GMT+0900
d.getdate(); //일수 반환
d.getday(); //요일반환
d.getfullyear(); //년도 반환


//객체

function dog(color,age,name){
    this.color = color;
    this.age = age;
    this.name = name;
}

var mydog = new dog('blue',1,'마루');
var urdog = new dog('red',2,'호두');
console.log(mydog.age)

//delete mydog.age;
console.log(mydog.age)
console.log(urdog.age)

console.log(Object.getOwnPropertyNames(mydog));

console.log(Object.keys(mydog))


//arguments    - 약속된 변수 배열 (인자들의)
//배열과 유사 
//몇개가 들어오든지 
function sum(){
    var _sum = 0
    for (var i = 0; i < arguments.length; i++ ){
        console.log(i + ' : ' + arguments[i] + '<br />');
        _sum += arguments[i];
    }
    return _sum;
}   
console.log('result : ' + sum(1,2,3,4,5,6));


function one(a){
    one.length //1  처음 설정된 인자수 
    arguments.length //   함수에 들어온 인자수 
    return a
}

one(b,c);


//객체 생성자   자바스크립트는 클래스가 존재하지않는다.
function person(name){
    var p = new person();
    p.name = name
    p.intro = function(){
        return 'my name is' +  this.name;
    }
}

var p2 = new person('dd');  //함수앞에 new를 붙여서 사용하면 객체를 만드는 생성자이다.

var p1 = {
    'name' : 'dd',
    'intro' : function(){
        return 'my name is ' + this.name
    }
}  // 객체생성  거의 같은 효과




var arr = [1, true, "JavaScript"];
function printArr(value, index, array) {
    console.log("arr[" + index + "] = " + value + "<br>");
}



//array 객체
Array.from(a) // 배열같은 객체 , 반복객체 를 배열로 변환 
Array.isArray(arr) //배열인지 확인
Array.of(10,20,3) //[10,20,3] 배열생성 

//array 메소드   
arr.push() , arr.pop() , arr.shift() , arr.unshift() , arr.sort()
arr.reverse(), arr.splice() , arr.join() , arr.concat()
arr.toString(), arr.indexOf() , arr.lastIndexOf()

arr.forEach(printArr);	// 배열 arr의 각 요소마다 printArr() 함수가 호출됨.

array.forEach(함수)
//배열의 각요소를 함수에 넣어서 실행 

array.map(함수)
// 배열의 각요소를 함수에 넣어서 실행 후 배열에 담아서 반환

array.filter(함수)
//배열의 각요소를 함수에 넣어서 실행 후 결과값이 true 인 값들만 배열에 담아서 반환

array.every(함수)
//배열요소모두 함수에 넣어서 실행 후 모두 true일때 만 true반환

array.some(함수)
//하나라도 true이면 true반환

array.reduce(함수(a,b))
//모든요수를 하나의 값으로 줄이기 위해 인수가 2개인 함수를 사용하여 실행후 마지막 반환값을 반환

array.reduceRight(함수(a,b))
// reduce와 같이 방법으로 요소를 오른쪽부터 넣어서 실행 

array.entries() 
// 배열을 키와 값으로 표현되는 배열로 만들어 반환 
//인덱스가 키로 적용됨 한쌍


//함수리터럴, 객체리터럴 , 배열리터럴  - 쉽게만들 수있게 해주는 문법적 기법

//함수 객체 
//함수 메소드

 //this 가 가르키는 것의 대한 
 //그냥 함수일때는 window , global 을 가르킴
 // 객체를 생성  객체를 가르킴 
var o = {}
var p = {}

function func(){
    switch(this){
        case o :
            console.log('o')
            break;
        case p :
            console.log('p')
            break;
        case global: //window
            console.log('global')
            break;
    }
}
func()
func.apply(o)
func.apply(p)





 // 상속 

 function person(name){        //부모 
     this.name = name;
 }

 person.prototype.name = null;
 person.prototype.intro = function(){
     return 'my name is ' + this.name;
 }

 function programmer(name){   //자식1
     this.name = name;
 }

 programmer.prototype = new person();  //상속 방법
 programmer.prototype.coding = function(){  // 상속 후 추가 
     return "hello";
 }
 var p1 = new programmer('herry');

 console.log(p1.intro());
 console.log(p1.coding());


 function designer(name){      //자식2
     this.name = name;
 }
 designer.prototype = new person();
 designer.prototype.design = function(){
     return 'world'
 }
 var p2 = new designer('potter');

 console.log(p2.design())
 console.log(p2.intro())




//javascript 표준 내장객체 의 확장 
//내장객체를 활용해 새로운 기능의 객체를 만듬

/*
var arr = new Array('seoul', 'new york', 'pusan','tsukuba','youngin')
function GetRandomValueFromArray(arr){
    var index = Math.floor(arr.length * Math.random());
    return arr[index];
}
console.log(GetRandomValueFromArray(arr))
*/

Array.prototype.Random = function(){
    var index = Math.floor(this.length * Math.random());
    return this[index];
}
var arr = new Array('seoul', 'new york', 'pusan','tsukuba','youngin')
console.log(arr.Random())



// Object 라는 객체
//모든 객체들은 object를 상속 받는다.

object.keys()
object.prototype.tostring()
/*
prototype이 있는 것들은 상속이 되어서 어떤 객체에서든지 
o.tostring() 같은 형태로 사용이 가능하나
prototype 이 없는 것들은 prototype에 속해있는것이 아니여서
상속이 되지 않아 다른 객체에서 바로 사용할수 없고 object라는 객체의 매소드로 
호출되어야만 사용이 가능하다. 
*/
 

//Object 객체 확장 해서 모든 객체에서 사용가능하도록 하는 방법
//프로토타입에 추가하면 모든 객체에 적용됨   상속받으므로 
Object.prototype.contain = function(needle){
    for ( var name in this ) {
        if (this[name] === needle){
            return true;
        }
    }
    return false;
}
var o = {'name':'ege','city':'seoul'}
var a = ['ege','leezche','graphi']

console.log(o.contain('ddd'))

console.log(a.contain('ege'))

//문제점 있음 
//모든 객체에 영향을 주기때문에 주의 해야함 
for (var name in o ){
    console.log(name)
}
// contain 값이 튀어나옴   object에 추가되어 함께 상속 받아졌기때문
//문제발생
//문제해결
 //이 객체가 상속받은게 아니라 본인이 직접 갖는 것인지 판결하는 것

for (var name in o ){
    if (o.hasOwnProperty(name)){ 
        console.log(name)
    }
}


//레퍼 객체     원시데이터를 객체처럼 사용할때 잠시 객체로 변경되는 객체

Number , String , Boolean


//복제

var a = 1;
var b = a;
b= 2 
console.log(a) //1 안바뀜 

//참조  
//원시데이터일때 는 실제 데이터가 들어있어서 복제 수정해도 따라서 바뀌지않는다.
// 하지만 객체일때는 실제데이터가 아니라 주소가 들어있어서 복제 후 수정하면 따라서 바뀐다.

var a = {'id': 1 };
var b = a;
b.id = 2;
console.log(a.id); //2 바뀜 

// b = {'id' : 5}
//새로운 객체를 할당하면 서로 다른 주소를 가르키기 때문에 따라서 바뀌지않는다.



//함수 참조 







