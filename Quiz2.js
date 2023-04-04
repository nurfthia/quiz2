let dbUsers= [
    {
        username: "fathia",
        password: "060899",
        name:"Fathia",
        email: "fathia@utem.edu.my"
    },
    {
        username: "amri",
        password: "180699",
        name: "Amri",
        email: "emri@utem.edu.my"
    },
    {
        username: "alif",
        password: "090699",
        name: "Alif",
        email: "alif@utem.edu.my"
    }
]

function login(a,b)
{
    let matchUser = dbUsers.find
    (
        N => N.username ==a
    )

    if(!matchUser) return "User not found!"
    if(matchUser.password == b) {
        return matchUser
    } else 
    {
        return "Invalid password"
    }
}

function register (a,b,c,d)
{
    dbUsers.push
    (
        {
            username: a,
            password: b,
            name: c,
            email: d

        }
    )
}

//try to login
console.log(login("fathia","060899"))
console.log(login("amri","180699"))
console.log(login("alif","090699"))

register("fathia","060899","fathia@utem.edu.my")

console.log(login("fathia","060899"))

