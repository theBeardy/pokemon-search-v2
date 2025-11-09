import { useState, useEffect, useRef } from 'react';
import './index.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({});

  const handleChange = (value) => {
    setQuery(value);
  }

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}/`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        
      }
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [query])

  return (
    <>
      <div className='w-screen h-screen bg-blue-400 flex flex-col items-center'>
        <input
          className='bg-blue-900 w-[25%] h-[45px] mt-24 text-white text-center focus:outline-none inset-shadow-sm inset-shadow-black/50' 
          placeholder='Search by name or pokedex ID'
          onChange={(e) => handleChange(e.target.value)}
        />
        { results !== '' && 
          <div className='m-12 w-[400px] flex flex-col justify-center items-center bg-blue-900'>
            <p className='h-10 w-auto text-white font-alt capitalize'>{results.name}</p>
            <p className='h-10 w-auto text-white font-alt capitalize'>{results.id}</p>
            {results.sprites && <img src={results.sprites.front_default} alt={results.name} className="w-[200px]"/>}
          </div>
        }
      </div>
    </>
  )
}

export default App
