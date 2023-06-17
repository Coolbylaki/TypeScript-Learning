export default class User {
	constructor(public username: string, public email: string) {}

	logout(): void {
		console.log(`${this.username} has been logged out!`);
	}
}

export function userHelper(): void {
	console.log("Helping");
}
