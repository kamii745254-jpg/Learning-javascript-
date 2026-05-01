// JavaScript String Methods Practice

let text = "  Hello JavaScript World!  ";

console.log("Original String:", text);

// length
console.log("Length:", text.length);

// toUpperCase()
console.log("Uppercase:", text.toUpperCase());

// toLowerCase()
console.log("Lowercase:", text.toLowerCase());

// trim()
console.log("Trim:", text.trim());

// slice()
console.log("Slice (0,5):", text.slice(0, 5));

// substring()
console.log("Substring (2,8):", text.substring(2, 8));

// replace()
console.log("Replace JavaScript with JS:", text.replace("JavaScript", "JS"));

// replaceAll()
let sentence = "I like cats. Cats are cute.";
console.log("ReplaceAll:", sentence.replaceAll("Cats", "Dogs"));

// concat()
let first = "Hello";
let second = " World";
console.log("Concat:", first.concat(second));

// includes()
console.log("Includes JavaScript:", text.includes("JavaScript"));

// startsWith()
console.log("StartsWith Hello:", text.trim().startsWith("Hello"));

// endsWith()
console.log("EndsWith World!:", text.trim().endsWith("World!"));

// charAt()
console.log("Character at 4:", text.charAt(4));

// indexOf()
console.log("Index of JavaScript:", text.indexOf("JavaScript"));

// lastIndexOf()
console.log("Last Index of o:", text.lastIndexOf("o"));

// split()
let words = text.trim().split(" ");
console.log("Split into words:", words);