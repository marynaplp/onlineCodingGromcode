const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerId: 0,
    startTimer() {
        this.timerId = setInterval(() => {

            this.secondsPassed += 5;
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 5000);
    },
    getTime() {
        let secs = this.secondsPassed < 10 ? `0${this.secondsPassed}` : this.secondsPassed()
        return `{this.minsPassed}: ${secs}`;

    },
    stopTimer() {
        clearInterval(this.timerId);
    },
    resetTimer() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    },
}