import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';


function App() {
	const [enteredUsers, setEnteredUsers] = useState([]);

	const addUserHandler = (userName, age) => {
		setEnteredUsers((prev) => {
			return [...prev, {
				name: userName,
				age: age,
				id: Math.random().toString()
			}];
		});
	}

	return (
		<div>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={enteredUsers}></UsersList>
		</div>
	);
}

export default App;
