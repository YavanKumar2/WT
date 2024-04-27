let str = prompt("Enter String: ");

for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z') {
    str = str.substring(0, i) + str.charAt(i).toUpperCase() + str.substring(i + 1);
  } else if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') {
    str = str.substring(0, i) + str.charAt(i).toLowerCase() + str.substring(i + 1);
  }
}

console.log(str);
