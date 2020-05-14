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
        function createLogger() {
            //input : string 
            //output: none
            let logs = [];

            function warn(text) {
                addMessage('warn', text);

            }
            //input : string 
            //output: none
            function error(text) {
                addMessage('error', text);

            }
            //input : string 
            //output: none
            function log(text) {
                addMessage('log', text);
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
        let logger1 = createLogger();
        logger1.warn("eeeee");
        logger1.warn("ttttt");
        logger1.error("PPPPPP");
        logger1.log("OOOOOO")

        let logger2 = createLogger();
        logger2.warn('LOGGER2');
        let logger3 = createLogger();
        logger3.error('LOGGER3');
        console.log()

    }
    //input : string 
    //output: none
    function log(text) {
        addMessage('log', text);
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
let logger1 = createLogger();
logger1.warn("eeeee");
logger1.warn("ttttt");
logger1.error("PPPPPP");
logger1.log("OOOOOO")

let logger2 = createLogger();
logger2.warn('LOGGER2');
let logger3 = createLogger();
logger3.error('LOGGER3');
console.log()