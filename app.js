class UserTemplate {
  constructor(name, password, age, date) {
    this.name = name;
    this.password = password;
    this.age = age;
    this.date = date;
    this.connected = false;
  }

  login() {
    this.connected = true;
    console.log("Your login status: ", this.connected);
  }

  logout() {
    this.connected = false;
    console.log("Your login status: ", this.connected);
  }

  checkStatus() {
    if (this.connected) {
      console.log("You are logged in.");
    } else {
      console.log("You are logged out.");
    }
  }
}

user1 = new UserTemplate("Andy", "andy1234", 35, "2020-01-25");
user2 = new UserTemplate("Mesut", "m10official", 31, "2020-01-25");

console.log(user1);
console.log(user1.login());
console.log(user1.checkStatus());
console.log(user1.logout());
console.log(user1.checkStatus());
