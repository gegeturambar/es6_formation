

function aFction(){
	return { name: "aName",
		firstName:"aFirstName",
		lastName: "aLastName"};
}


let ret = aFction();
console.log(ret);

const {name,firstName,lastName} = aFction();
console.log(name,firstName,lastName);

