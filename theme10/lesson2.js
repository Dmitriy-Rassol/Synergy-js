// Напишите скрипт, который считает количество секунд в часе и выводит  в консоль
const secondsInHour = () => {
  let seconds = 60 * 60;
  return console.log(`В часе ${seconds} секунд`);
};

secondsInHour(); //В часе 3600 секунд

//Напишите скрипт, в котором по-очереди переменная будет изменять свое значение с помощью комбинированных операторов

const combinedCounter = () => {
  let counter = 0;
  console.log(`Старотовое значение: ${counter}`); //Старотовое значение: 0
  counter += 7;
  console.log(`Увеличили значение на 7: ${counter}`); //Увеличили значение на 7: 7
  counter *= 4;
  console.log(`Увеличили значение в 4 раза: ${counter}`); // Увеличили значение в 4 раза: 28
  counter -= 8;
  console.log(`Уменьшили значение на 8: ${counter}`); //Уменьшили значение на 8: 20
  counter /= 4;
  console.log(`Разделили значение на 4: ${counter}`); // Разделили значение на 4: 5
  counter **= 3;
  console.log(`Возвели значение в 3 степень: ${counter}`); //  Возвели значение в 3 степень: 125
  counter %= 5;
  console.log(`Остаток от деления на 5: ${counter}`); // Остаток от деления на 5: 0
};

combinedCounter();

// Какой будет результат у выражений?
const comparison = () => {
  console.log( 5>4 ); // true
  console.log( "ананас">"яблоко"); //false
  console.log( "2">"12"); //true
  console.log( undefined==null); // true
  console.log( undefined===null); //false
  console.log( null=="0"); // false
  console.log( null===+"0"); //false
}

comparison()