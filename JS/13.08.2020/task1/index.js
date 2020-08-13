const createLogger = () => {
    const records = [];
    return {
        warn(message) {
            //input:string
            //output:undefined
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
        //input string
        //output array
        //algo:
        //check if input ->filter
        //return all records
        //sort

        getRecords(type) {
            return (type ? records
                    .filter(message => message.type == type) : records)
                .sort((mes1, mes2) => {
                    mes1.dateTime - mes2.dateTime
                })
                // if (type) {
                //     return records
                //         .filter(message => message.type === type)
                //         .sort((mes1, mes2) => {
                //             mes1.dateTime - mes2.dateTime
                //         })
                // } else {
                //     return records
                //         .sort((mes1, mes2) => {
                //             mes1.dateTime - mes2.dateTime
                //         })

        }
    };
};
const logger1 = createLogger();
console.log(logger1);
const res = logger1.warn('hello');
console.log(res)
console.log(logger1.getRecords());
console.log(logger1.getRecords('error'))