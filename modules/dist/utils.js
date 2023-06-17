export function add(x, y) {
    return x + y;
}
export function random(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}
