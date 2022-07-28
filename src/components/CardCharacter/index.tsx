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
}

const CardCharacter = ({ character }: CardCharacterProps) => {
  return (
    <Container status={character.status}>
      <Image src={character.image} alt={character.name} />
      <Content>
        <h3>{character.name}</h3>
        <p>{character.species}</p>
        <Button>Favoritar</Button>
      </Content>
    </Container>
  );
};

export default CardCharacter;
