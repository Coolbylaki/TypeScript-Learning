function square(num: number) {
	return num * num;
}

function greet(person: string) {
	return `Hi there, ${person}`;
}

const doSomething = (person: string, number: number, isFunny: boolean) => {
	if (isFunny) {
		return `${person} is funny times ${number}`;
	}
};

// Default prop
function greetStranger(person: string = "Stranger") {
	return `Hi there, ${person}`;
}
