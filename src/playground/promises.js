const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("Resolved data");
        reject("Something went wrong");
    }, 1500);
});

promise.then((data) => {
    console.log(data);
}, (error) => {
    console.log("Error: ", error);
});