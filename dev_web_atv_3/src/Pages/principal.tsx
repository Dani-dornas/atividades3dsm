import useIbge from "../Hooks/useIbge";
import Title from "../components/Title";

export default function Principal() {
  const { regioes } = useIbge();
  return (
    <>
        <Title> Regiões </Title>
      
    </>
  );
}

//<p>Principal {JSON.stringify(regioes)}</p>