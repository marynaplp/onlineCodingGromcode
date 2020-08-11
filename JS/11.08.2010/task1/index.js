//input: array of string,array of object
//output:array objects
//algo
//1. map of object 
const markAdmins = (users, adminsIds) =>
    users.map(user => {
        let id = user.id
        const isAdmin = adminsIds.includes(id); // if it has specific value
        return {
            ...user, // copy user
            isAdmin
        }
    });
const adminIds = ['1', '3'];
const users = [{
        id: '1',
        name: 'Bob'
    },
    {
        id: '2',
        name: 'Tom'
    },
    {
        id: '3',
        name: 'Mary'
    },
    {
        id: '4',
        name: 'Tad'
    }
];
console.log(markAdmins(users, adminIds))