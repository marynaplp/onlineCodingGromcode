function markAdmins(users, ids) {
    return users.map(user => {
        const isAdmin = ids.includes(id);
        return {
            ...user,
            isAdmin
        }
    })