function removeDuplicatesIgnoreCase(arr) {
  let uniqueElements = new Set();

  for (let i = 0; i < arr.length; i++) {
      let element = arr[i].toLowerCase();
      uniqueElements.add(element);
  }

  return Array.from(uniqueElements);
}


let arr = ["Apple", "banana", "apple", "Banana", "Cherry", "banana"];
let uniqueArray = removeDuplicatesIgnoreCase(arr);
console.log("Array with duplicates removed (ignoring case):", uniqueArray);
