const promiseAll = async promises => {
    const output = [];
    if (promises.length > 0) {
        for (let i = 0; i < promises.length; i++) {
            try {
                const val = await promises[i];
                output.push(val);
            } catch (err) {
                throw new Error(err);
            }
        }
    }
    return output;
};

const slowPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("slow Promise resolvee"), 300);
});

promiseAll([Promise.resolve(2), slowPromise, Promise.reject("This is an error")])
    .then(res => console.log(res))
    .catch(err => console.log(err));
