type User = {
    firstName: string;
    lastName: string;
  };
  
  function getUserFullName(user: User) {
    return `${user.firstName} ${user.lastName}`;
  }
  
  const user: User = {
    firstName: "Bharath",
    lastName: "Raja"
  };
  
  const userFullName = getUserFullName(user);
  console.log(userFullName);