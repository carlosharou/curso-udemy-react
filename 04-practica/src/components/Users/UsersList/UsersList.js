import React from 'react';
import Card from '../../UI/Card/Card';
import './UsersList.css';

const UsersList = (props) => {
    if (props.users.length === 0) {
        return;
    }

    return (
        <Card className="users">
            <ul>
                {props.users.map((elem) => (
                    <li key={elem.id}>{elem.name} ({elem.age} years old)</li>
                ))}
            </ul>
        </Card>
    );
}

export default UsersList;