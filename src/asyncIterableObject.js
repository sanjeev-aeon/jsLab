(() => {

    const range = {

        start: 0,
        end: 10,
        [Symbol.asyncIterator]() {
            const self = this;
            let current = self.start;
            return {
                async next() {
                    return await new Promise(resolve => {
                        setTimeout(() => {
                            if (current <= self.end)
                                resolve({ value: current++, done: false });
                            else
                                resolve({ done: true });
                        }, 1000);
                    });
                }
            };
        }
    };





    (async () => {
        const x = await range[Symbol.asyncIterator]().next();
        console.log(x);
    }
    )();



    (async () => {

        for await (let x of range) {
            console.log(x);
        }
    })()

})()