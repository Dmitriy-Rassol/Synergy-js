// Выведите четверть часа

const quarter = (min) => {
  if (0 >= min <= 15) {
    console.log("Первая четверть часа");
  } else if (15 > min <= 30) {
    console.log("Вторая четверть часа");
  } else if (30 > min <= 45) {
    console.log("Третья четверть часа");
  } else if (45 > min <= 59) {
    console.log("Четвертая четверть часа");
  } else {
    console.log("Введите число от 0 до 59");
  }
};

quarter(10); //Первая четверть часа

// Скрипт определяет время года по номеру месяца

const season = (mounth) => {
  switch (mounth) {
    case 12:
    case 1:
    case 2:
      console.log("Зима");
      break;
      case 3:
    case 4:
    case 5:
      console.log("Весна");
      break;
      case 6:
    case 7:
    case 8:
      console.log("Лето");
      break;
      case 9:
    case 10:
    case 11:
      console.log("Осень");
      break;
    default:
      console.log("Неверное значение");
  }
};

season(8); //Лето

// Возводит четное число в квадрат, нечетное в куб
const squareOrCubic = (counter) => {
 if (counter % 2 == 0) {
    console.log(counter*=counter);
 } else {
    console.log(counter**= 3);
 }
};

squareOrCubic(5);

