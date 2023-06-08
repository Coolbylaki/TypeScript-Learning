const activeUsers: string[] = ["Steve", "Joe", "Cody"];
activeUsers.push("Colt");

const ageList: number[] = [18, 24, 34];
ageList.unshift(30);

// Alternative syntax
const isLoggedIn: Array<boolean> = [true, false];

// Our own types
type Point = {
	x: number;
	y: number;
};

const coords: Point[] = [];
coords.push({
	x: 23,
	y: 30,
});

// Two dimensional
const board: string[][] = [
	["X", "O", "X"],
	["X", "O", "X"],
	["X", "O", "X"],
];

// Three dimensional
const demo: number[][][] = [
	[
		[1, 2, 3],
		[2, 1, 0],
		[3, 2, 1],
	],
	[
		[1, 2, 3],
		[2, 1, 0],
		[3, 2, 1],
	],
	[
		[1, 2, 3],
		[2, 1, 0],
		[3, 2, 1],
	],
];
