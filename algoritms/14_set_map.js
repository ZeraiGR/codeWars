const map = new Map();
const objKey = {id: 1};
map.set(objKey, "kirya");

console.log(map.get(objKey));
// -------------------------------

const set = new Set();

set.add(5);
set.add(5);
set.add(4);
set.add(3);
set.add(5);
set.add(5);
set.add(3);
console.log(set);