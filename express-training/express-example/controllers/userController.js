const users = require('../models/user');


const getLastId = () => users.reduce((prev, actual, acc) => {
	if(actual.id > acc) {
		acc = actual.id;
	}
	return acc;
},0 );

exports.index = (req, res) => {
	res.status(200).json(users);
};

exports.getOne = (req, res) => {
	const id = req.params.id;
	const userFiltered = users.filter(user => user.id.toString() === id.toString());
	if(userFiltered.length > 0) {
		res.status(200).json(userFiltered[0]);
	}else {
		res.status(200).json(userFiltered);
	}
}

exports.createOne = (req, res) => {
	const newId = getLastId()+1;
	const name = req.body.name;
	users.push({id: newId, name});
	res.status(201).json({id: newId, name});
}

exports.updateOne = (req, res) => {
	console.log("Llego al controlador users ahora es:")
	console.log(users);
	const id = req.params.id;
	let user = undefined;
	for(let i = 0; i < users.length; i++){
		if(id.toString() === users[i].id.toString()){
			users[i].name = req.body.name;
			user = users[i];
		}
	}
	if(user){
		console.log("Todo ha ido bien users ahora es:")
		console.log(users);
		res.status(202).json(user);
	}else {
		console.log("No existe el user");
		res.status(404).json({message: "user not found"});
	}
};

exports.deleteOne = (req, res) => {
	const id = req.params.id;
	const newUsers = users.filter(user => user.id.toString() !== id.toString());
	if(users.length === newUsers.length){
		res.status(404).json({message: "user not found"});
	}else{
		res.status(200).json({message: "the user was deleted"});
	}

}
