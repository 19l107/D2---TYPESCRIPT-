type AddressInterface = {
    housenumber: number;
    street: string;
    city: string;
    state: string;
    postalcode:number;
    country:string;
}
function address(user: AddressInterface) {
    return `${user.housenumber} ${user.street} ${user.city} ${user.state} ${user.postalcode} ${user.country}`;
}
const user: AddressInterface = {
    housenumber: 15/1,
    street: "Kumaran Street",
    city: "Sholinghur",
    state: "Tamilnadu",
    postalcode:631102,
    country: "India"
};
const userFulladdress = address(user);
console.log(userFulladdress);