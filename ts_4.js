function details(user) {
    return "".concat(user.prefix, " ").concat(user.firstname, " ").concat(user.lastname, " ").concat(user.email, " ").concat(user.phonenumber, " ").concat(user.address, " ");
}
var user = {
    prefix: "Mr.",
    firstname: "Bharath",
    lastname: "Raja",
    email: "bharathraja1410@gmail.com",
    phonenumber: "999xxxxx172",
    address: "Kumaran Street, Sholinghur, Tamilnadu - 631102"
};
var Details = details(user);
console.log(Details);
