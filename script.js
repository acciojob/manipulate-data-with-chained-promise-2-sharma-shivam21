//your JS code here. If required.
 function getInitialArray() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]);
        }, 3000); // 3-second initial delay
      });
    }

    function filterEvenNumbers(arr) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const even = arr.filter(num => num % 2 === 0);
          document.getElementById("output").innerText = even.join(',');
          resolve(even);
        }, 1000); // 1-second delay
      });
    }

    function multiplyByTwo(arr) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const doubled = arr.map(num => num * 2);
          document.getElementById("output").innerText = doubled.join(',');
          resolve(doubled);
        }, 2000); // 2-second delay
      });
    }

    // Chain the promises
    getInitialArray()
      .then(filterEvenNumbers)
      .then(multiplyByTwo)
      .catch(err => {
        document.getElementById("output").innerText = "Error: " + err;
      });