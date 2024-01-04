// Преобразовать строку так, чтобы первая буква была заглавной
let desc = `luke, I am your father`;

const changeString = (desc) => {
  return console.log(desc[0].toUpperCase() + desc.slice(1)); //Luke, I am your father
};

changeString(desc);

// Сравнить строки и привести к единому виду

let string1 = "AbcdEfg";
let string2 = "abCDEFg";

const compare = (text1, text2) => {
  if (text1 === text2) {
    console.log("Строки равны");
  } else {
    console.log(`Строки не равны: ${text1}, ${text2}`);
  }

  if (text1.toUpperCase() === text2.toUpperCase()) {
    text1 = text1.toUpperCase();
    text2 = text2.toUpperCase();
    console.log(
      `Строки приведены к верхнему регистру и равны: ${text1}, ${text2}`
    );
  } else {
    console.log(`Строки не равны: ${text1}, ${text2}`);
  }
};

compare(string1, string2);

// Определить високосный ли год

let years = [2000, 2001, 2002, 2003, 2004, 2005];

const leapYears = (years) => {
  for (let i = 0; i < years.length; i++) {
    let year = years[i];
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(year + " - високосный год");
    }
  }
};

leapYears(years);


// Сортировка спомощью sort и reverse

let numbers = [6, 187, 66, 4, 67, 30, 18];

// Сортировка массива по возрастанию
let sortedArray = numbers.sort(function(a, b) {
  return a - b;
});
console.log("Массив после сортировки по возрастанию:", sortedArray);

// Сортировка массива по убыванию
let reversedArray = sortedArray.reverse();
console.log("Массив после сортировки по убыванию:", reversedArray);