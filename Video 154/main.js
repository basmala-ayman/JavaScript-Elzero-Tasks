class User {
    #id;
    constructor(id,name) {
        this.#id = id;
        this.name = name;
    }
    #sayHello() {
        return "Hello from User";
    }
    getId() {
        return this.#id;
    }
}

class Admin extends User{
    constructor(id,name,per) {
        super(id, name)
        this.per = per;
    }
}

let user = new User(102,"Ali")
let admin = new Admin(101, "Basmala", true);
console.log(admin.name)
console.log(admin.per)
console.log(admin.getId());
console.log("#####")
console.log(user.getId())
// console.log(user)