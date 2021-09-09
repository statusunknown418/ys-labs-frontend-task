import { Box, Grid, Heading } from "@chakra-ui/layout";
import { FC } from "react";
import Image from "next/image";
import { Badge, Button } from "@chakra-ui/react";
type Props = {
  poke: any;
};

export const UserDefinedPoke: FC<Props> = ({ poke }) => {
  return (
    <Grid placeItems="center" gap={5}>
      <Heading textTransform="capitalize">{poke.name}</Heading>
      {poke.sprites.front_default && (
        <Image src={poke.sprites.front_default} width={100} height={100} />
      )}
      <Badge></Badge>
    </Grid>
  );
};
