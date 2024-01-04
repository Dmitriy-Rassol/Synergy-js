let daysOfWeek = new Map();

daysOfWeek.set(1, "Понедельник");
daysOfWeek.set(2, "Вторник");
daysOfWeek.set(3, "Среда");
daysOfWeek.set(4, "Четверг");
daysOfWeek.set(5, "Пятница");
daysOfWeek.set(6, "Суббота");
daysOfWeek.set(7, "Воскресенье");

console.log(daysOfWeek); 
// Map(7) {
//     1 => 'Понедельник',
//     2 => 'Вторник',
//     3 => 'Среда',
//     4 => 'Четверг',
//     5 => 'Пятница',
//     6 => 'Суббота',
//     7 => 'Воскресенье'
//   }

console.log(daysOfWeek.get(2)); // Вторник

daysOfWeek.delete(3);

console.log(daysOfWeek);
// Map(7) {
//     1 => 'Понедельник',
//     2 => 'Вторник',
//     4 => 'Четверг',
//     5 => 'Пятница',
//     6 => 'Суббота',
//     7 => 'Воскресенье'
//   }