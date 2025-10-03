// console.log(fetch('https://jsonplaceholder.typicode.com/users/1'))

// async function main() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );

//     // Check if the response is successful
//     if (!response.ok) { // Checks the HTTP response status
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("This is the error ->", error.message);
//   }
// }

// main();

// async function main() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("User Data", data);
//   } catch (error) {
//     console.error("Error occured while fetching data:", error.message);
//   }
// }

// main();

function askMomForCookie() {
  return new Promise((resolve, reject) => {
    console.log("Mom, can I have a cookie?");

    setTimeout(() => {
        let momSaysYes = Math.random() > 0.3

        if(momSaysYes) {
            resolve("Yes, here's your cookie!")
        } else {
          reject("No cookie for you!")
        }
    }, 2000);
  });
}

async function getCookie() {
  console.log("Waiting for Mom to decide")
  try {
    let cookie = await askMomForCookie()
    console.log(cookie)
  } catch(error) {
    console.log(error)
  }
}