import { FC, useRef, useState } from "react";
import { Button, Heading, Text, Flex, Grid, Box } from "@chakra-ui/react";
import { AlertComponent } from "./AlertComponent";
import { PokeTeamItem } from "./PokeTeamItem";
type Props = {
  fnSetPokes: (...args) => void;
  dataUserPokes: any[];
};

export const YourPocket: FC<Props> = ({ fnSetPokes, dataUserPokes }) => {
  return (
    <div>
      <Flex direction="row" mt={10}>
        <Box width="50%" p="5" mr="5" rounded="lg">
          <Heading fontSize="2xl" color="indigo">
            Your Pocket
          </Heading>
          <Text>
            Add up to <span style={{ fontWeight: "bolder" }}>6</span> pokemons
            to your list
          </Text>
          <Button
            colorScheme="red"
            onClick={() => {
              fnSetPokes([]);
            }}
          >
            Delete All
          </Button>
        </Box>
        <Grid
          templateColumns="repeat(3,1fr)"
          width="50%"
          p="5"
          bg="orange.100"
          rounded="lg"
          placeItems="center"
        >
          {/* Alert when limit is achieved */}

          {/* ------------------------------- */}
          {/* Current User Pokemons */}
          {dataUserPokes &&
            dataUserPokes.map((p, key) => (
              <div key={key}>
                <PokeTeamItem
                  pokeDetails={p}
                  name={p.name}
                  onDelete={() =>
                    fnSetPokes(dataUserPokes.filter((u2) => u2.id !== p.id))
                  }
                />
              </div>
            ))}
          {/* ------------------------------ */}
        </Grid>
      </Flex>
    </div>
  );
};
