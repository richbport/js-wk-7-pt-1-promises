// console.log(fetch('https://jsonplaceholder.typicode.com/users/1'))

async function main() {
    try {
        const response = await (fetch('https://jsonplaceholder.typicode.com/users/1'));
        const data =  await response.json() 
        console.log(data); 
    } catch (error) {
        
    }
}

main(); 

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
