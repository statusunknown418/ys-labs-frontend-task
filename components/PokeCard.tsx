import { FC, useState } from "react";
import {
  Box,
  Badge,
  Heading,
  Center,
  Flex,
  Button,
  Tag,
  Grid,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import { AlertComponent } from "./AlertComponent";
type Props = {
  userPokes: any;
  pokemonData: any;
  setFn: (...args) => void;
  addToTeam: (...args) => void;
};

export const PokeCard: FC<Props> = ({
  userPokes,
  pokemonData,
  setFn,
  addToTeam,
}) => {
  return (
    <Grid
      p="10"
      m={5}
      rounded="xl"
      minW="sm"
      maxW="2xl"
      placeItems="center"
      bgColor="#343d64"
    >
      {userPokes.length === 6 && (
        <Badge padding={1} mb={5} rounded="md" colorScheme="red">
          Please remove any of your pokemons to continue
        </Badge>
      )}

      <Heading color="white" textAlign="center" textTransform="uppercase">
        {pokemonData.name}
      </Heading>
      <Box mt={3} bg="whiteAlpha.300" p={2} rounded="lg">
        <Flex as="div">
          <Heading fontSize="xl" color="purple.300" mr={10}>
            HP: {pokemonData.stats[0].base_stat}
          </Heading>
          <Heading fontSize="xl" color="red.400">
            Attack Power: {pokemonData.stats[1].base_stat}
          </Heading>
        </Flex>
      </Box>
      <Box rounded="lg">
        <Image
          src={pokemonData.sprites.front_default}
          height={100}
          width={100}
        />
        {pokemonData.sprites.back_default && (
          <Image
            src={pokemonData.sprites.back_default}
            height={100}
            width={100}
          />
        )}
      </Box>

      <Center>
        <Flex as="div">
          {pokemonData.abilities.map((a) => (
            <Tag key={a.slot} colorScheme="teal" mx="3">
              {a.ability.name}
            </Tag>
          ))}
        </Flex>
      </Center>
      <Center mt="10">
        <Button
          colorScheme="green"
          onClick={() => addToTeam(pokemonData)}
          disabled={userPokes.length === 6 && true}
        >
          Add to Pocket!
        </Button>
      </Center>
    </Grid>
  );
};
