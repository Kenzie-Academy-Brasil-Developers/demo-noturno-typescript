import React, { useEffect, useState } from "react";
import "./App.css";
import CardCharacter from "./components/CardCharacter";
import { useCharacters } from "./providers/CharactersProvider";

function App() {

  const {characters, favorites} = useCharacters()

  return (
    <div className="App">
      <header className="App-header">

        <div>
          {characters.map((character) => {
            return favorites.includes(character) || <CardCharacter key={character.id} character={character} />
          }
          )}
        </div>

        <div>
          {favorites.map((character) => {
            return <CardCharacter key={character.id} character={character} toDelete/>
          })}
        </div>
        
      </header>
    </div>
  );
}

export default App;
