let movieTitle: string = "Amadeus";
movieTitle = "Arrival";

let movieRating: number = 9.99;
movieRating = 8.99;

let isMovieGood: boolean = false;
isMovieGood = true;

let nothing: null = null;
let foo: undefined = undefined;

// Type Inference
let tvShow = "Cartoon Network"; // string
tvShow = "Disney Channel";

let isFunny = false; // boolean
isFunny = true;

// The Any Type & TS Won't Complain
let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();

// Situation where you may want any, but you should avoid this
const colors = ["Blue", "Red", "Orange", "Green", "Black"];
let foundColor: string; // Fix inferred any, and expect color to be string

for (let color of colors) {
	if (color === "Green") {
		foundColor = "Green";
	}
}
