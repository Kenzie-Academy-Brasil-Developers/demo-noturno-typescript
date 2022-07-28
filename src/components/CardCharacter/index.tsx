import { useCharacters } from "../../providers/CharactersProvider";
import Button from "../Button";
import { Container, Content, Image } from "./styles";

interface CardCharacterProps {
  character: {
    id: number;
    name: string;
    status: "Alive" | "Dead" | "unknown";
    species: string;
    image: string;
  };
  toDelete?:boolean;
}

const CardCharacter = ({ character, toDelete }: CardCharacterProps) => {
  const {addFavorite} = useCharacters()

  return (
    <Container status={character.status}>
      <Image src={character.image} alt={character.name} />
      <Content>
        <h3>{character.name}</h3>
        <p>{character.species}</p>
        <Button onClick={() => addFavorite(character)} toDelete={toDelete} disabled={toDelete}>Favoritar</Button>
      </Content>
    </Container>
  );
};

export default CardCharacter;
