function listProperties(obj) {
  for (let prop in obj) {
      console.log(prop)
  }
}

let person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log("Properties of the object:");
listProperties(person);
