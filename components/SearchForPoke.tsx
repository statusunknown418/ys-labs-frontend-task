import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Heading, Box } from "@chakra-ui/react";
type Props = {
  getPoKemonName: (...args) => void;
};

export const SearchForPoke: FC<Props> = ({ getPoKemonName }) => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <FormControl id="searchPoke" maxW="4xl">
      <FormLabel>Search for Pokemon</FormLabel>
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
    </FormControl>
  );
};
