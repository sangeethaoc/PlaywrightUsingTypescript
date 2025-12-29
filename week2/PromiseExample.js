let promise = new Promise((resolve, reject) => {
    console.log("Order food");
    setTimeout(() => {
        resolve("Food is ready");
        reject("Food is not ready");

    }, 6000)
})

promise.then(result => console.log(result))
    .catch(error => console.log(error));

async function convertUppercase(data){
    if (typeof data === 'string') {
        console.log(data.toUpperCase());
    } else {
        console.log("Error: Input is not a string. It is a " + typeof data);
    }
}

convertUppercase("Sangeetha");