/*
Javascript의 함수는 일급 객체이다.

일급 객체(first-class object)란 생성, 대입, 연산, 인자 또는 반환값으로서의 전달 등, 프로그래밍언어의 기본적 조작을 제한없이 사용할 수 있는 대상을 의미한다.

다음 조건을 만족하면 일급 객체로 간주한다.

무명의 리터럴로 표현이 가능하다.
변수나 자료 구조(객체, 배열…)에 저장할 수 있다.
함수의 파라미터로 전달 할 수 있다.
반환값(return value)으로 사용할 수 있다.
*/

// 1. 무명의 리터럴로 표현이 가능하다.
// 2. 변수나 데이터 구조안에 담을 수 있다.

var increase = function(num) {
    return num + 1;
  };
  
  var decrease = function(num){
    return num - 1;
  };
  
  var obj = {
    increase: increase,
    decrease: decrease
  };
  
  // 2. 함수의 파라미터로 전달 할 수 있다.
  function cal(func, num){
    return func(num);
  }
  
  console.log(cal(increase, 1));
  console.log(cal(decrease, 1));
  
  // 3. 반환값(return value)으로 사용할 수 있다.
  function cal(mode){
    var funcs = {
      'plus' : function(left, right){return left + right},
      'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
  }
  console.log(cal('plus')(2,1));
  console.log(cal('minus')(2,1));