// object destructuring 
// array destructuring


const user = {
    name: {
        firstName: "Alamin",
        lastName: "Ahmed",
    },
    gender: "male",
    address: {
        currAddress: "Chuadanga",
    },
    favColor: "black",
    hobby: "developer",
    age: 20,
}

const userAddInfo = user.address.currAddress;
// console.log(userAddInfo);

const {hobby, gender, address: {currAddress}, name: {lastName}, age} = user;
// console.log(hobby, gender, currAddress, age, lastName);


const friends = ["Mizan", "Raja", "Mathin"];

const [myFriend, ,] = friends;
console.log(myFriend);

const myFriends = friends[2];
// console.log(myFriends);