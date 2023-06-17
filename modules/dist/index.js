import { random as randomNum, add } from "./utils.js";
import User, { userHelper } from "./User.js";
const random = 123;
console.log(randomNum([1, 2, 3, 4, 5]));
console.log(add(1, 2));
const newUser = new User("Lazar", "test@gmail.com");
newUser.logout();
userHelper();
