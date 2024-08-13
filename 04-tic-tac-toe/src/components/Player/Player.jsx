import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
    const [ playerName, setPlayerName ] = useState(name);
    const [ isEditing, setIsEditing ] = useState(false);

    const onEditHandler = () => {
        setIsEditing((editing) => !editing);
    }

    const onChangeHandler = (ev) => {
        setPlayerName(ev.target.value);
        onChangeName(symbol, ev.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {
                    !isEditing
                    ? <span className="player-name">{playerName}</span>
                    : <input type="text" placeholder="Player Name" defaultValue={playerName} required onChange={onChangeHandler} />
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={onEditHandler}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}