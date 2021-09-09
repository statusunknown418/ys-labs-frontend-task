import { Box, Grid, Heading } from "@chakra-ui/layout";
import { FC } from "react";
import Image from "next/image";
import { Badge, Button, Flex, Tag } from "@chakra-ui/react";
type Props = {
  poke: any;
};

export const UserDefinedPoke: FC<Props> = ({ poke }) => {
  return (
    <Grid
      placeItems="center"
      gap={5}
      p={10}
      bgColor="#343d64"
      rounded="xl"
      width="md"
    >
      <Heading color="white" textTransform="capitalize">
        {poke.name}
      </Heading>
      <Box mt={3} bg="whiteAlpha.300" p={2} rounded="lg">
        <Flex as="div">
          <Heading fontSize="xl" color="purple.300" mr={10}>
            HP: {poke.stats[0].base_stat}
          </Heading>
          <Heading fontSize="xl" color="red.400">
            Attack Power: {poke.stats[1].base_stat}
          </Heading>
        </Flex>
      </Box>
      <Box>
        {poke.sprites.front_default && (
          <Image src={poke.sprites.front_default} width={100} height={100} />
        )}
        {poke.sprites.back_default && (
          <Image src={poke.sprites.back_default} height={100} width={100} />
        )}
      </Box>
      <Flex>
        {poke.abilities.map((a) => (
          <Tag key={a.slot} colorScheme="teal" mx="3">
            {a.ability.name}
          </Tag>
        ))}
      </Flex>
    </Grid>
  );
};
