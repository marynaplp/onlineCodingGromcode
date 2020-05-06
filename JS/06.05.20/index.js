const adminIds = ['1', '3'];
const users = [{
        id: '1',
        name: "Bob"
    },
    {
        id: '2',
        name: "Tom"
    },
    {
        id: '3',
        name: "Sam"
    },
    {
        id: '4',
        name: "Tad"
    }
]
const markAdmins = (users, adminIds) => {
    let userArr = [];
    adminIds.forEach(item => {
        userArr = users.map(user => {
            if (item === user.id) {
                user.isAdmin = true;
            }
            return user;
        })
    });
    userArr.forEach(user => {
        if (!user.isAdmin) {
            user.isAdmin = false
        }
    })
    return userArr;
}
const adminUsers = markAdmins(users, adminIds);
console.log(adminUsers);