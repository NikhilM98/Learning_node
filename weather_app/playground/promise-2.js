var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 2500);
    });
};

asyncAdd(8, 7).then(res => {
    console.log('Result:', res);
    return asyncAdd(res, 15);
}).then(res => {
    console.log('Result must be 30,', res);
}).catch(errorMessage => console.log(errorMessage));
