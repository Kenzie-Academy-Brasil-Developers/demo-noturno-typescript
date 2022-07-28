import React, { useEffect, useState } from "react";
import "./App.css";
import CardCharacter from "./components/CardCharacter";

// TIPAGEM OBRIGATÓRIA
//    PROPS
//    STATES
//    PARÂMETROS DE FUNÇÕES

interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  image: string;
}

function App() {
  //   const [characters, setCharacters] = useState<Array<Character>>([]);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((res) => setCharacters(res.results));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {characters.map((character) => (
          <CardCharacter key={character.id} character={character} />
        ))}
      </header>
    </div>
  );
}

export default App;
