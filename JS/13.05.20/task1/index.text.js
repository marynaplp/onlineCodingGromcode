const logger = createLogger();
logger1.warn("eeeee");
logger1.error("PPPPPP");
logger1.log("OOOOOO")
let actual = logger.getRecords('warn');
let expected = [{ message: "eeeee", dateTime: expect.any(Date), type: "warn" }];
expect(actual).toEqual(expected);
//