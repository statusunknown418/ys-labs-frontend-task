import { FC, useState } from "react";
import {
  Box,
  Badge,
  Heading,
  Center,
  Flex,
  Button,
  Tag,
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
    <Center>
      <Box
        p="10"
        m={10}
        border="1px solid orange"
        rounded="lg"
        shadow="xl"
        maxW="xl"
        alignItems="center"
        justifyContent="center"
      >
        {userPokes.length === 6 && (
          <Badge padding={1} mb={5} rounded="md" colorScheme="orange">
            Please remove any of your pokes to continue
          </Badge>
        )}

        <Heading textAlign="center" textTransform="uppercase">
          {pokemonData.name}
        </Heading>
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
          <Flex>
            {pokemonData.abilities.map((a) => (
              <Tag key={a.slot}>{a.ability.name}</Tag>
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
      </Box>
    </Center>
  );
};
