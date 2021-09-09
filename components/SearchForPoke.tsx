import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Heading, Box, Text, Flex } from "@chakra-ui/react";
type Props = {
  getPoKemonName: (...args) => void;
  addToUserTeam: (...args) => void;
  pokemonData: any;
  setterFn?: (...args) => void;
};

export const SearchForPoke: FC<Props> = ({
  getPoKemonName,
  addToUserTeam,
  pokemonData,
  setterFn,
}) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    setSearch("");
  }, []);
  console.log(search);
  return (
    <FormControl id="searchPoke" minW="sm" maxW="2xl" color="white">
      <FormLabel fontSize="sm">Search for a Pokemon</FormLabel>
      <Flex alignItems="center" justifyContent="space-between">
        <Input
          type="text"
          placeholder="Search for your desired Pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          fontSize="sm"
          ml="1"
          type="submit"
          colorScheme="yellow"
          onClick={() => getPoKemonName(search)}
        >
          Search!
        </Button>
      </Flex>
      {pokemonData && (
        <Button
          mt="2"
          fontSize="sm"
          colorScheme="purple"
          onClick={() => {
            addToUserTeam(pokemonData);
          }}
        >
          Add searched Pokemon!
        </Button>
      )}
    </FormControl>
  );
};
