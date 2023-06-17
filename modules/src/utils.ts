export function add(x: number, y: number): number {
	return x + y;
}

export function random<T>(array: T[]): T {
	const index = Math.floor(Math.random() * array.length);
	return array[index];
}
