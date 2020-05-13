function createLogger() {
    //input : string 
    //output: none
    let logs = [];

    function warn(text) {
        logs.push({
            message: Text,
            dateTime: new Date(),
            type: "warn",
        });

    }
    //input : string 
    //output: none
    function error(text) {
        logs.push({
            message: Text,
            dateTime: new Date(),
            type: "error",
        });

    }
    //input : string 
    //output: none
    function log(text) {
        logs.push({
            message: Text,
            dateTime: new Date(),
            type: "log",
        });
    };
    //input : string 
    //output: none
    function getRecords(type) {
        let filtered = type ? logs.filter(el => el.type === text) : logs;
        return filtered.sort((a, b) => b.dateTime - a.dateTime)

    }

    return {
        warn,
        error,
        log,
        getRecords
    };
}
let logger1 = Logger();