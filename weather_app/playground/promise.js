var somePromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved');
        resolve('Can be resolved only once');
        reject('Once resolved cannot be changed');
    }, 2500);
});

somePromise.then(message => {
    console.log('Success:', message);
}, errorMessage => {
    console.log('Error:', errorMessage);
});