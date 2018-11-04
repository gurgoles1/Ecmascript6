class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get nameCapital() {
    return this.name.toUpperCase();
  }

  destructingexample() {
    const [one, two, three] = [1, 2, 3];
    console.log(one);
    console.log(two);
    console.log(three);

  }

  static writeHello() {
    console.log("hello");
  }

}

const person = new Person("eric", 10);
person.destructingexample();
Person.writeHello();
