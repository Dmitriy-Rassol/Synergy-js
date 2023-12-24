// Числа кратные 3,5 или 3 и 5
const count = 100;

const multi = () => {
  for (var i = 1; i <= count; i++) {
    if (i % 3 == 0 || i % 5 == 0 || (i % 3 == 0 && i % 5 == 0)) {
      console.log(`число ${i} кратно 3, 5 или 3 и 5 одновременно`);
    }
  }
};

multi();

// Найти все трёхзначные числа Армстронга

function armstrongNumber() {
  for (var i = 1; i < 10; ++i) {
    for (var j = 0; j < 10; ++j) {
      for (var k = 0; k < 10; ++k) {
        var pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
        var plus = i * 100 + j * 10 + k;
        if (pow == plus) {
          console.log(pow);
        }
      }
    }
  }
}
armstrongNumber();

// Наибольший общий делитель

const nod = (a, b) => {
  let c = 0;
  do {
    if (a > b) {
      a -= b;
    } else if (a < b) {
      c = a;
      a = b;
      b = c;
    }
  } while (a != b);
  console.log(a);
};

nod(10, 16);
