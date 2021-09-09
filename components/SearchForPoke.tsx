import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Heading, Box } from "@chakra-ui/react";
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
    <FormControl id="searchPoke" maxW="4xl">
      <FormLabel>Search for a Pokemon</FormLabel>
      <Input
        type="text"
        placeholder="Search for your desired Pokemon"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        type="submit"
        colorScheme="orange"
        onClick={() => getPoKemonName(search)}
      >
        Search!
      </Button>
      {pokemonData && (
        <Button
          colorScheme="green"
          onClick={() => {
            addToUserTeam(pokemonData);
          }}
        >
          Add Current Pokemon!
        </Button>
      )}
    </FormControl>
  );
};
