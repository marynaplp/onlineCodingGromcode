export const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerId: 0,
    startTimer() {
        this.timerId = setInterval(() => {

            this.secondsPassed += 1;
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 1000);
    },
    getTime() {
        if (this.secondsPassed > 10)
            return `${this.minsPassed}:${this.secondsPassed}`;
        else return `${this.minsPassed}:0${this.secondsPassed}`;

    },
    stopTimer() {
        clearInterval(this.timerId);
        this.timerId = null;
    },
    resetTimer() {
        this.stopTimer()
        this.secondsPassed = 0;
        this.minsPassed = 0;
    },
}