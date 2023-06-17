"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// axios
// 	.get<User>("https://jsonplaceholder.typicode.com/users/1")
// 	.then((res) => {
// 		const { data } = res;
// 		printUser(data);
// 	})
// 	.catch((e) => {
// 		console.log("There is an error: ", e);
// 	});
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
    const { data } = res;
    data.forEach(printUser);
})
    .catch((e) => {
    console.log("There is an error: ", e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
    console.log("\n");
}
