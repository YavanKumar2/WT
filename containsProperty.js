function hasProperty(obj, property) {
  return obj.hasOwnProperty(property);
}

let person = {
  name: "John",
  age: 30,
  city: "New York"
};

let propertyToCheck = "age";
if (hasProperty(person, propertyToCheck)) {
  console.log(`The object has the property "${propertyToCheck}".`);
} else {
  console.log(`The object does not have the property "${propertyToCheck}".`);
}
