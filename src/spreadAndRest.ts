// spread operator

const friends: string[] = ["Rahim", "Karim"];

const collageFriends: string[] = ["Sadik", "Salman", "Sonket"];

friends.push(...collageFriends);
// console.log(friends);


const user = {
    name: "Alamin",
    address: "Chuadanga",
}

const otherInfo = {
    currAddress: "Botia Para",
    favColor: "black",
}

const userInfo = { ...user, ...otherInfo };
// console.log(userInfo);


const sentInvitation = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(
        `Sent invitation to ${friend}`
    ))
}

sentInvitation("rahim", "karim", "pagol",)