const createLogger = () => {
    const records = [];
    return {
        warn(message) {
            // input: string
            // output: undefined
            records.push({
                message,
                dateTime: new Date(),
                type: 'warn'
            });
        },

        error(message) {
            records.push({
                message,
                dateTime: new Date(),
                type: 'error'
            });
        },

        log(message) {
            records.push({
                message,
                dateTime: new Date(),
                type: 'log'
            });
        },
        //input:string
        //output: array

        // algo
        //1. check if input -> filter
        //2. return all records
        //3. sort
        getRecords(str) {
            return (str ? records
                    .filter(({
                        type
                    }) => type === str) : records)
                .sort((a, b) => a.dateTime - b.dateTime);
        }
    };
};
const logger1 = createLogger();
console.log(logger1);
const res = logger1.warn('hello');
console.log(res)
console.log(logger1.getRecords());
console.log(logger1.getRecords('error'))