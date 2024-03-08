// Datos de prueba
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [10, 20, 30, 40, 50];
const array4 = [5, 8, 10, 15];
const array5 = [1, 2, [3, 4, [5, 6]]];
const array6 = ["apple", "banana", "cherry"];

// concat
const combinedArray = array1.concat(array2);
console.log("concat:", combinedArray);

// copyWithin
const copiedArray = array3.copyWithin(2, 0, 3);
console.log("copyWithin:", copiedArray);

// entries
const iterator = array6.entries();
for (let [index, value] of iterator) {
  console.log("entries:", index, value);
}

// every
const allGreaterThanZero = array4.every(x => x > 0);
console.log("every:", allGreaterThanZero);

// fill
const filledArray = array1.fill(0, 1, 2);
console.log("fill:", filledArray);

// filter
const filteredArray = array4.filter(x => x % 2 === 0);
console.log("filter:", filteredArray);

// find
const foundElement = array4.find(x => x > 8);
console.log("find:", foundElement);

// findIndex
const foundIndex = array4.findIndex(x => x > 8);
console.log("findIndex:", foundIndex);

// flat
const flattenedArray = array5.flat(2);
console.log("flat:", flattenedArray);

// flatMap
const mappedArray = array4.flatMap(x => [x, x * 2]);
console.log("flatMap:", mappedArray);

// includes
const includesElement = array1.includes(2);
console.log("includes:", includesElement);

// indexOf
const index = array1.indexOf(3);
console.log("indexOf:", index);

// keys
const keysIterator = array6.keys();
for (let key of keysIterator) {
  console.log("keys:", key);
}

// lastIndexOf
const lastIndex = array1.lastIndexOf(1);
console.log("lastIndexOf:", lastIndex);

// map
const mappedValues = array4.map(x => x * 2);
console.log("map:", mappedValues);

// pop
const poppedElement = array1.pop();
console.log("pop:", poppedElement);

// push
array2.push(7);
console.log("push:", array2);

// reduce
const sum = array3.reduce((acc, val) => acc + val, 0);
console.log("reduce:", sum);

// reduceRight
const subtractRight = array3.reduceRight((acc, val) => acc - val, 100);
console.log("reduceRight:", subtractRight);

// reverse
const reversedArray = array1.reverse();
console.log("reverse:", reversedArray);

// shift
const shiftedElement = array1.shift();
console.log("shift:", shiftedElement);

// slice
const slicedArray = array1.slice(1, 3);
console.log("slice:", slicedArray);

// some
const someGreaterThanTen = array3.some(x => x > 10);
console.log("some:", someGreaterThanTen);

// sort
const sortedArray = array4.sort((a, b) => a - b);
console.log("sort:", sortedArray);

// splice
const splicedArray = array1.splice(1, 2, 10, 11);
console.log("splice:", array1);

// toLocaleString
const localizedString = array3.toLocaleString("es-CO", { style: "currency", currency: "COP" });
console.log("toLocaleString:", localizedString);

// toString
const stringRepresentation = array1.toString();
console.log("toString:", stringRepresentation);

// unshift
array2.unshift(1, 2);
console.log("unshift:", array2);

// values
const valuesIterator = array6.values();
for (let value of valuesIterator) {
  console.log("values:", value);
}

// forEach
console.log("forEach:");
array1.forEach((element, index) => {
  console.log(`Index ${index}: ${element}`);
});

// join
const joinedString = array3.join(" - ");
console.log("join:", joinedString);

