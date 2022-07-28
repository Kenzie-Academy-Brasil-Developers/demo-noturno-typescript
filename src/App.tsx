import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Display from "./components/Display"

interface User {
  firstName:string,
  lastName:string
}

//exemplo de extends
interface UserImg extends User{
  img?:string
}

function App() {
  const [ count, setCount] = useState<number>(0)

  const [user, setUser] = useState<UserImg>({} as UserImg);

  const sum = (value:number) =>{
    setCount(value + 1)
  };

  const showName = (firstName:string, lastName:string, img?:string)=>{
    setUser({firstName, lastName, img})
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <button onClick={() => sum(count)}> + </button>
        <button onClick={() => setCount(count - 1)}> - </button>

        <button onClick={() => showName("Guilherme", "Gonçalves", "imagem")}>Mostrar nome</button>
        {/* <h2>{user?.lastName}</h2> */}

        <Display user={user}/>
      </header>
    </div>
  );
}

export default App;
