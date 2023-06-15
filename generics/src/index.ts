// Built in generic examples
const nums: Array<number> = [1, 2, 3];
const colors: Array<string> = ["red", "blue"];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
const buttonEl = document.querySelector<HTMLButtonElement>(".btn")!;

buttonEl.addEventListener("click", () => console.log("hey"));

// Classic example of why we would use generics
function numIdentity(item: number): number {
	return item;
}

function stringIdentity(item: string): string {
	return item;
}

function booleanIdentity(item: boolean): boolean {
	return item;
}

// Works, but defeats purpose of TS
function identity(item: any): any {
	return item;
}

// Generic
function genericIdentity<T>(item: T): T {
	return item;
}

genericIdentity<string>("Hello");
genericIdentity<number>(34);
genericIdentity<boolean>(true);

interface Cat {
	name: string;
	breed: string;
}

genericIdentity<Cat>({ name: "John", breed: "Russian blue" });

// Another example
function getRandomElement<T>(numArray: T[]): T {
	const maxIndex = numArray.length - 1;
	const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
	return numArray[randomIndex];
}

getRandomElement<Cat>([
	{ name: "John", breed: "Russian blue" },
	{ name: "Marry", breed: "Russian yellow" },
	{ name: "Willard", breed: "Russian red" },
]);

// Inferred type
getRandomElement([1, 2, 3, 4, 5]);

// Generics with multiple types with type constraint
function merge<T extends object, U extends object>(object1: T, object2: U): T & U {
	return {
		...object1,
		...object2,
	};
}

const comboObject = merge(
	{ user: "Lazar", isAdmin: true },
	{ perms: ["change", "delete"] }
);

// Using interface
function mixCats<T extends Cat, U extends Cat>(catOne: T, catTwo: U) {
	return {
		name: catOne.name,
		breed: catTwo.breed,
	};
}

const cats = mixCats(
	{ name: "John", breed: "Russian Blue" },
	{ name: "Marry", breed: "Russian red" }
);

// Default type
function makeEmptyArray<T = string>(): T[] {
	return [];
}

const strings = makeEmptyArray();
const numbers = makeEmptyArray<number>(); // You can still change it

// Generic classes
interface Song {
	title: string;
	artist: string;
}

interface Video {
	title: string;
	creator: string;
	resolution: string;
}

class VideoPlaylist {
	public videos: Video[] = [];
}

class SongPlaylist {
	public songs: Song[] = [];
}

class Playlist<T> {
	public queue: T[] = [];

	add(element: T) {
		this.queue.push(element);
	}
}

const songs = new Playlist<Song>();

const videos = new Playlist<Video>();
