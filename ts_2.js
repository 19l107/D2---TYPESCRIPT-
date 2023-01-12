function getUserFullName(user) {
    return "".concat(user.firstName, " ").concat(user.lastName);
}
var user = {
    firstName: "Bharath",
    lastName: "Raja"
};
var userFullName = getUserFullName(user);
console.log(userFullName);
