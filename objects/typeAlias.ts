type Coords = {
	x: number;
	y: number;
	z?: number; // Optional
};

const optionalCoords: Coords = {
	x: 1,
	y: 3,
	z: 5,
};

let coordinates: Coords = { x: 34, y: 2 };

function randomCoord(x: number, y: number): Coords {
	return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Coords): Coords {
	return { x: point.x * 2, y: point.y * 2 };
}

// You can do something like this, but it's not common
type MyNum = number;
let age: MyNum = 50;

// Nested objects
type Song = {
	title: string;
	artist: string;
	numStreams: number;
	credits: {
		producer: string;
		writer: string;
	};
};

function calculatePayout(song: Song): number {
	const price = song.numStreams * 0.0033;
	return price;
}

function printSong(song: Song): string {
	return `${song.title} by: ${song.artist}`;
}

const mySong: Song = {
	title: "Unchained Melody",
	artist: "Righteous Brothers",
	numStreams: 123125,
	credits: {
		producer: "Phil South",
		writer: "Alex North",
	},
};

const earnings = calculatePayout(mySong);
console.log(earnings);

const song = printSong(mySong);
console.log(song);

// Readonly
type User = {
	readonly id: number;
	username: string;
};

const user: User = {
	id: 123,
	username: "Cat girl",
};

user.id = 23423; // Readonly error

// Intersection of types
type Circle = {
	radius: number;
};

type Colorful = {
	color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
	radius: 40,
	color: "Blue",
};

// Add another intersection
type Cat = {
	numLives: number;
};

type Dog = {
	breed: string;
};

type CatDog = Cat &
	Dog & {
		age: number;
	};

const lucky: CatDog = {
	numLives: 9,
	breed: "American blue",
	age: 15,
};
