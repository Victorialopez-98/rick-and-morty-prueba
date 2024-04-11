import imagenrickmorty from './img/1.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    console.log(characterApi);
    setCharacters(characterApi.results);

  };
  //console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters = {setCharacters}/>
        ) : (
          <>
          <img src={imagenrickmorty} alt='futurama' className='img-home' />
          <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>
        ) } 
        
        
      </header>
    </div>
  );
}

export default App;
