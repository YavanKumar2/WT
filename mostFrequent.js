function mostFrequent(arr) {
  let freqMap = {};
  let maxFreq = 0;
  let mostFrequentElement = arr[0];

 
  for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      
      freqMap[element] = (freqMap[element] || 0) + 1;
      if (freqMap[element] > maxFreq) {
          maxFreq = freqMap[element];
          mostFrequentElement = element;
      }
  }

  return mostFrequentElement;
}

let arr = [1, 2, 3, 2, 2, 3, 4, 5, 2];
let mostFrequentElement = mostFrequent(arr);
console.log("Most frequent element:", mostFrequentElement);
