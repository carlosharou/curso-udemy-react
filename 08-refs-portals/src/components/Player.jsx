import { useState, useRef } from 'react';

export default function Player() {
  const [ playerName, setPlayerName ] = useState(null);
  //const [ submitted, setSubmitted ] = useState(false);
  const inputPlayer = useRef();

  const handleChangeName = (event) => {
    setPlayerName(event.target.value);
  }

  const handleSubmited = () => {
    //setSubmitted(true);
    setPlayerName(inputPlayer.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input
          ref={inputPlayer} 
          type="text" 
        />
        <button onClick={handleSubmited}>Set Name</button>
      </p>
    </section>
  );
}
