import { Box, Grid, Heading } from "@chakra-ui/layout";
import { FC } from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
type Props = {
  poke: any;
  inTeamPokeData: any[];
  fnSetInTeam: (...args) => void;
};

export const UserDefinedPoke: FC<Props> = ({
  poke,
  inTeamPokeData,
  fnSetInTeam,
}) => {
  return (
    <Grid placeItems="center" gap={5}>
      <Heading textTransform="capitalize">{poke.name}</Heading>
      {poke.sprites.front_default && (
        <Image src={poke.sprites.front_default} width={100} height={100} />
      )}
      <Button colorScheme="green" onClick={fnSetInTeam}>
        Add to Team
      </Button>
    </Grid>
  );
};
