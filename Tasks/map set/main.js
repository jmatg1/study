'use strict';

const obj = {};
const map = new Map();
const n = 10_000_000;

console.time('Object insert');
for (let i = 0; i < n; i++) obj[i] = i;
console.timeEnd('Object insert'); // ~120ms (Chrome)

console.time('Map insert');
for (let i = 0; i < n; i++) map.set(i, i);
console.timeEnd('Map insert'); // ~80ms (Chrome)


let result;
console.time('Object hasOwnProperty');
result = obj.hasOwnProperty('999999');
console.timeEnd('Object hasOwnProperty');

console.time('Map has');
result = map.has(999999);
console.timeEnd('Map has');

console.time('Map forEach');
map.forEach(el => {
    el = 0;
});
console.timeEnd('Map forEach');


console.time('Object let key in obj');
for (let key in obj) {
    obj[key] = 0
}
console.timeEnd('Object let key in obj');


console.time('Object Object.keys');
Object.keys(obj).forEach(key => {

    obj[key] = 0
});

console.timeEnd('Object Object.keys');




console.time('Object delete');
for (let i = 0; i < n; i++) delete obj[i];
console.timeEnd('Object delete'); // ~500ms (Chrome)

console.time('Map delete');
for (let i = 0; i < n; i++) map.delete(i);
console.timeEnd('Map delete'); // ~60ms (Chrome)
