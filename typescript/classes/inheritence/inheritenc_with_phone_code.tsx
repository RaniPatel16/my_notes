class User {
  constructor(
    private _firstName: string,
    private lastName: string
  ) {}

  get fullName(): string {
    return `${this._firstName} ${this.lastName}`;
  }

  set firstName(name: string) {
    if (name.length < 3) {
      console.log(
        "Name is not valid. It should contain atleast 3 characters"
      );
      return;
    }

    this._firstName = name;
  }

  phone(): void {
    console.log("This is phone");
  }
}

class AdminUser extends User {

  constructor(
    _firstName: string,
    lastName: string,
    private age: number
  ) {
    super(_firstName, lastName);

  }

  manageUsers(): void {
    console.log("Managing users");
  }

  phone(): void {
    super.phone();
    console.log("This is smart phone");
  }
}

const obj1 = new User("rani", "patel");

const obj2 = new AdminUser("harpal", "patel", 26);

const obj3 = new AdminUser("Zeel", "patel", 20);

console.log(obj2);
console.log(obj3);

obj1.firstName;


obj2.phone();