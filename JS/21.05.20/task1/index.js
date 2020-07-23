const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(fullName) {
        [this.firstName, this.lastName] = fullName.split(' ');
    },
}