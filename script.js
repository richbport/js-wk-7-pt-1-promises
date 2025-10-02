// console.log(fetch('https://jsonplaceholder.typicode.com/users/1'))

// async function main() {
//     const response = await (fetch('https://jsonplaceholder.typicode.com/users/1')); // Fetch the data from an API
//     const data =  await response.json() // parse the JSON data
//     console.log(data); // console.log the result
// }

// main(); // Call the function

async function main() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    }

    if (!response.ok) {
        throw new Error(`HTTP error! Status ${response.status}`);
    }
}