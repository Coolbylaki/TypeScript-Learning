// Typeof guard
function triple(value: number | string): string | number {
	if (typeof value === "number") {
		return value * 3;
	}
	return value.repeat(3);
}

// Truthiness guard
const element = document.getElementById("idk");
if (element) {
	element.addEventListener("click", () => console.log("Hey"));
} else {
	console.log("Element is null");
}

const printLetters = (word?: string) => {
	if (word) {
		for (const char of word) {
			console.log(char);
		}
	} else {
		console.log("You did not pass in a word!");
	}
};

// Equality narrowing
function someDemo(x: string | number, y: string | boolean) {
	if (x === y) {
		return x.concat(y); // Both are strings
	}
}

// In operator narrowing
interface Movie {
	title: string;
	duration: number;
}

interface TVShow {
	title: string;
	episodeNumber: number;
	episodeDuration: number;
}

function getRuntime(title: Movie | TVShow): number {
	if ("duration" in title) {
		return title.duration;
	}
	return title.episodeDuration * title.episodeNumber;
}
