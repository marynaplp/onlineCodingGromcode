const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // setFullName(fullName) {
    //     [this.firstName, this.lastName] = fullName.split(' ');
    // }
    set fullName(fullName) {
        [this.firstName, this.lastName] = fullName.split(' ');
    },
}
user._firstName = 1;
console.log(user._firstName)

// console.log(user.fullName);
// user.fullName = 'Ada Korn';
// console.log(user.fullName);