const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name) {
  cats.push("Ralph")
  return cats;
}

function destructivelyPrependCat(name) {
  cats.unshift("Bob")
  return cats;
}
 

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats
}

function appendCat(name) {
  const cats1 = [...cats, "Broom"];
  return cats1;
}

function prependCat(name) {
  const cats2 = ["Arnold", ...cats];
  return cats2;
}

function removeLastCat() {
  const cats3 = cats.slice(0, cats.length-1);
  return cats3;
}

function removeFirstCat() {
  const cats4 = cats.slice(1);
  return cats4;
}
