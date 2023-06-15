// This is totally fine
function getRandomElementReact<T>(numArray: T[]): T {
	const maxIndex = numArray.length - 1;
	const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
	return numArray[randomIndex];
}

// You need to add trailing comma in React arrow function
const getRandomElementReactArrow = <T,>(numArray: T[]): T => {
	const maxIndex = numArray.length - 1;
	const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
	return numArray[randomIndex];
};
