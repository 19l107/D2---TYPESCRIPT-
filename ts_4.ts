type PersonalInterface = {
    prefix: string;
    email: string;
    phonenumber: string;
    address: string;
    firstname: string;
    lastname: string;
    middlename: string;
}
function details(user: PersonalInterface) {
    return `${user.prefix} ${user.firstname} ${user.lastname} ${user.email} ${user.phonenumber} ${user.address} `;
}
const user: PersonalInterface = {
    prefix: "Mr.",
    firstname: "Bharath",
    lastname: "Raja",
    email: "bharathraja1410@gmail.com",
    phonenumber: "999xxxxx172",
    address: "Kumaran Street, Sholinghur, Tamilnadu - 631102",
};
const Details = details(user);
console.log(Details);