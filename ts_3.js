function address(user) {
    return "".concat(user.housenumber, " ").concat(user.street, " ").concat(user.city, " ").concat(user.state, " ").concat(user.postalcode, " ").concat(user.country);
}
var user = {
    housenumber: 15 / 1,
    street: "Kumaran Street",
    city: "Sholinghur",
    state: "Tamilnadu",
    postalcode: 631102,
    country: "India"
};
var userFulladdress = address(user);
console.log(userFulladdress);
