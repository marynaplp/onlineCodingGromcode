const name = "Test";
//run();

function run() { // outer for createMessenger 
    console.log('run')
}
const go = () => {
    console.log('go')
}

function createMessenger() {
    let message = 'Just learn it';
    let sender = 'Gromcode';

    function sendMessage(name) {
        console.log(`${name}, ${message}! Your ${sender}`);
    }

    function setSender(newSender) {
        console.log(name);
        sender = newSender;
    }

    function setMessage(text) {
        message = text;
    }
    return {
        sendMessage,
        setMessage,
        setSender,
    };
}
const messanger1 = createMessenger();
messanger1.setSender("SOME SENDER");
messanger1.setMessage("Hello")

const messager2 = createMessenger();
messanger2.setMessage("HELLO")

//console.log(name);
//enviroment Record:{
//name: "Test"
//

//enviromentRecord: {
//message: "..,"
//sender: ...,
//sendMesssage: ...
//}