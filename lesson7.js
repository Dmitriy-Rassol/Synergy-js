//Проверяем является ли слово палиндромом

function isPalindrome(word) {
    // Удаляем все пробелы и приводим слово к нижнему регистру
    let cleanedWord = word.toLowerCase().replace(/\s/g, "");
    // Переворачиваем слово
    let reversedWord = cleanedWord.split("").reverse().join("");
    // Сравниваем исходное слово с перевернутым словом
    return cleanedWord === reversedWord;
  }
  
  console.log(isPalindrome("level")); // Выведет true
  console.log(isPalindrome("Hello")); // Выведет false
  
  //-----------------------------------------------------

  // Является ли число простым или нет
  function isPrime(number) {
    // Проверка на отрицательные числа и числа меньше 2
    if (number <= 1) {
      return console.log(`${number}: не является простым числом`);;
    }
    // Проверка делителей числа
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return `${number}: не является простым числом`;
      }
    }
    return `${number}: является простым числом`;
  }
  console.log(isPrime(7)); //7: является простым числом
  console.log(isPrime(10)); // 10: не является простым числом 
  console.log(isPrime(13)); // 13: является простым числом
  
  //-----------------------------------------------------

  //Определить возраст человека

  function calculateAge(day, month, year) {
    // Получаем текущую дату
    let currentDate = new Date();
    // Получаем день, месяц и год текущей даты
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0, поэтому добавляем 1
    let currentYear = currentDate.getFullYear();
    // Вычисляем возраст
    let age = currentYear - year;
    // Проверяем, был ли уже день рождения в текущем году
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
      age--;
    }
    return age;
  }
  
  // Пример использования функции
  console.log(calculateAge(15, 5, 1990)); // Выведет текущий возраст на момент выполнения скрипта
  console.log(calculateAge(10, 9, 1985)); // Выведет текущий возраст на момент выполнения скрипта
  
  //-----------------------------------------------------

  //Определяет введена ли дата выходным днём

  function isWeekend(dateString) {
    // Создаем объект Date из введенной даты
    let date = new Date(dateString);
  
    // Получаем день недели (0 - воскресенье, 1 - понедельник, и т.д.)
    let dayOfWeek = date.getDay();
  
    // Проверяем, является ли день субботой или воскресеньем
    return dayOfWeek === 0 || dayOfWeek === 6;
  }
  
  // Пример использования функции
  console.log(isWeekend("2022-10-02")); // Выведет true, так как это воскресенье
  console.log(isWeekend("2022-10-03")); // Выведет false, так как это понедельник
  console.log(isWeekend("2022-10-08")); // Выведет true, так как это суббота
  