//alg
//1.querySelector allelements
//sendPost request &handleresponse
//validate input

const serverUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users"
const user = {
    email: "test@.com",
    name: "Maryna Pylypchenko",
    city: "Kiev"
}
const res = fetch(serverUrl, {
        method: "POST",
        headers: {
            'Content Type': "application/json"
        },
        body: JSON.stringify(user),
    })
    //input: none
    //output: promise 
    .then(resp => {
        if (resp.ok) {
            return resp.json();


        }
        if (resp.status === 400) {
            throw new Error("User data is not correct")
        }
        if (resp.status === 500) {
            throw new Error("You are fucked up")
        }
    })
    // uerBody : result of the previous then
    .then(userBody => {
        console.log(userBody);

    })
    .catch((error) => {
        debugger;
        console.log(error)
    })
    // .then(resp => {
    //     debuger;
    //     if (resp.status === 201) {
    //         alert(JSON.stringify(resp.body))
    //     }
    //     console.log(resp)
    // })
console.log(res)