function details(user) {
    return "".concat(user.prefix, " ").concat(user.firstname, " ").concat(user.lastname, " ").concat(user.email, " ").concat(user.phonenumber, " ").concat(user.address, " ");
}
var arr = new Array("Mr.", "Bharath", "Raja", "bharathraja1410@gmail.com", "999xxxxx172", "Kumaran Street, Sholinghur, Tamilnadu - 631102");
var str = arr.join();
console.log(str);
