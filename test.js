function tagFunction(strings, ...values) {
  console.log(strings); // 문자열 배열
  console.log(values); // 삽입된 표현식 값들
}
const name = "John";
const age = 25;
tagFunction`Hello, my name is ${name} and I am ${age} years old.`;
