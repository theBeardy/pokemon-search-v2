import { useState, useEffect, useRef } from 'react'
import pokeDex from  './assets/pokedex.json';

export default function searchSuggestions(value) {

    const [autoComplete, setAutoComplete] = useState(pokeDex);

    return(
        <>
        <div className="bg-blue-900 text-white w-[25%] mt-4 rounded-md">
            {autoComplete.length > 0 && autoComplete.slice(0, 10).map((poke) => (
                <div 
                key={poke.id}
                className="p-2 hover:bg-blue-700 cursor-pointer capitalize"
                onClick={() => setQuery(poke.name.english)}
                >
                {poke.name.english}
                </div>
            ))}
        </div>
        </>
    )
}