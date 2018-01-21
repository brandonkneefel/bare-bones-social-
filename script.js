var database = [
    {
        username: "Bobby",
        password: "123"
    }
];

var newsfeed = [
    {
        username: "Jon",
        timeline: "I like Buffy"
    },
    {   
        username: "Jenny",
        timeline: "Yay"
    }

];

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

/*function signIn(user, pass) {
    if(user === database[0].username && 
       pass === database[0].password)
        console.log(newsFeed);
} else {
    alert("Sorry, wrong username and password");
}
}*/
    

signIn(userNamePrompt, passwordPrompt);