import axios from "axios";

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: { lat: string; lng: string };
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

// axios
// 	.get<User>("https://jsonplaceholder.typicode.com/users/1")
// 	.then((res) => {
// 		const { data } = res;
// 		printUser(data);
// 	})
// 	.catch((e) => {
// 		console.log("There is an error: ", e);
// 	});

axios
	.get<User[]>("https://jsonplaceholder.typicode.com/users")
	.then((res) => {
		const { data } = res;
		data.forEach(printUser);
	})
	.catch((e) => {
		console.log("There is an error: ", e);
	});

function printUser(user: User): void {
	console.log(user.name);
	console.log(user.email);
	console.log(user.phone);
	console.log("\n");
}
