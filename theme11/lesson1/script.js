class Employee1 {
    constructor(firstName, lastName, rate, daysWorked) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.rate = rate;
      this.daysWorked = daysWorked;
    }

    calculateSalary() {
      return this.rate * this.daysWorked;
    }
  }

  class Employee2 extends Employee1 {
    constructor(firstName, lastName, rate, daysWorked) {
      super(firstName, lastName, rate, daysWorked);
    }

    getFirstName() {
      return this.firstName;
    }

    getLastName() {
      return this.lastName;
    }

    getRate() {
      return this.rate;
    }

    getDaysWorked() {
      return this.daysWorked;
    }

    setFirstName(newFirstName) {
      this.firstName = newFirstName;
    }

    setLastName(newLastName) {
      this.lastName = newLastName;
    }

    setRate(newRate) {
      this.rate = newRate;
    }

    setDaysWorked(newDaysWorked) {
      this.daysWorked = newDaysWorked;
    }

    calculateSalary() {
      if (Number.isInteger(this.rate)  && Number.isInteger(this.daysWorked)) {
        return this.rate * this.daysWorked;
      } 
    }
  }

  const employee1 = new Employee1('John', 'Doe', 20, 25);
  console.log('Employee 1:');
  console.log('Имя:', employee1.firstName);
  console.log('Фамилия:', employee1.lastName);
  console.log('Ставка:', employee1.rate);
  console.log('Колличество дней:', employee1.daysWorked);
  console.log('Зарплата:', employee1.calculateSalary());

  const employee2 = new Employee2('Jane', 'Smith', 30);
  console.log('Employee 2:');
  console.log('Имя:', employee2.getFirstName());
  console.log('Фамилия:', employee2.getLastName());
  console.log('Ставка:', employee2.getRate());
  console.log('Колличество дней:', employee2.getDaysWorked());
  console.log('Зарплата:', employee2.calculateSalary() || console.error('Недостаточно данных для расчёта зарплаты'));