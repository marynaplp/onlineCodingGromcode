const timer = {
        secondsPassed: 0,
        minsPassed: 0,
        timeId: 0,

        // startTimer() {
        //     const adder = function() {
        //         console.log(this)
        //         this.secondsPassed += 1;
        //     };
        //     console.log(this);
        //     const rest = adder.bind(this) //console.log(bind)
        //     setInterval(rest, 1000)
        // },

        startTimer() {
            setInterval(() => {
                this.secondsPassed += 1;
                if (this.secondsPassed === 60) {
                    this.minsPassed += 1
                    this.secondsPassed = 0;
                }

            }, 1000);
        },
        stopTimer() {
            clearInterval(this.timerId);
            this.timerId = null;
        },



    }
    //timer.startTimer();
timer.stopTimer()


// setTimeout(() => {
//     console.log('hello');
// }, 2000);


// loose context


// const user = {
//     name: "Test",
//     run() {
//         console.log(this)

//     }
// }
// user.run()

// function printer(func) {
//     console.log("I am running");
//     func();
// }
// const func = user.run
// console.log(func)
// func();
//func callswithout any object
// when you call func withoutobject

// if we use regular function the contex can be lost
// in any callback the context can be lost. It can be fixedwith the arrow function