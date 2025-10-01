// console.log(fetch('https://jsonplaceholder.typicode.com/users/1'))

async function main() {
    const response = await (fetch('https://jsonplaceholder.typicode.com/users/1'));
    console.log(response);
}

main();