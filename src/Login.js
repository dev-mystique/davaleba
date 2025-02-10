
const users = [
    {id: 1, username: "sandro", password: "123"},
    {id: 2, username: "jane_smith", password: "securePass!"},
    {id: 3, username: "mike_jordan", password: "basketball23"},
    {id: 4, username: "lisa_wong", password: "helloWorld"},
    {id: 5, username: "tom_hardy", password: "venomRules"},
    {id: 6, username: "emma_stone", password: "easyA123"},
    {id: 7, username: "kevin_bacon", password: "footloose!"},
    {id: 8, username: "nancy_drew", password: "detective99"},
    {id: 9, username: "harry_potter", password: "hogwartsMagic"},
    {id: 10, username: "tony_stark", password: "iamIronMan"}
];

function checkLogin(username, password) {
    let user = users.filter((user1) => {
        return (username === user1.username && password === user1.password);
    })
    if (user.length === 0) {
        console.log("User does not exist");
        return false;
    } else {
        console.log({
            user: {
                username: user[0].username,
                id: user[0].id,
            },
            auth: true
        })
        return {
            user: {
                username: user[0].username,
                id: user[0].id,
            },
            auth: true
        };
    }
}

export default checkLogin;

