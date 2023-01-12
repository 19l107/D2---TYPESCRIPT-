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

var arr = new Array("Mr.","Bharath","Raja","bharathraja1410@gmail.com","999xxxxx172","Kumaran Street, Sholinghur, Tamilnadu - 631102"); 
          
var str = arr.join(); 
console.log( str ); 