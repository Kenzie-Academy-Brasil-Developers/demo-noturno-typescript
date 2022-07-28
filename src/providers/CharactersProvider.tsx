import { createContext, useState, useContext, ReactNode, useEffect, Dispatch, SetStateAction } from "react";

interface CharactersProviderProps{
    children: ReactNode;
}

interface Character {
    id: number;
    name: string;
    status: "Alive" | "Dead" | "unknown";
    species: string;
    image: string;
}

interface CharactersProviderData{
    characters: Character[];
    favorites:Character[];
    setFavorites: Dispatch<SetStateAction<Character[]>>;
    addFavorite: (character: Character) => void;
}

const CharactersContext = createContext<CharactersProviderData>({} as CharactersProviderData)

const useCharacters = () =>{
    const context = useContext(CharactersContext);
    return context;
}

const CharactersProvider = ({children}:CharactersProviderProps) =>{
    const [characters, setCharacters] = useState<Character[]>([]);
    const [favorites, setFavorites] = useState<Character[]>([]);    
    
    useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((res) => setCharacters(res.results));
    }, []);
    
    const addFavorite = (character: Character) =>{
        setFavorites([...favorites, character]);
    }

    return (
    <CharactersContext.Provider value={{characters, favorites, setFavorites, addFavorite}}>
        {children}
    </CharactersContext.Provider>
    )
}

export {CharactersProvider, useCharacters}