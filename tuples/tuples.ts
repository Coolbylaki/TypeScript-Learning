const myTuple: [number, number, string] = [1, 5, "Lazar"];

const RGB: [number, number, number] = [255, 243, 60];
console.log(RGB.join(" "));

// Order does matter
type HTTPResponse = [number, string];

const HTTPStatus: HTTPResponse = [200, "OK"];
const ErrorStatus: HTTPResponse = [404, "Page not found!"];

// After the tuple has been created it will not complain if you add/remove something
HTTPStatus.push(304);
HTTPStatus.pop();
HTTPStatus.pop();
HTTPStatus.pop();

// Tuple of tuples
const responses: HTTPResponse[] = [
	[200, "OK"],
	[404, "Page not found!"],
	[500, "Server error"],
];
